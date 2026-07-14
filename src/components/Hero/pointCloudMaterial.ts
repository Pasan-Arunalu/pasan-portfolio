import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Simplex noise implementation for GLSL (Ashima Arts)
const simplexNoise3D = `
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

vec3 curlNoise(vec3 p) {
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = vec3(snoise(p - dx), snoise(p - dx + vec3(43.1, 12.3, 84.4)), snoise(p - dx + vec3(93.4, 34.2, 12.9)));
  vec3 p_x1 = vec3(snoise(p + dx), snoise(p + dx + vec3(43.1, 12.3, 84.4)), snoise(p + dx + vec3(93.4, 34.2, 12.9)));
  vec3 p_y0 = vec3(snoise(p - dy), snoise(p - dy + vec3(43.1, 12.3, 84.4)), snoise(p - dy + vec3(93.4, 34.2, 12.9)));
  vec3 p_y1 = vec3(snoise(p + dy), snoise(p + dy + vec3(43.1, 12.3, 84.4)), snoise(p + dy + vec3(93.4, 34.2, 12.9)));
  vec3 p_z0 = vec3(snoise(p - dz), snoise(p - dz + vec3(43.1, 12.3, 84.4)), snoise(p - dz + vec3(93.4, 34.2, 12.9)));
  vec3 p_z1 = vec3(snoise(p + dz), snoise(p + dz + vec3(43.1, 12.3, 84.4)), snoise(p + dz + vec3(93.4, 34.2, 12.9)));

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  return normalize(vec3(x, y, z) / (2.0 * e));
}
`;

const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uScrollNorm;
uniform float uRadius;

varying vec2 vUv;
varying vec3 vPosition;
varying float vBlend;

${simplexNoise3D}

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Create rotation matrix for Y-axis (very slow rotation, handles reducedMotion externally by pausing uTime or we can do it here)
  float angle = uTime * 0.02;
  mat3 rotY = mat3(
    cos(angle), 0.0, sin(angle),
    0.0, 1.0, 0.0,
    -sin(angle), 0.0, cos(angle)
  );
  
  vec3 rotatedPos = rotY * pos;
  
  // Calculate blend factor based on X axis of the rotated position
  // Left (-X) is 0 (Organic), Right (+X) is 1 (Computational)
  // We use smoothstep to create a seamless blend
  float blendFactor = smoothstep(-uRadius * 0.6, uRadius * 0.6, rotatedPos.x);
  
  // --- Organic Behavior (Left) ---
  // Apply soft noise to position
  float noiseFreq = 0.8;
  float noiseAmp = 0.3;
  vec3 noisePos = rotatedPos + curlNoise(rotatedPos * noiseFreq + uTime * 0.05) * noiseAmp;
  
  // --- Computational Behavior (Right) ---
  // Very clean, slight lattice oscillation along normals
  vec3 normal = normalize(rotatedPos);
  float latticeOscillation = sin(rotatedPos.y * 10.0 + uTime * 0.5) * 0.05 + 
                             cos(rotatedPos.x * 10.0 + uTime * 0.5) * 0.05;
  vec3 compPos = rotatedPos + normal * latticeOscillation;
  
  // --- Blend ---
  // When user scrolls down, uScrollNorm approaches 1.
  // As it does, we force the blend to 1 (Computational) or a new unified state.
  // The requirement says: "The distinction gradually disappears. By the second section, sphere behaves as one unified object."
  // Let's unify them to a gentle state (not purely computational, but a calm mix).
  float finalBlend = mix(blendFactor, 0.5, clamp(uScrollNorm * 1.5, 0.0, 1.0));
  
  // Interpolate between the two states
  vec3 mixedPos = mix(noisePos, compPos, finalBlend);
  
  // --- Scroll Spread (Spread Across Screen) ---
  // Smoother, gentler transition. Starts spreading after scrolling 30% down.
  float scrollSpread = smoothstep(0.3, 1.0, uScrollNorm);
  
  // Very gentle spread amount so they stay within the camera view
  float spreadAmount = scrollSpread * 1.2; 
  
  // Push outwards, but flatten Z so they spread across the screen (X/Y) without hitting the camera
  vec3 spreadDir = normalize(rotatedPos);
  spreadDir.z *= 0.1;
  
  // Slow, calming scatter noise
  vec3 scatterNoise = curlNoise(rotatedPos * 1.5 + uTime * 0.05) * 0.3;
  
  mixedPos += (spreadDir + scatterNoise) * spreadAmount;
  
  // --- Mouse Interaction ---
  // Mouse in normalized screen space (-1 to 1)
  // Project mixedPos to screen space roughly to check distance, 
  // or simply use mouse coords to drive a repulsion in world space.
  vec3 mouseWorld = vec3(uMouse.x * uRadius * 1.5, uMouse.y * uRadius * 1.5, 0.0);
  float distToMouse = distance(mouseWorld.xy, mixedPos.xy);
  
  // Gentle parallax/deformation
  float interactionFalloff = smoothstep(2.5, 0.0, distToMouse);
  vec3 interactionDisplacement = normalize(mixedPos - vec3(mouseWorld.xy, -2.0)) * 0.1 * interactionFalloff;
  
  // Disable mouse interaction when heavily spread out, to keep it clean
  mixedPos += interactionDisplacement * (1.0 - scrollSpread);

  vPosition = mixedPos;
  vBlend = finalBlend;
  
  vec4 mvPosition = modelViewMatrix * vec4(mixedPos, 1.0);
  
  // Point size attenuation (increased for visibility)
  gl_PointSize = (18.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
uniform vec3 uColorWarm;
uniform vec3 uColorCool;

varying vec3 vPosition;
varying float vBlend;

void main() {
  // Soft circle shape
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);
  
  // Anti-aliased circle
  float alpha = 1.0 - smoothstep(0.4, 0.5, dist);
  
  if (alpha < 0.01) discard;
  
  // Color gradient based on blend factor
  vec3 finalColor = mix(uColorWarm, uColorCool, vBlend);
  
  // Subtle depth fading based on z
  float depthFade = smoothstep(-2.0, 2.0, vPosition.z);
  finalColor *= mix(0.5, 1.0, depthFade); // Darken points further away less

  // -------------------------------------------------------------
  // TWEAK PARTICLE OPACITY HERE:
  // Change the 0.25 multiplier to adjust the transparency.
  // 1.0 = fully opaque, 0.1 = barely visible.
  // -------------------------------------------------------------
  gl_FragColor = vec4(finalColor, alpha * 0.5);
}
`;

export const PointCloudMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uScrollNorm: 0,
    uRadius: 2.0,
    uColorWarm: new THREE.Color('#9CA3AF'), // Darker warm grey
    uColorCool: new THREE.Color('#6B7280'), // Darker cool grey
  },
  vertexShader,
  fragmentShader
);

// Register it with R3F
extend({ PointCloudMaterial });
