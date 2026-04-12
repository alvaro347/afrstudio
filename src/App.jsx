import { ThemeProvider } from "./utils/ThemeContext";
import MainPage from "./pages/MainPage/MainPage";
import "./css/global.scss";

export default function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}
