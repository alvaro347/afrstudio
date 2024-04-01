// import logo from './img/logo.svg';
import './css/App.css';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './css/MediaQuery.css'


function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
