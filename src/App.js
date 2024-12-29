import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <main class="container my-3">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
