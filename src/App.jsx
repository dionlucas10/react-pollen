import './App.css';
import { Header } from "./components/Index/Header/Header";
import { Home } from "./components/Index/Sections/Home/Home";
import { About } from "./components/Index/Sections/About/About";
import { Footer } from "./components/Index/Sections/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Footer />
        </div>
    )
}

export default App;