import { useTheme } from "../../utils/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import "./ThemeToggle.scss";

function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}

export default ThemeToggle;
