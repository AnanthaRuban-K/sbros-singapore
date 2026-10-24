/* =========================================================
   HEADER SCENE
   Decorative strip along the bottom of the header card:
   a Singapore skyline (CBD towers, Esplanade, Singapore Flyer,
   Marina Bay Sands, Supertree Grove) with a business professional
   walking across. Pure SVG + CSS (styles: .hdr-scene in main.css).
   aria-hidden and pointer-events: none, so it never blocks the menu.
========================================================= */

const BASE = 26; // skyline baseline in viewBox units (viewBox 0 0 1440 26)

// CBD towers: [x, width, height]
const TOWERS = [
  [20, 9, 9], [32, 12, 15], [47, 8, 11], [58, 11, 19], [72, 9, 13], [84, 13, 21],
  [100, 8, 12], [111, 10, 17], [124, 12, 10], [140, 9, 18], [152, 11, 14], [166, 8, 22],
  [177, 12, 12], [192, 10, 16], [205, 9, 11], [218, 12, 20], [233, 8, 13], [244, 11, 9],
  [470, 10, 14], [483, 8, 20], [494, 12, 16], [509, 9, 23], [521, 11, 12], [535, 8, 18],
  [546, 12, 21], [561, 9, 13], [573, 10, 17],
  [880, 10, 13], [893, 12, 19], [908, 8, 11], [919, 11, 22], [933, 9, 15], [945, 13, 18],
  [961, 8, 10], [972, 11, 20], [986, 9, 14], [998, 12, 24], [1013, 8, 12], [1024, 11, 17],
  [1038, 10, 11], [1051, 12, 21], [1066, 9, 15], [1078, 11, 19], [1092, 8, 9], [1103, 12, 16],
  [1118, 10, 22], [1131, 9, 12], [1143, 12, 18], [1158, 8, 14], [1169, 11, 20], [1183, 10, 10],
  [1196, 12, 17], [1211, 9, 13], [1223, 11, 21], [1237, 8, 11], [1248, 12, 15], [1263, 10, 19],
  [1276, 9, 12], [1288, 12, 16], [1303, 8, 10], [1314, 11, 18], [1328, 10, 13], [1341, 12, 20],
  [1356, 9, 11], [1368, 11, 15], [1382, 10, 9], [1395, 12, 14], [1410, 9, 11],
];

// Antennas on a few towers: [x, height]
const ANTENNAS = [[89, 25], [170, 25], [513, 26], [1003, 26], [1122, 25]];

// Supertrees: [centre x, height]
const SUPERTREES = [[752, 17], [768, 22], [785, 15], [800, 20], [816, 13]];

const supertree = ([cx, h]) => {
  const top = BASE - h;
  const neck = top + 5;
  return `M${cx - 1.2} ${BASE} L${cx - 0.6} ${neck} L${cx - 6} ${top} L${cx + 6} ${top} L${cx + 0.6} ${neck} L${cx + 1.2} ${BASE} Z`;
};

const Skyline = () => (
  <svg
    className="hdr-skyline"
    viewBox="0 0 1440 26"
    preserveAspectRatio="xMidYMax slice"
    focusable="false"
  >
    {/* CBD towers */}
    {TOWERS.map(([x, w, h]) => (
      <rect key={`t${x}`} x={x} y={BASE - h} width={w} height={h} rx="0.6" />
    ))}
    {ANTENNAS.map(([x, h]) => (
      <rect key={`a${x}`} x={x} y={BASE - h} width="0.8" height={h} />
    ))}

    {/* Esplanade domes */}
    <path d="M286 26 A17 11 0 0 1 320 26 Z" />
    <path d="M326 26 A15 9 0 0 1 356 26 Z" />

    {/* Singapore Flyer */}
    <g className="hdr-flyer">
      <circle cx="410" cy="12" r="10.5" fill="none" strokeWidth="1.4" />
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <line
          key={deg}
          x1={410 + 10.5 * Math.cos((deg * Math.PI) / 180)}
          y1={12 + 10.5 * Math.sin((deg * Math.PI) / 180)}
          x2={410 - 10.5 * Math.cos((deg * Math.PI) / 180)}
          y2={12 - 10.5 * Math.sin((deg * Math.PI) / 180)}
          strokeWidth="0.6"
        />
      ))}
    </g>
    <path d="M410 12 L403 25 L405 25 L410 15 L415 25 L417 25 Z" />
    <rect x="394" y="23.5" width="32" height="2.5" rx="0.6" />

    {/* Marina Bay Sands: three towers + SkyPark */}
    <path d="M622 26 L623.5 7 L632 7 L631 26 Z" />
    <path d="M641 26 L642.5 7 L651 7 L650 26 Z" />
    <path d="M660 26 L661.5 7 L670 7 L669 26 Z" />
    <path d="M614 4.6 L688 4.6 L699 3.4 L699 6.4 L614 6.4 Z" />

    {/* ArtScience Museum (lotus) */}
    <path d="M590 26 L586 19 L592 22 L594 16 L597 22 L601 17 L601.5 22 L606 19 L603 26 Z" />

    {/* Supertree Grove */}
    {SUPERTREES.map((tree) => (
      <path key={`s${tree[0]}`} d={supertree(tree)} />
    ))}

    {/* waterline */}
    <rect x="0" y="25.2" width="1440" height="0.8" className="hdr-water" />
  </svg>
);

// Business professional with a laptop bag, facing right
const Walker = () => (
  <svg className="hdr-walker-figure" viewBox="0 0 20 32" focusable="false">
    <g className="hdr-body">
      {/* back arm */}
      <g className="hdr-limb hdr-arm hdr-arm-back">
        <line x1="10" y1="10" x2="10" y2="18" />
      </g>
      {/* back leg */}
      <g className="hdr-limb hdr-leg hdr-leg-back">
        <line x1="10" y1="19" x2="10" y2="30" />
      </g>

      {/* head + torso */}
      <circle cx="10.5" cy="4" r="3.2" className="hdr-head" />
      <line x1="10" y1="8.5" x2="10" y2="19" className="hdr-torso" />

      {/* front leg */}
      <g className="hdr-limb hdr-leg hdr-leg-front">
        <line x1="10" y1="19" x2="10" y2="30" />
      </g>
      {/* front arm carrying the bag */}
      <g className="hdr-limb hdr-arm hdr-arm-front">
        <line x1="10" y1="10" x2="10" y2="18" />
        <rect x="7.2" y="17.2" width="6" height="4.6" rx="1" className="hdr-bag" />
      </g>
    </g>
  </svg>
);

const HeaderScene = () => (
  <div className="hdr-scene" aria-hidden="true">
    <Skyline />
    <div className="hdr-track">
      <div className="hdr-walker">
        <Walker />
      </div>
    </div>
  </div>
);

export default HeaderScene;
