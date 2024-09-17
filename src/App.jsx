import Router from './Router';
import Header from "./pages/components/layout/Header.jsx";
import Footer from "./pages/components/layout/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen"> {/* Assure que l'application prend toute la hauteur de l'écran */}
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-0"> {/* Conteneur centré avec padding ajusté */}
                <Router /> {/* Intégration du router pour la navigation */}
            </div>
            <Footer />
        </div>
    );
}

export default App;
