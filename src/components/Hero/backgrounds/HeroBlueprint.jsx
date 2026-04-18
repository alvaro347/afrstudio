import "./HeroBlueprint.scss";

function Gear({ cx, cy, r, teeth, innerR, pulseDelay = 0 }) {
  const teethPath = [];
  const toothOuter = r + 8;
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.3) / teeth) * Math.PI * 2;
    const a2 = ((i + 0.7) / teeth) * Math.PI * 2;
    const a3 = ((i + 1) / teeth) * Math.PI * 2;
    const p = (a, rad) => `${cx + Math.cos(a) * rad} ${cy + Math.sin(a) * rad}`;
    teethPath.push(
      (i === 0 ? "M " : "L ") + p(a0, r),
      "L " + p(a1, toothOuter),
      "L " + p(a2, toothOuter),
      "L " + p(a3, r)
    );
  }
  teethPath.push("Z");

  return (
    <g className="hbp-gear" style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${pulseDelay}s` }}>
      <path className="hbp-stroke hbp-draw" d={teethPath.join(" ")} />
      <circle className="hbp-stroke hbp-draw" cx={cx} cy={cy} r={r - 6} />
      <circle className="hbp-stroke hbp-draw" cx={cx} cy={cy} r={innerR} />
      <circle className="hbp-stroke hbp-draw" cx={cx} cy={cy} r={innerR / 3} />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const a = (deg * Math.PI) / 180;
        const x1 = cx + Math.cos(a) * (innerR + 4);
        const y1 = cy + Math.sin(a) * (innerR + 4);
        const x2 = cx + Math.cos(a) * (r - 10);
        const y2 = cy + Math.sin(a) * (r - 10);
        return <line key={deg} className="hbp-stroke hbp-stroke-thin" x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}

// Code-panel callout mimicking the mission-control "guidance.ts" card.
function CodePanel({ x, y, width, filename, status, asm, dt, lines, startLine }) {
  const padX = 12;
  const headerH = 20;
  const lineH = 16;
  const footerH = 18;
  const bodyTop = y + headerH + 8;
  const height = headerH + 8 + lines.length * lineH + 4 + footerH;
  const footerTop = y + height - footerH;

  return (
    <g className="hbp-panel">
      <rect className="hbp-panel-bg" x={x} y={y} width={width} height={height} rx={6} />
      <line className="hbp-panel-sep" x1={x + 1} y1={y + headerH} x2={x + width - 1} y2={y + headerH} />
      <text className="hbp-panel-hdr" x={x + padX} y={y + 13}>{filename}</text>
      <text className="hbp-panel-hdr hbp-panel-hdr-right" x={x + width - padX} y={y + 13} textAnchor="end">{status}</text>

      {lines.map((tokens, i) => (
        <g key={i}>
          <text className="hbp-panel-gutter" x={x + padX + 14} y={bodyTop + i * lineH} textAnchor="end">
            {String(startLine + i).padStart(2, " ")}
          </text>
          <text className="hbp-panel-code" x={x + padX + 22} y={bodyTop + i * lineH}>
            {tokens.map(([type, text], ti) => (
              <tspan key={ti} className={`hbp-tok-${type}`}>{text}</tspan>
            ))}
          </text>
        </g>
      ))}

      <line className="hbp-panel-sep" x1={x + 1} y1={footerTop} x2={x + width - 1} y2={footerTop} />
      <text className="hbp-panel-ftr" x={x + padX} y={footerTop + 12}>{asm}</text>
      <text className="hbp-panel-ftr hbp-panel-ftr-right" x={x + width - padX} y={footerTop + 12} textAnchor="end">{dt}</text>
    </g>
  );
}

// Gear positions — all share pitch 2π·r/teeth ≈ 39.27 so teeth mesh cleanly,
// and centers are exactly r1+r2 apart so tooth tips just touch, not overlap.
const MAIN   = { cx: 620, cy: 310, r: 150, teeth: 24, innerR: 60 };  // 2π·150/24
const SECOND = { cx: 802, cy: 178, r: 75,  teeth: 12, innerR: 26 };  // 2π·75/12  · distance 225 from main
const THIRD  = { cx: 394, cy: 416, r: 100, teeth: 16, innerR: 36 };  // 2π·100/16 · distance 250 from main

// Edge point of a gear nearest a target (so leader lines start at the gear rim, not its center).
function edgeTowards(g, tx, ty) {
  const dx = tx - g.cx;
  const dy = ty - g.cy;
  const len = Math.sqrt(dx * dx + dy * dy);
  return [g.cx + (g.r * dx) / len, g.cy + (g.r * dy) / len];
}

function HeroBlueprint() {
  // Callout positions
  const panel1 = { x: 70,  y: 130, w: 300 }; // main gear
  const panel2 = { x: 900, y: 300, w: 270 }; // second gear
  const panel3 = { x: 70,  y: 630, w: 290 }; // third gear

  const [e1x, e1y] = edgeTowards(MAIN,   panel1.x + panel1.w, panel1.y + 60);
  const [e2x, e2y] = edgeTowards(SECOND, panel2.x,            panel2.y + 20);
  const [e3x, e3y] = edgeTowards(THIRD,  panel3.x + panel3.w, panel3.y);

  return (
    <div className="hero-blueprint" aria-hidden="true">
      <div className="hbp-paper" />
      <div className="hbp-paper hbp-paper-major" />
      <div className="hbp-spotlights" />

      <svg className="hbp-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <marker id="hbp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Frame */}
        <rect className="hbp-stroke hbp-frame" x="40" y="40" width="1120" height="720" />
        <rect className="hbp-stroke hbp-frame" x="55" y="55" width="1090" height="690" />

        {/* Title block (bottom right) */}
        <g>
          <rect className="hbp-stroke" x="900" y="680" width="240" height="60" />
          <line className="hbp-stroke" x1="900" y1="700" x2="1140" y2="700" />
          <line className="hbp-stroke" x1="1020" y1="680" x2="1020" y2="740" />
          <text className="hbp-mono" x="910" y="694">DWG-042 · REV C</text>
          <text className="hbp-mono hbp-mono-sm" x="910" y="716">PROJECT</text>
          <text className="hbp-mono hbp-mono-sm" x="910" y="732">AFR-STUDIO</text>
          <text className="hbp-mono hbp-mono-sm" x="1030" y="716">SCALE 1:2</text>
          <text className="hbp-mono hbp-mono-sm" x="1030" y="732">SHEET 01/03</text>
        </g>

        {/* Gear train */}
        <Gear {...MAIN} />
        <Gear {...SECOND} pulseDelay={0.4} />
        <Gear {...THIRD} pulseDelay={0.8} />

        {/* Connecting axes (center-to-center) */}
        <line className="hbp-stroke hbp-stroke-dashed" x1={MAIN.cx} y1={MAIN.cy} x2={SECOND.cx} y2={SECOND.cy} />
        <line className="hbp-stroke hbp-stroke-dashed" x1={MAIN.cx} y1={MAIN.cy} x2={THIRD.cx} y2={THIRD.cy} />

        {/* Centerlines */}
        <line className="hbp-stroke hbp-stroke-thin hbp-stroke-dash-dot" x1={MAIN.cx - 200} y1={MAIN.cy} x2={MAIN.cx + 240} y2={MAIN.cy} />
        <line className="hbp-stroke hbp-stroke-thin hbp-stroke-dash-dot" x1={MAIN.cx} y1={MAIN.cy - 200} x2={MAIN.cx} y2={MAIN.cy + 240} />

        {/* Dimension: pitch diameter of main gear */}
        <g>
          <line className="hbp-stroke hbp-stroke-thin" x1={MAIN.cx - MAIN.r} y1={MAIN.cy} x2={MAIN.cx - MAIN.r} y2={MAIN.cy - 120} />
          <line className="hbp-stroke hbp-stroke-thin" x1={MAIN.cx + MAIN.r} y1={MAIN.cy} x2={MAIN.cx + MAIN.r} y2={MAIN.cy - 120} />
          <line
            className="hbp-stroke hbp-stroke-thin"
            x1={MAIN.cx - MAIN.r}
            y1={MAIN.cy - 100}
            x2={MAIN.cx + MAIN.r}
            y2={MAIN.cy - 100}
            markerStart="url(#hbp-arrow)"
            markerEnd="url(#hbp-arrow)"
          />
          <rect className="hbp-dim-bg" x={MAIN.cx - 32} y={MAIN.cy - 109} width="64" height="18" />
          <text className="hbp-mono" x={MAIN.cx} y={MAIN.cy - 96} textAnchor="middle">⌀ 300.0</text>
        </g>

        {/* Dimension: angle callout on second gear */}
        <g>
          <path className="hbp-stroke hbp-stroke-thin" d={`M ${SECOND.cx} ${SECOND.cy} L ${SECOND.cx + 80} ${SECOND.cy} M ${SECOND.cx} ${SECOND.cy} L ${SECOND.cx + 70} ${SECOND.cy - 40}`} fill="none" />
          <rect className="hbp-dim-bg" x={SECOND.cx + 82} y={SECOND.cy - 30} width="58" height="18" />
          <text className="hbp-mono" x={SECOND.cx + 111} y={SECOND.cy - 17} textAnchor="middle">θ=0.42</text>
        </g>

        {/* Leader lines from each gear edge to its code panel */}
        <g className="hbp-leads">
          <circle className="hbp-anno-dot" cx={e1x} cy={e1y} r="3" />
          <line className="hbp-stroke hbp-stroke-thin hbp-anno-lead" x1={e1x} y1={e1y} x2={panel1.x + panel1.w} y2={panel1.y + 60} />

          <circle className="hbp-anno-dot" cx={e2x} cy={e2y} r="3" />
          <line className="hbp-stroke hbp-stroke-thin hbp-anno-lead" x1={e2x} y1={e2y} x2={panel2.x} y2={panel2.y + 20} />

          <circle className="hbp-anno-dot" cx={e3x} cy={e3y} r="3" />
          <line className="hbp-stroke hbp-stroke-thin hbp-anno-lead" x1={e3x} y1={e3y} x2={panel3.x + panel3.w} y2={panel3.y} />
        </g>

        {/* Code panel callouts (same aesthetic as mission-control guidance.ts) */}
        <CodePanel
          x={panel1.x}
          y={panel1.y}
          width={panel1.w}
          filename="gears.ts · ln 42"
          status="⌘ BUILD OK"
          asm="ASM · 312 B"
          dt="Δ 1.4ms"
          startLine={42}
          lines={[
            [["c", "// core driver · 24T"]],
            [["k", "function"], [" ", " "], ["f", "calibrate"], ["p", "("], ["v", "gear"], ["p", ") {"]],
            [["  ", "  "], ["k", "return"], [" ", " "], ["v", "gear"], ["p", "."], ["v", "torque"], ["p", " * "], ["v", "Ω"]],
            [["p", "}"]],
          ]}
        />

        <CodePanel
          x={panel2.x}
          y={panel2.y}
          width={panel2.w}
          filename="gears.ts · ln 58"
          status="⌘ BUILD OK"
          asm="ASM · 84 B"
          dt="Δ 0.4ms"
          startLine={58}
          lines={[
            [["c", "// pinion · 12T"]],
            [["k", "const"], [" ", " "], ["v", "ratio"], ["p", " = "], ["n", "24"], ["p", " / "], ["n", "12"]],
            [["k", "return"], [" ", " "], ["v", "ratio"], ["p", "  "], ["c", "// 2.00"]],
          ]}
        />

        <CodePanel
          x={panel3.x}
          y={panel3.y}
          width={panel3.w}
          filename="gears.ts · ln 72"
          status="⌘ BUILD OK"
          asm="ASM · 96 B"
          dt="Δ 0.6ms"
          startLine={72}
          lines={[
            [["c", "// secondary · 16T"]],
            [["k", "const"], [" ", " "], ["v", "r"], ["p", " = "], ["n", "24"], ["p", " / "], ["n", "16"]],
            [["f", "assert"], ["p", "("], ["v", "r"], ["p", " > "], ["n", "1.0"], ["p", ")"]],
          ]}
        />

        {/* Coordinate tick marks (top) */}
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={`tx-${i}`}>
            <line className="hbp-stroke hbp-stroke-thin" x1={160 + i * 120} y1="55" x2={160 + i * 120} y2="62" />
            <text className="hbp-mono hbp-mono-sm" x={160 + i * 120} y="52" textAnchor="middle">
              {String(i * 50).padStart(3, "0")}
            </text>
          </g>
        ))}
      </svg>

      <div className="hbp-vignette" />
    </div>
  );
}

export default HeroBlueprint;
