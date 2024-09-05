import Router from './Router';
import Header from "./pages/components/layout/Header.jsx";
import Footer from "./pages/components/layout/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto">
                <Header />
                <Router />
            </div>
            <Footer />
        </div>
    );
}

export default App;

