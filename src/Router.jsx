import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Housing from './pages/Housing';
import Logement from './pages/Logement.jsx';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing" element={<Housing />} />
             <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
