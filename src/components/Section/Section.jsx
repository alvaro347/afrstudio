import { useInView } from "../../hooks/useInView";
import "./Section.scss";

function renderTitle(title) {
  const parts = title.split("*");
  if (parts.length <= 1) return title;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <span className="section-title-star">*</span>}
    </span>
  ));
}

function Section({ id, label, title, children, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id={id} ref={ref} className={`section ${inView ? "revealed" : ""} ${className}`.trim()}>
      <div className="section-inner">
        {(label || title) && (
          <div className="section-header">
            {label && <span className="section-label mono">{label}</span>}
            {title && <h2 className="section-title">{renderTitle(title)}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
