import { useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";
import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.scss";

// -- Color helper for radial gradients
function parseRGB(color) {
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
  }
  const m = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
  return m ? [+m[1], +m[2], +m[3]] : [124, 106, 239];
}

// -- Tron grid configuration
const GRID_MAIN = 60;
const GRID_SUB = 12;
const DOT_COUNT = 3;
const DOT_SPEED = 1.5;
const REVEAL_RADIUS = 120;
const TRAIL_LENGTH = 200;

function initDots(w, h) {
  const cols = Math.floor(w / GRID_MAIN);
  const rows = Math.floor(h / GRID_MAIN);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  return Array.from({ length: DOT_COUNT }, () => {
    const col = Math.floor(Math.random() * cols);
    const row = Math.floor(Math.random() * rows);
    const dir = dirs[Math.floor(Math.random() * dirs.length)];
    return {
      x: col * GRID_MAIN,
      y: row * GRID_MAIN,
      dx: dir[0],
      dy: dir[1],
      trail: [],
    };
  });
}

function stepDot(dot, w, h) {
  dot.trail.push({ x: dot.x, y: dot.y });
  if (dot.trail.length > TRAIL_LENGTH) dot.trail.shift();

  dot.x += dot.dx * DOT_SPEED;
  dot.y += dot.dy * DOT_SPEED;

  // Snap to grid intersection and pick new direction
  const onCol = Math.abs(dot.x % GRID_MAIN) < DOT_SPEED;
  const onRow = Math.abs(dot.y % GRID_MAIN) < DOT_SPEED;

  if (onCol && onRow) {
    dot.x = Math.round(dot.x / GRID_MAIN) * GRID_MAIN;
    dot.y = Math.round(dot.y / GRID_MAIN) * GRID_MAIN;

    // 30% chance to turn at intersections
    if (Math.random() < 0.3) {
      if (dot.dx !== 0) {
        dot.dx = 0;
        dot.dy = Math.random() < 0.5 ? 1 : -1;
      } else {
        dot.dy = 0;
        dot.dx = Math.random() < 0.5 ? 1 : -1;
      }
    }
  }

  // Bounce at edges
  if (dot.x <= 0 || dot.x >= w) {
    dot.dx *= -1;
    dot.x = Math.max(0, Math.min(w, dot.x));
  }
  if (dot.y <= 0 || dot.y >= h) {
    dot.dy *= -1;
    dot.y = Math.max(0, Math.min(h, dot.y));
  }
}

function drawGrid(ctx, w, h, dots, accentColor) {
  ctx.clearRect(0, 0, w, h);

  // Main grid — always faintly visible
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 0.5;
  ctx.globalAlpha = 0.03;

  ctx.beginPath();
  for (let x = 0; x <= w; x += GRID_MAIN) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }
  for (let y = 0; y <= h; y += GRID_MAIN) {
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
  }
  ctx.stroke();

  // Main grid + sub-grid — radial gradient glow near dots
  const rSq = REVEAL_RADIUS * REVEAL_RADIUS;
  const [cr, cg, cb] = parseRGB(accentColor);
  ctx.globalAlpha = 1;

  for (const dot of dots) {
    const grad = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, REVEAL_RADIUS);
    grad.addColorStop(0, `rgba(${cr},${cg},${cb},0.2)`);
    grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
    ctx.strokeStyle = grad;

    // Main grid lines in range
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= w; x += GRID_MAIN) {
      const dx = Math.abs(dot.x - x);
      if (dx >= REVEAL_RADIUS) continue;
      const half = Math.sqrt(rSq - dx * dx);
      ctx.beginPath();
      ctx.moveTo(x, Math.max(0, dot.y - half));
      ctx.lineTo(x, Math.min(h, dot.y + half));
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += GRID_MAIN) {
      const dy = Math.abs(dot.y - y);
      if (dy >= REVEAL_RADIUS) continue;
      const half = Math.sqrt(rSq - dy * dy);
      ctx.beginPath();
      ctx.moveTo(Math.max(0, dot.x - half), y);
      ctx.lineTo(Math.min(w, dot.x + half), y);
      ctx.stroke();
    }

    // Sub-grid lines in range
    const subGrad = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, REVEAL_RADIUS);
    subGrad.addColorStop(0, `rgba(${cr},${cg},${cb},0.06)`);
    subGrad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
    ctx.strokeStyle = subGrad;
    ctx.lineWidth = 0.3;
    for (let x = 0; x <= w; x += GRID_SUB) {
      if (x % GRID_MAIN === 0) continue;
      const dx = Math.abs(dot.x - x);
      if (dx >= REVEAL_RADIUS) continue;
      const half = Math.sqrt(rSq - dx * dx);
      ctx.beginPath();
      ctx.moveTo(x, Math.max(0, dot.y - half));
      ctx.lineTo(x, Math.min(h, dot.y + half));
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += GRID_SUB) {
      if (y % GRID_MAIN === 0) continue;
      const dy = Math.abs(dot.y - y);
      if (dy >= REVEAL_RADIUS) continue;
      const half = Math.sqrt(rSq - dy * dy);
      ctx.beginPath();
      ctx.moveTo(Math.max(0, dot.x - half), y);
      ctx.lineTo(Math.min(w, dot.x + half), y);
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1;
}

function drawDots(ctx, w, h, dots, accentColor) {
  ctx.clearRect(0, 0, w, h);

  for (const dot of dots) {
    // Trail
    for (let i = 0; i < dot.trail.length; i++) {
      const t = dot.trail[i];
      const alpha = (i / dot.trail.length) * 0.2;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dot head
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Glow
    ctx.globalAlpha = 0.08;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
}

function Hero() {
  const { t } = useTranslation();
  const gridCanvasRef = useRef(null);
  const dotsCanvasRef = useRef(null);
  const animRef = useRef(null);
  const dotsRef = useRef(null);

  const scrollToProjects = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  const getAccentColor = useCallback(() => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim() || "#7c6aef";
  }, []);

  useEffect(() => {
    const gridCanvas = gridCanvasRef.current;
    const dotsCanvas = dotsCanvasRef.current;
    if (!gridCanvas || !dotsCanvas) return;

    const gridCtx = gridCanvas.getContext("2d");
    const dotsCtx = dotsCanvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = gridCanvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      for (const c of [gridCanvas, dotsCanvas]) {
        c.width = w * dpr;
        c.height = h * dpr;
        c.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      dotsRef.current = initDots(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = gridCanvas.width / (window.devicePixelRatio || 1);
      const h = gridCanvas.height / (window.devicePixelRatio || 1);
      const dots = dotsRef.current;
      if (!dots) return;

      const accent = getAccentColor();

      for (const dot of dots) stepDot(dot, w, h);

      drawGrid(gridCtx, w, h, dots, accent);
      drawDots(dotsCtx, w, h, dots, accent);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [getAccentColor]);

  const stats = [
    { value: t("hero.stats.projects.value"), label: t("hero.stats.projects.label") },
    { value: t("hero.stats.experience.value"), label: t("hero.stats.experience.label") },
    { value: t("hero.stats.role.value"), label: t("hero.stats.role.label") },
  ];

  return (
    <header className="hero">
      <div className="hero-bg">
        <img src={assetPath("images/heroImg.png")} alt="" />
      </div>

      <div className="hero-tron">
        <canvas ref={gridCanvasRef} />
        <canvas ref={dotsCanvasRef} />
      </div>

      <div className="hero-inner">
        <h1 className="hero-title">
          <span className="hero-title-bold">AFR STUDIO</span>
          <span className="hero-title-outline">DEV.</span>
          <span className="hero-title-bold"> & DESIGN.</span>
        </h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        <div className="hero-actions">
          <Button variant="primary" onClick={scrollToProjects}>{t("hero.cta")}</Button>
          <SocialLinks />
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((stat, i) => (
          <div key={i} className="hero-stat">
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Hero;
