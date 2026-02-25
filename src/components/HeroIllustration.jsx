/**
 * HeroIllustration — A modern, flat SVG illustration for the student directory hero section.
 * Features student profile cards, search UI, laptop, books, and graduation cap icons.
 * Color palette: Blue #2563EB, Green #22C55E, Amber #F59E0B, soft grays.
 */
function HeroIllustration({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Student directory illustration"
    >
      {/* ── Background decorative circles ── */}
      <circle cx="400" cy="250" r="220" fill="white" fillOpacity="0.06" />
      <circle cx="400" cy="250" r="160" fill="white" fillOpacity="0.05" />

      {/* ── Laptop base ── */}
      <rect x="240" y="200" width="320" height="200" rx="14" fill="#1e293b" />
      <rect x="250" y="210" width="300" height="160" rx="8" fill="#334155" />

      {/* ── Screen glow ── */}
      <rect x="255" y="215" width="290" height="150" rx="6" fill="#0f172a" />

      {/* ── Search bar on screen ── */}
      <rect x="280" y="228" width="240" height="28" rx="14" fill="#1e293b" />
      <rect x="282" y="230" width="236" height="24" rx="12" fill="#334155" />
      <circle cx="298" cy="242" r="6" stroke="#64748b" strokeWidth="1.5" fill="none" />
      <line x1="302" y1="246" x2="306" y2="250" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="312" y="238" width="60" height="8" rx="4" fill="#475569" />

      {/* ── Profile Card 1 (left on screen) ── */}
      <g>
        <rect x="280" y="268" width="110" height="86" rx="8" fill="#1e293b" />
        <rect x="282" y="270" width="106" height="82" rx="6" fill="#1e3a5f" />
        {/* Avatar */}
        <circle cx="335" cy="293" r="14" fill="#2563EB" />
        <circle cx="335" cy="289" r="5" fill="white" fillOpacity="0.9" />
        <ellipse cx="335" cy="301" rx="8" ry="5" fill="white" fillOpacity="0.9" />
        {/* Name line */}
        <rect x="308" y="313" width="54" height="6" rx="3" fill="#3b82f6" fillOpacity="0.6" />
        {/* Detail lines */}
        <rect x="300" y="324" width="70" height="4" rx="2" fill="#475569" />
        <rect x="310" y="333" width="50" height="4" rx="2" fill="#475569" />
        {/* Status badge - green (present) */}
        <rect x="316" y="342" width="38" height="8" rx="4" fill="#22C55E" fillOpacity="0.25" />
        <rect x="319" y="344" width="32" height="4" rx="2" fill="#22C55E" />
      </g>

      {/* ── Profile Card 2 (center on screen) ── */}
      <g>
        <rect x="398" y="268" width="110" height="86" rx="8" fill="#1e293b" />
        <rect x="400" y="270" width="106" height="82" rx="6" fill="#1e3a5f" />
        {/* Avatar */}
        <circle cx="453" cy="293" r="14" fill="#7c3aed" />
        <circle cx="453" cy="289" r="5" fill="white" fillOpacity="0.9" />
        <ellipse cx="453" cy="301" rx="8" ry="5" fill="white" fillOpacity="0.9" />
        {/* Name line */}
        <rect x="426" y="313" width="54" height="6" rx="3" fill="#8b5cf6" fillOpacity="0.6" />
        {/* Detail lines */}
        <rect x="418" y="324" width="70" height="4" rx="2" fill="#475569" />
        <rect x="428" y="333" width="50" height="4" rx="2" fill="#475569" />
        {/* Status badge - amber (top performer) */}
        <rect x="434" y="342" width="38" height="8" rx="4" fill="#F59E0B" fillOpacity="0.25" />
        <rect x="437" y="344" width="32" height="4" rx="2" fill="#F59E0B" />
      </g>

      {/* ── Laptop keyboard ── */}
      <rect x="220" y="398" width="360" height="14" rx="3" fill="#334155" />
      <rect x="280" y="398" width="240" height="3" rx="1.5" fill="#475569" />
      {/* Trackpad */}
      <rect x="360" y="403" width="80" height="7" rx="3" fill="#475569" />

      {/* ── Floating Profile Card (left side) ── */}
      <g transform="translate(60, 140) rotate(-5)">
        <rect width="130" height="100" rx="12" fill="white" fillOpacity="0.95" />
        <rect x="2" y="2" width="126" height="96" rx="10" fill="white" />
        {/* Shadow */}
        <rect width="130" height="100" rx="12" fill="black" fillOpacity="0.06" />
        {/* Avatar */}
        <circle cx="40" cy="36" r="16" fill="#dbeafe" />
        <circle cx="40" cy="32" r="6" fill="#2563EB" />
        <ellipse cx="40" cy="42" rx="9" ry="5.5" fill="#2563EB" />
        {/* Lines */}
        <rect x="65" y="26" width="50" height="7" rx="3.5" fill="#2563EB" fillOpacity="0.2" />
        <rect x="65" y="38" width="40" height="5" rx="2.5" fill="#e2e8f0" />
        {/* Grade bar */}
        <rect x="15" y="58" width="100" height="6" rx="3" fill="#f1f5f9" />
        <rect x="15" y="58" width="82" height="6" rx="3" fill="#22C55E" />
        {/* Badge */}
        <rect x="15" y="72" width="44" height="14" rx="7" fill="#dcfce7" />
        <rect x="22" y="76" width="30" height="6" rx="3" fill="#22C55E" />
        {/* Connection line */}
        <line x1="130" y1="50" x2="175" y2="80" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
      </g>

      {/* ── Floating Profile Card (right side) ── */}
      <g transform="translate(600, 120) rotate(4)">
        <rect width="130" height="100" rx="12" fill="white" fillOpacity="0.95" />
        <rect x="2" y="2" width="126" height="96" rx="10" fill="white" />
        <rect width="130" height="100" rx="12" fill="black" fillOpacity="0.06" />
        {/* Avatar */}
        <circle cx="40" cy="36" r="16" fill="#fef3c7" />
        <circle cx="40" cy="32" r="6" fill="#F59E0B" />
        <ellipse cx="40" cy="42" rx="9" ry="5.5" fill="#F59E0B" />
        {/* Lines */}
        <rect x="65" y="26" width="50" height="7" rx="3.5" fill="#F59E0B" fillOpacity="0.2" />
        <rect x="65" y="38" width="40" height="5" rx="2.5" fill="#e2e8f0" />
        {/* Grade bar */}
        <rect x="15" y="58" width="100" height="6" rx="3" fill="#f1f5f9" />
        <rect x="15" y="58" width="94" height="6" rx="3" fill="#F59E0B" />
        {/* Badge */}
        <rect x="15" y="72" width="44" height="14" rx="7" fill="#fef3c7" />
        <rect x="22" y="76" width="30" height="6" rx="3" fill="#F59E0B" />
        {/* Star icon */}
        <circle cx="75" cy="79" r="7" fill="#fef3c7" />
        <text x="72" y="83" fontSize="10" fill="#F59E0B">★</text>
        {/* Connection line */}
        <line x1="0" y1="50" x2="-40" y2="90" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
      </g>

      {/* ── Books stack (bottom left) ── */}
      <g transform="translate(100, 360)">
        <rect x="0" y="20" width="60" height="12" rx="2" fill="#2563EB" fillOpacity="0.7" />
        <rect x="-3" y="10" width="66" height="12" rx="2" fill="#7c3aed" fillOpacity="0.7" />
        <rect x="2" y="0" width="56" height="12" rx="2" fill="#22C55E" fillOpacity="0.7" />
      </g>

      {/* ── Graduation cap (top right) ── */}
      <g transform="translate(660, 80)">
        {/* Cap base */}
        <polygon points="30,5 60,20 30,35 0,20" fill="white" fillOpacity="0.9" />
        {/* Cap top */}
        <polygon points="30,0 60,15 30,30 0,15" fill="white" fillOpacity="0.7" />
        {/* Tassel */}
        <line x1="30" y1="15" x2="30" y2="5" stroke="#F59E0B" strokeWidth="2" />
        <line x1="30" y1="5" x2="45" y2="10" stroke="#F59E0B" strokeWidth="2" />
        <circle cx="46" cy="11" r="3" fill="#F59E0B" />
      </g>

      {/* ── Student figure (left) ── */}
      <g transform="translate(140, 270)">
        {/* Body */}
        <rect x="5" y="40" width="30" height="50" rx="6" fill="#2563EB" />
        {/* Head */}
        <circle cx="20" cy="28" r="14" fill="#fcd9b6" />
        {/* Hair */}
        <ellipse cx="20" cy="20" rx="14" ry="10" fill="#1e293b" />
        {/* Arms */}
        <rect x="-5" y="48" width="12" height="4" rx="2" fill="#2563EB" transform="rotate(-20 -5 48)" />
        <rect x="33" y="45" width="16" height="4" rx="2" fill="#2563EB" transform="rotate(30 33 45)" />
        {/* Legs */}
        <rect x="10" y="88" width="8" height="26" rx="3" fill="#334155" />
        <rect x="23" y="88" width="8" height="26" rx="3" fill="#334155" />
      </g>

      {/* ── Student figure (right) ── */}
      <g transform="translate(620, 260)">
        {/* Body */}
        <rect x="5" y="40" width="30" height="50" rx="6" fill="#7c3aed" />
        {/* Head */}
        <circle cx="20" cy="28" r="14" fill="#d4a574" />
        {/* Hair */}
        <path d="M6 24 Q20 6 34 24 Q30 14 20 12 Q10 14 6 24Z" fill="#1e293b" />
        {/* Arms */}
        <rect x="-8" y="50" width="16" height="4" rx="2" fill="#7c3aed" transform="rotate(15 -8 50)" />
        <rect x="33" y="48" width="12" height="4" rx="2" fill="#7c3aed" transform="rotate(-25 33 48)" />
        {/* Legs */}
        <rect x="10" y="88" width="8" height="26" rx="3" fill="#334155" />
        <rect x="23" y="88" width="8" height="26" rx="3" fill="#334155" />
      </g>

      {/* ── Network dots connecting elements ── */}
      <circle cx="200" cy="180" r="3" fill="white" fillOpacity="0.4" />
      <circle cx="580" cy="170" r="3" fill="white" fillOpacity="0.4" />
      <circle cx="300" cy="150" r="2" fill="white" fillOpacity="0.3" />
      <circle cx="500" cy="140" r="2" fill="white" fillOpacity="0.3" />
      <circle cx="350" cy="450" r="2" fill="white" fillOpacity="0.2" />
      <circle cx="450" cy="460" r="2" fill="white" fillOpacity="0.2" />

      {/* ── Subtle connection lines (network feel) ── */}
      <line x1="200" y1="180" x2="300" y2="150" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="500" y1="140" x2="580" y2="170" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="300" y1="150" x2="400" y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="500" y1="140" x2="400" y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
    </svg>
  );
}

export default HeroIllustration;
