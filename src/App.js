import "./App.css";
import HeroSection from "./components/MainSection";
import Navigation from "./components/Header";
import Shopping from './components/Shopping'
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Shopping/>
    </div>
  );
};

export default App;