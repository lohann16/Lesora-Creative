export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {/* low filler blocks, left */}
        <rect x="0" y="190" width="42" height="110" />
        <rect x="46" y="160" width="34" height="140" />
        <rect x="84" y="210" width="50" height="90" />

        {/* Hillbrow Tower — tapering mast, disc, antenna spike */}
        <polygon points="168,300 178,90 188,90 198,300" />
        <ellipse cx="183" cy="88" rx="16" ry="7" />
        <rect x="181" y="30" width="4" height="58" />

        <rect x="210" y="175" width="46" height="125" />
        <rect x="262" y="140" width="30" height="160" />

        {/* Ponte City — cylindrical tower with hollow core */}
        <rect x="310" y="55" width="70" height="245" rx="35" />
        <ellipse cx="345" cy="150" rx="14" ry="36" fill="#0000" style={{ mixBlendMode: "multiply" }} />
        <rect x="335" y="115" width="20" height="70" fill="black" fillOpacity="0.001" />
        <ellipse cx="345" cy="150" rx="13" ry="34" className="text-transparent" fill="var(--skyline-bg,#ffffff)" />

        <rect x="392" y="200" width="40" height="100" />
        <rect x="440" y="165" width="55" height="135" />

        {/* Carlton Centre — tall flat-topped slab, tallest on the skyline */}
        <rect x="505" y="20" width="64" height="280" />
        <rect x="518" y="4" width="38" height="20" />

        <rect x="580" y="150" width="46" height="150" />
        <rect x="632" y="185" width="60" height="115" />

        {/* pyramid-roofed office block */}
        <rect x="705" y="130" width="56" height="170" />
        <polygon points="705,130 733,95 761,130" />

        <rect x="775" y="170" width="34" height="130" />
        <rect x="818" y="120" width="48" height="180" />

        {/* stepped bank-tower silhouette */}
        <rect x="880" y="200" width="60" height="100" />
        <rect x="892" y="150" width="36" height="50" />
        <rect x="900" y="115" width="20" height="35" />

        <rect x="955" y="180" width="40" height="120" />
        <rect x="1005" y="145" width="30" height="155" />
        <rect x="1045" y="210" width="50" height="90" />
        <rect x="1105" y="175" width="38" height="125" />
        <rect x="1153" y="220" width="47" height="80" />
      </g>
    </svg>
  );
}