import "./HeroMissionControl.scss";

const TELEMETRY = [
  ["O2", "98.4%"],
  ["N2", "78.1%"],
  ["PRESS", "101.3 kPa"],
  ["TEMP", "+21.4°C"],
  ["VEL", "11.07 km/s"],
  ["ALT", "384 400 km"],
  ["PWR", "94.2%"],
  ["FUEL", "62.8%"],
  ["LINK", "S-BAND OK"],
];

const LOG_LINES = [
  ["04:12:07", "MCC", "acquire signal · lunar module"],
  ["04:12:09", "GC",  "nominal trajectory · Δv = 2.41"],
  ["04:12:11", "CAP", "roger, copy that"],
  ["04:12:14", "GC",  "ignite main engine · T−3"],
  ["04:12:17", "CMP", "exec 00203 proceed"],
  ["04:12:20", "MCC", "tranquility · all systems go"],
];

const CODE_LINES = [
  [["c", "// trajectory integrator · hz=50"]],
  [["k", "function"], [" ", " "], ["f", "step"], ["p", "("], ["v", "s"], ["p", ", "], ["v", "dt"], ["p", ") {"]],
  [["  ", "  "], ["k", "const"], [" ", " "], ["v", "Δv"], [" ", " "], ["p", "= "], ["f", "thrust"], ["p", "(s) "], ["p", "/ "], ["f", "mass"], ["p", "(s)"]],
  [["  ", "  "], ["v", "s"], ["p", ".v += "], ["v", "Δv"], ["p", " * "], ["v", "dt"]],
  [["  ", "  "], ["v", "s"], ["p", ".x += "], ["v", "s"], ["p", ".v * "], ["v", "dt"]],
  [["  ", "  "], ["k", "return"], [" ", " "], ["f", "clamp"], ["p", "("], ["v", "s"], ["p", ", "], ["v", "limits"], ["p", ")"]],
  [["p", "}"]],
];

function bar(value) {
  const filled = Math.round(value * 18);
  return "█".repeat(filled) + "░".repeat(18 - filled);
}

function Bracket() {
  return (
    <>
      <span className="hmc-bracket hmc-bracket-tl" />
      <span className="hmc-bracket hmc-bracket-tr" />
      <span className="hmc-bracket hmc-bracket-bl" />
      <span className="hmc-bracket hmc-bracket-br" />
    </>
  );
}

function RadarScope() {
  return (
    <svg className="hmc-radar" viewBox="0 0 220 220">
      <defs>
        <radialGradient id="hmc-radar-sweep" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="100" className="hmc-svg-stroke hmc-svg-stroke-thin" />
      <circle cx="110" cy="110" r="72" className="hmc-svg-stroke hmc-svg-stroke-thin" />
      <circle cx="110" cy="110" r="44" className="hmc-svg-stroke hmc-svg-stroke-thin" />
      <circle cx="110" cy="110" r="16" className="hmc-svg-stroke hmc-svg-stroke-thin" />
      <line x1="10" y1="110" x2="210" y2="110" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
      <line x1="110" y1="10" x2="110" y2="210" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
      <line x1="39" y1="39" x2="181" y2="181" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
      <line x1="181" y1="39" x2="39" y2="181" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
      <g className="hmc-radar-sweep" style={{ transformOrigin: "110px 110px" }}>
        <path d="M 110 110 L 210 110 A 100 100 0 0 1 181 181 Z" fill="url(#hmc-radar-sweep)" />
        <line x1="110" y1="110" x2="210" y2="110" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      </g>
      <circle cx="158" cy="82" r="2.5" className="hmc-radar-blip" style={{ animationDelay: "0s" }} />
      <circle cx="72" cy="140" r="2" className="hmc-radar-blip" style={{ animationDelay: "1.3s" }} />
      <circle cx="140" cy="160" r="2.2" className="hmc-radar-blip" style={{ animationDelay: "2.5s" }} />
      <text x="110" y="22" textAnchor="middle" className="hmc-svg-text">N</text>
      <text x="110" y="206" textAnchor="middle" className="hmc-svg-text">S</text>
      <text x="18" y="114" textAnchor="middle" className="hmc-svg-text">W</text>
      <text x="202" y="114" textAnchor="middle" className="hmc-svg-text">E</text>
    </svg>
  );
}

function MoonWireframe() {
  const lats = [-60, -30, 0, 30, 60];
  const lngs = [0, 30, 60, 90, 120, 150];
  return (
    <svg className="hmc-moon" viewBox="-120 -120 240 240">
      <defs>
        <clipPath id="hmc-moon-clip">
          <circle cx="0" cy="0" r="100" />
        </clipPath>
      </defs>
      <g className="hmc-moon-spin" clipPath="url(#hmc-moon-clip)">
        <circle cx="0" cy="0" r="100" className="hmc-svg-stroke" />
        {lats.map((lat) => {
          const y = (lat / 90) * 100;
          const ry = Math.cos((lat * Math.PI) / 180) * 100;
          return <ellipse key={lat} cx="0" cy={y} rx="100" ry={ry * 0.25} className="hmc-svg-stroke hmc-svg-stroke-thin" />;
        })}
        {lngs.map((lng) => {
          const rx = Math.abs(Math.cos((lng * Math.PI) / 180)) * 100;
          return <ellipse key={lng} cx="0" cy="0" rx={rx} ry="100" className="hmc-svg-stroke hmc-svg-stroke-thin" />;
        })}
        <circle cx="-30" cy="-20" r="8" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
        <circle cx="22" cy="18" r="5" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
        <circle cx="-45" cy="35" r="6" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
        <circle cx="40" cy="-40" r="4" className="hmc-svg-stroke hmc-svg-stroke-thinner" />
      </g>
      <circle cx="0" cy="0" r="100" className="hmc-svg-stroke" />
      <ellipse cx="0" cy="0" rx="116" ry="38" className="hmc-svg-stroke hmc-svg-stroke-dashed" transform="rotate(-18)" />
      <circle cx="0" cy="0" r="3" className="hmc-moon-orbiter" />
    </svg>
  );
}

function HeroMissionControl() {
  return (
    <div className="hero-mission-control" aria-hidden="true">
      <div className="hmc-grid" />

      {/* Banner */}
      <div className="hmc-banner">
        <span className="hmc-banner-left">
          <span className="hmc-pip" />
          SYS · AFR-STUDIO · MCC-01
        </span>
        <span className="hmc-banner-mid">▌T+ 047:21:09:14</span>
        <span className="hmc-banner-right">2287.5 MHz ▌ LOCK</span>
      </div>

      {/* Voice loop — moved to top */}
      <div className="hmc-panel hmc-panel-log hmc-rounded">
        <Bracket />
        <div className="hmc-panel-hdr">
          <span>VOICE LOOP · FD-1</span>
          <span className="hmc-hdr-right">
            <span className="hmc-blink">●</span> REC
          </span>
        </div>
        <div className="hmc-log-body">
          {LOG_LINES.map((l, i) => (
            <div key={i} className="hmc-log-line">
              <span className="hmc-log-time">{l[0]}</span>
              <span className="hmc-log-who">{l[1]}</span>
              <span className="hmc-log-msg">{l[2]}</span>
            </div>
          ))}
          <div className="hmc-log-line hmc-log-active">
            <span className="hmc-log-prompt">&gt;</span>
            <span className="hmc-log-msg">READY_<span className="hmc-caret" /></span>
          </div>
        </div>
      </div>

      {/* Connectors linking the corner panels — schematic feel */}
      <svg className="hmc-connectors" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <g className="hmc-conn">
          {/* voice loop → telemetry */}
          <path d="M 260 184 L 260 210 L 160 210 L 160 224" />
          <circle cx="260" cy="184" r="3" />
          <circle cx="160" cy="224" r="3" />

          {/* voice loop → radar */}
          <path d="M 940 184 L 940 210 L 1050 210 L 1050 224" />
          <circle cx="940" cy="184" r="3" />
          <circle cx="1050" cy="224" r="3" />

          {/* telemetry → bars (left wall vertical) */}
          <path d="M 140 374 L 140 572" />
          <circle cx="140" cy="374" r="3" />
          <circle cx="140" cy="572" r="3" />

          {/* radar → moon (right wall vertical) */}
          <path d="M 1060 374 L 1060 572" />
          <circle cx="1060" cy="374" r="3" />
          <circle cx="1060" cy="572" r="3" />

          {/* bars → code (bottom-left horizontal) */}
          <path d="M 276 700 L 380 700 L 380 730 L 440 730" />
          <circle cx="276" cy="700" r="3" />
          <circle cx="440" cy="730" r="3" />

          {/* code → moon (bottom-right horizontal) */}
          <path d="M 760 730 L 820 730 L 820 700 L 954 700" />
          <circle cx="760" cy="730" r="3" />
          <circle cx="954" cy="700" r="3" />
        </g>
      </svg>

      {/* Telemetry */}
      <div className="hmc-panel hmc-panel-tel hmc-rounded">
        <Bracket />
        <div className="hmc-panel-hdr">
          <span>TELEMETRY · L1</span>
          <span className="hmc-hdr-right">BUS 0x1F · OK</span>
        </div>
        <div className="hmc-tel">
          {TELEMETRY.map(([k, v]) => (
            <div className="hmc-tel-row" key={k}>
              <span className="hmc-tel-key">{k}</span>
              <span className="hmc-tel-sep">—</span>
              <span className="hmc-tel-val">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Radar */}
      <div className="hmc-panel hmc-panel-radar hmc-rounded-full">
        <Bracket />
        <div className="hmc-panel-hdr">
          <span>SCOPE · AZ-EL</span>
          <span className="hmc-hdr-right">360°</span>
        </div>
        <RadarScope />
        <div className="hmc-panel-ftr">
          <span>RNG 480 km</span>
          <span className="hmc-blink">● LOCK</span>
        </div>
      </div>

      {/* Code panel (programming focus) */}
      <div className="hmc-panel hmc-panel-code hmc-rounded">
        <Bracket />
        <div className="hmc-panel-hdr">
          <span>guidance.ts · ln 42</span>
          <span className="hmc-hdr-right">⌘ BUILD OK</span>
        </div>
        <pre className="hmc-code">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="hmc-code-line">
              <span className="hmc-code-gutter">{String(i + 42).padStart(2, " ")}</span>
              <span className="hmc-code-body">
                {line.map(([type, value], ti) => (
                  <span key={ti} className={`hmc-code-t-${type}`}>{value}</span>
                ))}
              </span>
            </div>
          ))}
        </pre>
        <div className="hmc-panel-ftr">
          <span>ASM · 312 B</span>
          <span>Δ 1.4ms</span>
        </div>
      </div>

      {/* Subsys bars */}
      <div className="hmc-panel hmc-panel-bars hmc-rounded">
        <Bracket />
        <div className="hmc-panel-hdr">
          <span>SUBSYS LOAD</span>
          <span className="hmc-hdr-right">dmesg</span>
        </div>
        <div className="hmc-bars">
          {[["GNC", 0.72], ["ECLSS", 0.91], ["COMMS", 0.58], ["EPS", 0.84]].map(([k, v]) => (
            <div className="hmc-bar-row" key={k}>
              <span className="hmc-bar-k">{k}</span>
              <span className="hmc-bar-v">{bar(v)}</span>
              <span className="hmc-bar-p">{Math.round(v * 100)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Moon wireframe */}
      <div className="hmc-panel hmc-panel-moon hmc-rounded">
        <Bracket />
        <div className="hmc-panel-hdr">
          <span>SURFACE · MARE COG.</span>
          <span className="hmc-hdr-right">fix 0x3A</span>
        </div>
        <MoonWireframe />
        <div className="hmc-panel-ftr">
          <span>LAT +00.67°</span>
          <span>LON −23.47°</span>
        </div>
      </div>

      <div className="hmc-scan" />
      <div className="hmc-vignette" />
    </div>
  );
}

export default HeroMissionControl;
