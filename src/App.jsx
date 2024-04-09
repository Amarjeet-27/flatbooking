import "./App.css";
import Colleges from "./pages/Colleges";
import Flats from "./pages/Flats";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#003b95",
          marginBottom: 20,
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: 1,
        }}
      >
        <h2>FindFlats</h2>
      </div>
      <div className=" " style={{ padding: 40 }}>
        <Colleges />
        <Flats />
      </div>

      <Footer />
    </div>
  );
}

export default App;
