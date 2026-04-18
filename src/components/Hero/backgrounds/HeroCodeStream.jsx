import "./HeroCodeStream.scss";

const SNIPPETS = [
  "const render = () => <App />",
  "return data.map(fn)",
  "await fetch('/api/v1/studio')",
  "// render passes",
  "export default function Hero()",
  "if (!ctx) throw new Error('no ctx')",
  "matrix.forEach(row => row.shift())",
  "const [state, setState] = useState()",
  "grid[x][y] = 0xff7c6aef",
  "requestAnimationFrame(tick)",
  "new WebGLRenderer({ antialias: true })",
  "socket.emit('draw', { x, y })",
  "for (let i = 0; i < n; i++) step()",
  "position: absolute; inset: 0",
  "transform: translate3d(0, 0, 0)",
  "display: grid; place-items: center",
  "compose(identity, reverse, flatten)",
  "async function calibrate() { ... }",
  "struct Vec3 { x: f32, y: f32, z: f32 }",
  "impl Iterator for Stream<T> { }",
  "SELECT * FROM projects WHERE live = 1",
  "mat4 proj = perspective(fov, ratio)",
  "void main() { gl_FragColor = vec4(1.); }",
  "context.drawImage(img, 0, 0, w, h)",
  "// tick @ 60fps",
];

function repeat(str, n) {
  return Array.from({ length: n }, () => str).join("   ·   ");
}

const ROWS = 8;

function HeroCodeStream() {
  const rows = Array.from({ length: ROWS }, (_, i) => {
    const snippet = SNIPPETS[i % SNIPPETS.length];
    const duration = 28 + ((i * 7) % 32);
    const delay = -((i * 11) % duration);
    const top = (i * 100) / ROWS + (i % 2 === 0 ? 1.5 : -1);
    const opacity = 0.35 + ((i * 13) % 55) / 100;
    const reverse = i % 3 === 0;
    return { snippet, duration, delay, top, opacity, reverse, i };
  });

  return (
    <div className="hero-code-stream" aria-hidden="true">
      <div className="hcs-band">
        <div className="hcs-rows">
          {rows.map((r) => (
            <div
              key={r.i}
              className={`hcs-row ${r.reverse ? "hcs-row-reverse" : ""}`}
              style={{
                top: `${r.top}%`,
                animationDuration: `${r.duration}s`,
                animationDelay: `${r.delay}s`,
                opacity: r.opacity,
              }}
            >
              <span className="hcs-text">{repeat(r.snippet, 4)}</span>
            </div>
          ))}
        </div>
        <div className="hcs-scan" />
        <div className="hcs-edge hcs-edge-top" />
        <div className="hcs-edge hcs-edge-bottom" />
      </div>
    </div>
  );
}

export default HeroCodeStream;
