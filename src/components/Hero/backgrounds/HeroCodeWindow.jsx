import { useEffect, useState } from "react";
import "./HeroCodeWindow.scss";

const CODE_LINES = [
  { n: 1, tokens: [["k", "import"], [" ", " "], ["p", "{ motion }"], [" ", " "], ["k", "from"], [" ", " "], ["s", "'framer-motion'"]] },
  { n: 2, tokens: [["k", "import"], [" ", " "], ["v", "Hero"], [" ", " "], ["k", "from"], [" ", " "], ["s", "'./Hero'"]] },
  { n: 3, tokens: [] },
  { n: 4, tokens: [["c", "// neon-drenched surface"]] },
  { n: 5, tokens: [["k", "export"], [" ", " "], ["k", "default"], [" ", " "], ["k", "function"], [" ", " "], ["f", "Studio"], ["p", "() {"]] },
  { n: 6, tokens: [["  ", "  "], ["k", "const"], [" ", " "], ["v", "glow"], [" ", " "], ["p", "="], [" ", " "], ["s", "'#7c6aef'"]] },
  { n: 7, tokens: [["  ", "  "], ["k", "return"], [" ", " "], ["p", "("]] },
  { n: 8, tokens: [["    ", "    "], ["p", "<"], ["t", "motion.main"]] },
  { n: 9, tokens: [["      ", "      "], ["a", "initial"], ["p", "={{ "], ["v", "opacity"], ["p", ": "], ["n", "0"], ["p", " }}"]] },
  { n: 10, tokens: [["      ", "      "], ["a", "animate"], ["p", "={{ "], ["v", "opacity"], ["p", ": "], ["n", "1"], ["p", " }}"]] },
  { n: 11, tokens: [["      ", "      "], ["a", "style"], ["p", "={{ "], ["v", "boxShadow"], ["p", ": "], ["g", "`0 0 80px ${glow}`"], ["p", " }}"]] },
  { n: 12, tokens: [["    ", "    "], ["p", "/>"]] },
  { n: 13, tokens: [["  ", "  "], ["p", ")"]] },
  { n: 14, tokens: [["p", "}"]] },
];

// Flatten lines into a per-character schedule: which line each char belongs to
// and the cumulative offset, so we can slice as the user "types".
const SCHEDULE = (() => {
  const lines = CODE_LINES.map((line) => {
    const chars = line.tokens.flatMap(([type, value]) =>
      Array.from(value).map((ch) => ({ type, ch }))
    );
    return { n: line.n, chars };
  });
  const totalChars = lines.reduce((sum, l) => sum + l.chars.length, 0);
  return { lines, totalChars };
})();

const CHARS_PER_TICK = 1;
const TICK_MS = 28;
const PAUSE_AT_END_MS = 3500;

function HeroCodeWindow() {
  const [typed, setTyped] = useState(0);
  const totalChars = SCHEDULE.totalChars;

  useEffect(() => {
    let cancelled = false;
    let timer;

    const tick = () => {
      if (cancelled) return;
      setTyped((prev) => {
        if (prev >= totalChars) {
          timer = setTimeout(() => {
            if (!cancelled) setTyped(0);
          }, PAUSE_AT_END_MS);
          return prev;
        }
        timer = setTimeout(tick, TICK_MS);
        return prev + CHARS_PER_TICK;
      });
    };

    timer = setTimeout(tick, TICK_MS);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [totalChars]);

  // Slice the schedule down to `typed` characters and group back into lines.
  let remaining = typed;
  let cursorPlaced = false;
  const renderedLines = SCHEDULE.lines.map((line, lineIdx) => {
    if (remaining <= 0 && cursorPlaced) {
      return { n: line.n, groups: [], cursor: false };
    }
    const sliceCount = Math.min(remaining, line.chars.length);
    const visible = line.chars.slice(0, sliceCount);
    remaining -= sliceCount;

    // Regroup adjacent chars that share a type.
    const groups = [];
    for (const c of visible) {
      const last = groups[groups.length - 1];
      if (last && last.type === c.type) last.value += c.ch;
      else groups.push({ type: c.type, value: c.ch });
    }

    const isActiveLine =
      !cursorPlaced &&
      (sliceCount < line.chars.length ||
        (sliceCount === line.chars.length && lineIdx === SCHEDULE.lines.length - 1 && typed >= totalChars) ||
        (sliceCount === line.chars.length && remaining === 0));

    if (isActiveLine) cursorPlaced = true;

    return { n: line.n, groups, cursor: isActiveLine };
  });

  return (
    <div className="hero-code-window" aria-hidden="true">
      <div className="hcw-floor" />
      <div className="hcw-window">
        <div className="hcw-chrome">
          <span className="hcw-dot hcw-dot-red" />
          <span className="hcw-dot hcw-dot-yellow" />
          <span className="hcw-dot hcw-dot-green" />
          <div className="hcw-tabs">
            <span className="hcw-tab hcw-tab-active">Studio.jsx</span>
            <span className="hcw-tab">theme.css</span>
          </div>
          <span className="hcw-path">src / components / Studio.jsx</span>
        </div>
        <div className="hcw-body">
          <pre className="hcw-code">
            {renderedLines.map((line, idx) => (
              <div key={idx} className="hcw-line">
                <span className="hcw-gutter">{String(line.n).padStart(2, " ")}</span>
                <span className="hcw-code-content">
                  {line.groups.map((g, gi) => (
                    <span key={gi} className={`hcw-t-${g.type}`}>
                      {g.value}
                    </span>
                  ))}
                  {line.cursor && <span className="hcw-cursor" />}
                </span>
              </div>
            ))}
          </pre>
        </div>
        <div className="hcw-scanlines" />
      </div>
    </div>
  );
}

export default HeroCodeWindow;
