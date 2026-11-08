import React from 'react';

interface Futuristic3DIconProps {
  type: 'masculine' | 'gold18k' | 'since2021' | 'shipping';
  className?: string;
  floatClass?: string;
}

export const Futuristic3DIcon: React.FC<Futuristic3DIconProps> = ({
  type,
  className = '',
  floatClass = 'animate-float-1',
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      
      {/* Ambient Radial Golden Glow */}
      <div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#F3D58A]/15 to-transparent blur-xl pointer-events-none group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 opacity-60"
        aria-hidden="true"
      />

      {/* Floating 3D Object Stage */}
      <div
        className={`relative z-10 w-20 h-20 sm:w-22 sm:h-22 transition-transform duration-500 ease-out group-hover:-translate-y-3 ${floatClass}`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {type === 'masculine' && (
          /* 01: 3D Faceted Shield & Crown Emblem (Identidade Masculina) */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_12px_20px_rgba(212,175,55,0.35)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF4D0" />
                <stop offset="45%" stopColor="#E5C158" />
                <stop offset="100%" stopColor="#9C741E" />
              </linearGradient>
              <linearGradient id="goldShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8F6A1C" />
                <stop offset="100%" stopColor="#302004" />
              </linearGradient>
              <linearGradient id="chromePlate" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1C1811" />
                <stop offset="50%" stopColor="#2E2616" />
                <stop offset="100%" stopColor="#14110B" />
              </linearGradient>
              <linearGradient id="facetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#6E5011" />
              </linearGradient>
              <linearGradient id="facetRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5DC8C" />
                <stop offset="60%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8F6A1C" />
              </linearGradient>
            </defs>

            {/* Futuristic Concentric Base Ring */}
            <ellipse cx="50" cy="82" rx="36" ry="10" fill="url(#chromePlate)" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8" />
            <ellipse cx="50" cy="82" rx="28" ry="7" stroke="#F3D58A" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.6" />

            {/* 3D Isometric Shield Plate */}
            <path
              d="M50 14 L78 26 V52 C78 68 50 82 50 82 C50 82 22 68 22 52 V26 Z"
              fill="url(#chromePlate)"
              stroke="url(#goldHighlight)"
              strokeWidth="1.5"
            />

            {/* Left Facet of Shield (Shadow Side) */}
            <path
              d="M50 18 L26 28 V52 C26 65 50 78 50 78 Z"
              fill="url(#facetLeft)"
              opacity="0.9"
            />

            {/* Right Facet of Shield (Specular Sheen Side) */}
            <path
              d="M50 18 L74 28 V52 C74 65 50 78 50 78 Z"
              fill="url(#facetRight)"
              opacity="0.95"
            />

            {/* Central 3D Beveled Ridge */}
            <line x1="50" y1="18" x2="50" y2="78" stroke="#FFF7D6" strokeWidth="1.2" strokeLinecap="round" />

            {/* Floating 3D Masculine Crown in Center */}
            <path
              d="M36 46 L42 56 L50 36 L58 56 L64 46 L63 60 H37 Z"
              fill="url(#goldHighlight)"
              stroke="#FFF"
              strokeWidth="0.8"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))"
            />
            {/* Crown Jewel Nodes */}
            <circle cx="50" cy="36" r="2.2" fill="#FFF8E0" />
            <circle cx="36" cy="46" r="1.8" fill="#FFF8E0" />
            <circle cx="64" cy="46" r="1.8" fill="#FFF8E0" />
          </svg>
        )}

        {type === 'gold18k' && (
          /* 02: 3D Futuristic Gold Ingot / Chamfered Prism (Banho Ouro 18K) */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_12px_22px_rgba(212,175,55,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ingotTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8E0" />
                <stop offset="30%" stopColor="#F5DC8C" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
              <linearGradient id="ingotFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2BD4F" />
                <stop offset="100%" stopColor="#7A560E" />
              </linearGradient>
              <linearGradient id="ingotRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9E761E" />
                <stop offset="100%" stopColor="#4A3408" />
              </linearGradient>
              <linearGradient id="ringOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Orbital Golden Energy Ring */}
            <ellipse
              cx="50"
              cy="50"
              rx="44"
              ry="18"
              transform="rotate(-25 50 50)"
              stroke="url(#ringOrbit)"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />

            {/* 3D Chamfered Gold Bar Structure */}
            {/* Top Plane (Brilliant Specular Reflection) */}
            <path
              d="M32 28 L68 28 L82 46 L46 46 Z"
              fill="url(#ingotTop)"
              stroke="#FFF8E0"
              strokeWidth="0.8"
            />

            {/* Front Bevel Plane */}
            <path
              d="M18 58 L46 46 L82 46 L54 58 Z"
              fill="url(#ingotFront)"
              stroke="#F3D58A"
              strokeWidth="0.6"
            />

            {/* Left Lower Plane */}
            <path
              d="M18 58 L54 58 L54 74 L18 74 Z"
              fill="url(#ingotFront)"
            />

            {/* Right Isometric Shade Plane */}
            <path
              d="M54 58 L82 46 L82 62 L54 74 Z"
              fill="url(#ingotRight)"
            />

            {/* 18K Relief Engraving */}
            <text
              x="57"
              y="40"
              fill="#523906"
              fontSize="10"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="0.08em"
              textAnchor="middle"
              transform="skewX(-36)"
              style={{ filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.4))' }}
            >
              18K
            </text>

            {/* Sparkling Corner Flares */}
            <polygon points="32,28 34,26 32,24 30,26" fill="#FFF" />
            <polygon points="82,46 84,44 82,42 80,44" fill="#FFF" />
            <circle cx="50" cy="20" r="1.5" fill="#FFEAA8" />
          </svg>
        )}

        {type === 'since2021' && (
          /* 03: 3D Gyroscopic Chronometer (Desde 2021) */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_12px_22px_rgba(212,175,55,0.38)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gyroOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF4D4" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#61440C" />
              </linearGradient>
              <linearGradient id="gyroInner" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5DC8C" />
                <stop offset="70%" stopColor="#8F6A1C" />
                <stop offset="100%" stopColor="#302004" />
              </linearGradient>
              <radialGradient id="gyroCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFBF0" />
                <stop offset="40%" stopColor="#F3D58A" />
                <stop offset="85%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#5E430B" />
              </radialGradient>
            </defs>

            {/* Outer Gimbal Ring in 3D Perspective */}
            <ellipse
              cx="50"
              cy="50"
              rx="42"
              ry="42"
              stroke="url(#gyroOuter)"
              strokeWidth="2.5"
              strokeDasharray="18 4 6 4"
            />

            {/* Middle Tilted Gimbal Ring */}
            <ellipse
              cx="50"
              cy="50"
              rx="38"
              ry="18"
              transform="rotate(45 50 50)"
              stroke="url(#gyroInner)"
              strokeWidth="2"
            />

            {/* Inner Reverse Gimbal Ring */}
            <ellipse
              cx="50"
              cy="50"
              rx="38"
              ry="18"
              transform="rotate(-45 50 50)"
              stroke="url(#gyroOuter)"
              strokeWidth="1.8"
              strokeDasharray="4 2"
            />

            {/* Floating Central Metallic Core */}
            <circle cx="50" cy="50" r="14" fill="url(#gyroCore)" stroke="#FFF" strokeWidth="0.8" />

            {/* Embossed Year 2021 inside core */}
            <text
              x="50"
              y="53.5"
              fill="#2E1F03"
              fontSize="7.5"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="0.05em"
              textAnchor="middle"
            >
              2021
            </text>

            {/* Precision Axis Nodes */}
            <circle cx="50" cy="8" r="2" fill="#FFF7DB" />
            <circle cx="50" cy="92" r="2" fill="#FFF7DB" />
            <circle cx="8" cy="50" r="2" fill="#FFF7DB" />
            <circle cx="92" cy="50" r="2" fill="#FFF7DB" />
          </svg>
        )}

        {type === 'shipping' && (
          /* 04: 3D Holographic Delivery Hex-Pod / Capsule (Envio Todo o Brasil) */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_12px_22px_rgba(212,175,55,0.38)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="podTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF7D6" />
                <stop offset="50%" stopColor="#E0BC52" />
                <stop offset="100%" stopColor="#9C731A" />
              </linearGradient>
              <linearGradient id="podLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#573D07" />
              </linearGradient>
              <linearGradient id="podRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A6518" />
                <stop offset="100%" stopColor="#2E1F03" />
              </linearGradient>
              <radialGradient id="gridBeacon" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Holographic Brazil Radar / Coordinate Grid Base */}
            <ellipse cx="50" cy="82" rx="38" ry="12" fill="url(#gridBeacon)" />
            <ellipse cx="50" cy="82" rx="36" ry="11" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" strokeDasharray="4 3" />
            <ellipse cx="50" cy="82" rx="22" ry="7" stroke="#F3D58A" strokeWidth="0.6" opacity="0.8" />
            <line x1="50" y1="71" x2="50" y2="93" stroke="#D4AF37" strokeWidth="0.6" opacity="0.5" />
            <line x1="14" y1="82" x2="86" y2="82" stroke="#D4AF37" strokeWidth="0.6" opacity="0.5" />

            {/* Glowing Golden Propulsion Beams */}
            <path d="M42 62 L38 78 L46 78 Z" fill="#D4AF37" opacity="0.4" />
            <path d="M58 62 L54 78 L62 78 Z" fill="#D4AF37" opacity="0.4" />

            {/* Isometric 3D Delivery Capsule / Hex-Pod */}
            {/* Top Polygon */}
            <polygon points="50,22 76,34 50,46 24,34" fill="url(#podTop)" stroke="#FFF7D6" strokeWidth="0.8" />

            {/* Left Facet */}
            <polygon points="24,34 50,46 50,66 24,54" fill="url(#podLeft)" stroke="#D4AF37" strokeWidth="0.5" />

            {/* Right Facet */}
            <polygon points="50,46 76,34 76,54 50,66" fill="url(#podRight)" stroke="#8A6518" strokeWidth="0.5" />

            {/* Center Golden Shield Crest Emblem */}
            <polygon points="50,38 58,42 50,58 42,42" fill="#FFF2BD" opacity="0.9" />
            
            {/* National Dispatch Trajectory Dot */}
            <circle cx="50" cy="22" r="2.2" fill="#FFF" />
          </svg>
        )}
      </div>

      {/* 3D Physical Contact Shadow beneath the floating artifact */}
      <div
        className="w-14 sm:w-16 h-3 rounded-full bg-[#000000] blur-sm mt-1 animate-shadow-pulse pointer-events-none"
        aria-hidden="true"
      />

    </div>
  );
};
