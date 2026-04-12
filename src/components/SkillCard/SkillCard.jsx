import "./SkillCard.scss";

function CodeVisual() {
  return (
    <div className="skill-visual skill-visual-code" aria-hidden="true">
      <div className="code-line"><span className="code-kw">const</span> <span className="code-fn">build</span> = <span className="code-kw">async</span> () {"=>"} {"{"}</div>
      <div className="code-line code-indent"><span className="code-kw">await</span> <span className="code-fn">compile</span>(src);</div>
      <div className="code-line code-indent"><span className="code-kw">await</span> <span className="code-fn">deploy</span>(dist);</div>
      <div className="code-line">{"}"}</div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="skill-visual skill-visual-design" aria-hidden="true">
      <div className="design-frame">
        <div className="design-nav" />
        <div className="design-hero" />
        <div className="design-grid">
          <div className="design-card" />
          <div className="design-card" />
          <div className="design-card" />
        </div>
      </div>
    </div>
  );
}

function ThreeDVisual() {
  return (
    <div className="skill-visual skill-visual-3d" aria-hidden="true">
      <div className="cube-scene">
        <div className="cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>
    </div>
  );
}

const visuals = { code: CodeVisual, design: DesignVisual, "3d": ThreeDVisual };

function SkillCard({ number, title, description, href, visual }) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  const Visual = visuals[visual];

  return (
    <Tag className="skill-card" {...linkProps}>
      {Visual && <Visual />}
      <div className="skill-card-body">
        <span className="skill-card-number mono">{number}</span>
        <h4 className="skill-card-title">{title}</h4>
        <p className="skill-card-desc">{description}</p>
      </div>
    </Tag>
  );
}

export default SkillCard;
