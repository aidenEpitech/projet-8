import Router from './Router';
import Header from "./pages/components/layout/Header.jsx";
import Footer from "./pages/components/layout/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="container mx-auto">
                <Router />
            </div>
            <Footer />
        </div>
    );
}

export default App;



