// src/routes.js
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home';
import Introduction from './components/Introduction';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MarketPotential from './components/MarketPotential';
import Benefits from './components/Benefits/Benefits';
import FutureDevelopment from './components/FutureDevelopment';
import Quiz from './components/Quiz';
import Conclusion from './components/Conclusion'; 
import Navigation from './components/Navigation';
const routes = [
    { path: '/', label: 'Accueil', component: Home },
    { path: '/introduction', label: 'Introduction', component: Introduction },
    { path: '/how-it-works', label: 'Fonctionnement', component: HowItWorks },
    { path: '/market-potential', label: 'Marché', component: MarketPotential },
    { path: '/benefits', label: 'Avantages', component: Benefits },
    { path: '/future-development', label: 'Futur', component: FutureDevelopment },
    { path: '/quiz', label: 'Quiz', component: Quiz },
    { path: '/conclusion', label: 'Conclusion', component: Conclusion },
];

export default routes;
