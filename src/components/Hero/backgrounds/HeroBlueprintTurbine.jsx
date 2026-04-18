import "./HeroBlueprintTurbine.scss";

// Short hatch marks marking a cutaway material edge.
function Hatching({ x, y, width, count = 22, direction = "down" }) {
  const step = width / count;
  const dy = direction === "down" ? 7 : -7;
  return (
    <g className="hbt-hatch">
      {Array.from({ length: count }).map((_, i) => (
        <line
          key={i}
          className="hbt-stroke hbt-stroke-thin"
          x1={x + i * step}
          y1={y}
          x2={x + i * step + 5}
          y2={y + dy}
        />
      ))}
    </g>
  );
}

function FanBlades({ cx, cy, r, count = 22, spinDuration = 3, reverse = false }) {
  const blades = Array.from({ length: count }, (_, i) => {
    const angle = (i * 360) / count;
    return (
      <path
        key={i}
        className="hbt-stroke hbt-stroke-thin"
        transform={`rotate(${angle} ${cx} ${cy})`}
        d={`M ${cx} ${cy - r * 0.22} Q ${cx + r * 0.24} ${cy - r * 0.58} ${cx + r * 0.08} ${cy - r * 0.97}`}
      />
    );
  });
  return (
    <g
      className="hbt-fan"
      style={{
        transformOrigin: `${cx}px ${cy}px`,
        animationDuration: `${spinDuration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      <circle className="hbt-stroke" cx={cx} cy={cy} r={r} />
      <circle className="hbt-stroke hbt-stroke-thin" cx={cx} cy={cy} r={r * 0.32} />
      {blades}
      <circle cx={cx} cy={cy} r={r * 0.1} fill="currentColor" />
    </g>
  );
}

// A compressor/turbine disk shown in side view — stack of short radial slats.
function StageDisk({ cx, top, bottom, blades = 14 }) {
  const lines = [];
  const step = (bottom - top) / blades;
  for (let i = 0; i < blades; i++) {
    const y = top + i * step + step / 2;
    lines.push(
      <line
        key={i}
        className="hbt-stroke hbt-stroke-thin"
        x1={cx - 3}
        y1={y}
        x2={cx + 3}
        y2={y}
      />
    );
  }
  return (
    <g>
      <line className="hbt-stroke" x1={cx} y1={top} x2={cx} y2={bottom} />
      {lines}
    </g>
  );
}

function HeroBlueprintTurbine() {
  return (
    <div className="hero-blueprint-turbine" aria-hidden="true">
      <div className="hbt-paper" />
      <div className="hbt-paper hbt-paper-major" />

      <svg className="hbt-svg" viewBox="0 0 1400 560" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="hbt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
          <linearGradient id="hbt-heat" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hbt-airflow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.22" />
          </linearGradient>
          {/* Clip defining the cutaway interior (what we can see inside the engine) */}
          <clipPath id="hbt-cutaway">
            <path
              d="M 240 200
                 L 300 192
                 L 940 192
                 L 980 210
                 L 1040 240
                 L 1100 270
                 L 1040 300
                 L 980 330
                 L 940 348
                 L 300 348
                 L 240 340 Z"
            />
          </clipPath>
        </defs>

        {/* --------- OUTER CASING (turbofan silhouette, not a rocket) --------- */}
        <g className="hbt-engine">
          {/* Bypass duct outer cowling — large, barrel-shaped */}
          <path
            className="hbt-stroke hbt-hull"
            d="M 180 180
               Q 200 140 260 134
               L 940 134
               Q 1000 138 1040 165
               L 1100 210
               L 1110 240
               L 1100 270
               L 1040 330
               Q 1000 360 940 366
               L 260 366
               Q 200 360 180 320
               L 170 270
               L 170 230
               Z"
          />

          {/* Inner core cowling (visible within the cutaway; but the casing reference line itself) */}
          <path
            className="hbt-stroke hbt-stroke-thin"
            d="M 260 200
               L 300 192
               L 940 192
               L 980 210
               L 1040 240
               L 1100 270
               L 1040 300
               L 980 330
               L 940 348
               L 300 348
               L 260 340
               L 260 200 Z"
          />

          {/* Central shaft axis */}
          <line
            className="hbt-stroke hbt-stroke-thin hbt-stroke-dash-dot"
            x1="150"
            y1="270"
            x2="1130"
            y2="270"
          />

          {/* Mount pylon on top */}
          <path className="hbt-stroke hbt-stroke-thin" d="M 560 134 L 540 60 L 720 60 L 700 134" />
          <line className="hbt-stroke hbt-stroke-thin hbt-stroke-dashed" x1="560" y1="100" x2="700" y2="100" />
          <text className="hbt-mono hbt-mono-sm hbt-mono-lbl" x="590" y="54">PYLON MOUNT</text>

          {/* Accessory gearbox below */}
          <rect className="hbt-stroke hbt-stroke-thin" x="680" y="366" width="120" height="30" />
          <circle className="hbt-stroke hbt-stroke-thin" cx="710" cy="381" r="6" />
          <circle className="hbt-stroke hbt-stroke-thin" cx="740" cy="381" r="4" />
          <circle className="hbt-stroke hbt-stroke-thin" cx="768" cy="381" r="5" />
          <text className="hbt-mono hbt-mono-sm hbt-mono-lbl" x="685" y="410">ACCESSORY GEARBOX</text>

          {/* Bypass airflow arrows (entering upper/lower bypass duct) */}
          <g className="hbt-airflow">
            <path className="hbt-stroke hbt-stroke-thin hbt-arrow" d="M 110 170 L 230 178" markerEnd="url(#hbt-arrow)" />
            <path className="hbt-stroke hbt-stroke-thin hbt-arrow" d="M 110 370 L 230 362" markerEnd="url(#hbt-arrow)" />
            <text className="hbt-mono hbt-mono-sm hbt-mono-lbl" x="60" y="164">BYPASS</text>
            <text className="hbt-mono hbt-mono-sm hbt-mono-lbl" x="60" y="382">BYPASS</text>
          </g>

          {/* Exhaust plume (gentle cone, not a rocket flare) */}
          <path
            className="hbt-plume"
            d="M 1100 232 L 1240 250 L 1240 290 L 1100 308 Z"
            fill="url(#hbt-heat)"
            stroke="none"
          />
          <path
            className="hbt-plume hbt-plume-inner"
            d="M 1095 244 L 1200 258 L 1200 282 L 1095 296 Z"
            fill="url(#hbt-heat)"
            stroke="none"
          />
        </g>

        {/* --------- CUTAWAY FRAME (dashed window) + material-edge hatching --------- */}
        <g className="hbt-cut-frame">
          <path
            className="hbt-stroke hbt-stroke-dashed hbt-cut-fill"
            d="M 240 200
               L 300 192
               L 940 192
               L 980 210
               L 1040 240
               L 1100 270
               L 1040 300
               L 980 330
               L 940 348
               L 300 348
               L 240 340 Z"
          />
          <Hatching x={300} y={192} width={640} count={48} direction="up" />
          <Hatching x={300} y={348} width={640} count={48} direction="down" />
          <text className="hbt-mono hbt-mono-sm hbt-mono-lbl" x="260" y="184">CUTAWAY · SECTION A-A</text>
        </g>

        {/* --------- INTERNAL DETAILS (clipped to the cutaway window) --------- */}
        <g clipPath="url(#hbt-cutaway)">
          {/* Front fan — big, visible at engine intake */}
          <FanBlades cx={300} cy={270} r={62} count={22} spinDuration={2} />

          {/* Inlet guide vanes (short stationary slats before compressor) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`igv-${i}`}
              className="hbt-stroke hbt-stroke-thin"
              x1={378}
              y1={210 + i * 15}
              x2={390}
              y2={218 + i * 15}
            />
          ))}

          {/* Low-pressure compressor stages */}
          <StageDisk cx={420} top={214} bottom={326} blades={14} />
          <StageDisk cx={445} top={216} bottom={324} blades={14} />
          <StageDisk cx={470} top={218} bottom={322} blades={14} />

          {/* High-pressure compressor stages (taller) */}
          <StageDisk cx={510} top={222} bottom={318} blades={14} />
          <StageDisk cx={532} top={224} bottom={316} blades={14} />
          <StageDisk cx={554} top={226} bottom={314} blades={14} />
          <StageDisk cx={576} top={228} bottom={312} blades={14} />
          <StageDisk cx={598} top={230} bottom={310} blades={14} />

          {/* Inner shaft */}
          <rect className="hbt-stroke hbt-stroke-thin" x="300" y="266" width="640" height="8" />
          {/* Tick marks on shaft (suggests rotation) */}
          {[330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 700, 800].map((x, i) => (
            <line key={i} className="hbt-stroke hbt-stroke-thin" x1={x} y1="264" x2={x} y2="276" />
          ))}

          {/* Combustion chamber (annular) */}
          <g>
            <rect className="hbt-stroke" x="640" y="234" width="120" height="72" rx="6" />
            <path
              className="hbt-flame"
              d="M 652 270 Q 672 252 692 270 Q 712 288 732 270 Q 742 260 750 270"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <path
              className="hbt-flame"
              d="M 652 278 Q 672 264 692 278 Q 712 292 732 278"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.55"
              style={{ animationDelay: "0.4s" }}
            />
            {/* Fuel injectors above */}
            {[660, 700, 740].map((x, i) => (
              <line key={i} className="hbt-stroke hbt-stroke-thin" x1={x} y1="214" x2={x} y2="234" />
            ))}
          </g>

          {/* High-pressure turbine stages */}
          <StageDisk cx={790} top={232} bottom={308} blades={12} />
          <StageDisk cx={815} top={234} bottom={306} blades={12} />

          {/* Low-pressure turbine stages (taller, after HP) */}
          <StageDisk cx={855} top={228} bottom={312} blades={14} />
          <StageDisk cx={885} top={226} bottom={314} blades={14} />
          <StageDisk cx={915} top={224} bottom={316} blades={14} />

          {/* Exhaust nozzle tapering internally */}
          <path className="hbt-stroke hbt-stroke-thin" d="M 940 218 L 1000 232 L 1080 252 L 1100 266" />
          <path className="hbt-stroke hbt-stroke-thin" d="M 940 322 L 1000 308 L 1080 288 L 1100 274" />
        </g>

        {/* --------- Section labels below the cutaway (outside clip) --------- */}
        <g>
          {[
            ["FAN", 300],
            ["IGV", 384],
            ["LP COMP", 442],
            ["HP COMP", 550],
            ["COMBUSTOR", 700],
            ["HPT", 802],
            ["LPT", 885],
            ["NOZZLE", 1010],
          ].map(([label, x], i) => (
            <g key={i}>
              <line className="hbt-stroke hbt-stroke-thin" x1={x} y1="432" x2={x} y2="444" />
              <text className="hbt-mono hbt-mono-sm hbt-mono-lbl" x={x} y="458" textAnchor="middle">
                {`${i + 1} · ${label}`}
              </text>
            </g>
          ))}
        </g>

        {/* --------- Overall length dimension --------- */}
        <g>
          <line className="hbt-stroke hbt-stroke-thin" x1="170" y1="486" x2="170" y2="502" />
          <line className="hbt-stroke hbt-stroke-thin" x1="1110" y1="486" x2="1110" y2="502" />
          <line
            className="hbt-stroke hbt-stroke-thin"
            x1="170"
            y1="494"
            x2="1110"
            y2="494"
            markerStart="url(#hbt-arrow)"
            markerEnd="url(#hbt-arrow)"
          />
          <rect className="hbt-dim-bg" x="604" y="486" width="72" height="18" />
          <text className="hbt-mono" x="640" y="499" textAnchor="middle">L = 3.40m</text>
        </g>

        {/* --------- Title block --------- */}
        <g>
          <rect className="hbt-stroke" x="1080" y="490" width="260" height="60" />
          <line className="hbt-stroke" x1="1080" y1="512" x2="1340" y2="512" />
          <line className="hbt-stroke" x1="1210" y1="490" x2="1210" y2="550" />
          <text className="hbt-mono" x="1092" y="506">TURBOFAN AF-T9 · REV 3</text>
          <text className="hbt-mono hbt-mono-sm" x="1092" y="528">SECTION A-A · CUTAWAY</text>
          <text className="hbt-mono hbt-mono-sm" x="1092" y="544">AFR-PROPULSION</text>
          <text className="hbt-mono hbt-mono-sm" x="1222" y="528">N1 12 000</text>
          <text className="hbt-mono hbt-mono-sm" x="1222" y="544">BYPASS 9:1</text>
        </g>

        {/* --------- Code callouts --------- */}
        <g className="hbt-anno">
          <line className="hbt-stroke hbt-stroke-thin hbt-anno-lead" x1="300" y1="270" x2="180" y2="92" />
          <circle className="hbt-anno-dot" cx="300" cy="270" r="3" />
          <rect className="hbt-anno-box" x="60" y="12" width="280" height="82" rx="4" />
          <text className="hbt-mono hbt-anno-text hbt-anno-c" x="74" y="32">// N1 fan controller</text>
          <text className="hbt-mono hbt-anno-text" x="74" y="50">fan.setRPM(12_000)</text>
          <text className="hbt-mono hbt-anno-text" x="74" y="66">await fan.spool(Δ=2.4s)</text>
          <text className="hbt-mono hbt-anno-text hbt-anno-c" x="74" y="84">// bypass ratio 9:1</text>
        </g>

        <g className="hbt-anno">
          <line className="hbt-stroke hbt-stroke-thin hbt-anno-lead" x1="700" y1="270" x2="700" y2="460" />
          <circle className="hbt-anno-dot" cx="700" cy="270" r="3" />
          <rect className="hbt-anno-box" x="540" y="466" width="320" height="82" rx="4" />
          <text className="hbt-mono hbt-anno-text hbt-anno-c" x="554" y="486">// combustor · FADEC loop</text>
          <text className="hbt-mono hbt-anno-text" x="554" y="504">{"ignite(mix, { oxidizer: air })"}</text>
          <text className="hbt-mono hbt-anno-text" x="554" y="520">const T_max = 1_700 // K</text>
          <text className="hbt-mono hbt-anno-text hbt-anno-c" x="554" y="538">// EGT margin ok</text>
        </g>

        <g className="hbt-anno">
          <line className="hbt-stroke hbt-stroke-thin hbt-anno-lead" x1="885" y1="270" x2="1100" y2="92" />
          <circle className="hbt-anno-dot" cx="885" cy="270" r="3" />
          <rect className="hbt-anno-box" x="1040" y="12" width="300" height="82" rx="4" />
          <text className="hbt-mono hbt-anno-text hbt-anno-c" x="1054" y="32">// turbine torque output</text>
          <text className="hbt-mono hbt-anno-text" x="1054" y="50">τ = r · (ṁ · Δv_tangential)</text>
          <text className="hbt-mono hbt-anno-text" x="1054" y="66">assert(shaft.healthy)</text>
          <text className="hbt-mono hbt-anno-text hbt-anno-c" x="1054" y="84">// Δω &lt; 0.3%</text>
        </g>
      </svg>

      <div className="hbt-vignette" />
    </div>
  );
}

export default HeroBlueprintTurbine;
