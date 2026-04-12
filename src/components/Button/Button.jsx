import "./Button.scss";

function Button({ children, variant = "default", href, onClick, className = "", ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
