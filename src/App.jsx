import "./App.css";
import Colleges from "./pages/Colleges";
import Flats from "./pages/Flats";
import Footer from "./pages/Footer";
import HeroPage from "./pages/HeroPage";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <div className=" " style={{ padding: 40 }}>
        <Colleges />
        <Flats />
      </div>

      <Footer />
    </div>
  );
}

export default App;
