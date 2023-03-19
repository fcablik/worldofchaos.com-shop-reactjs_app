import { useLocation } from 'react-router-dom';

export default function RouterFinder() {
    const location = useLocation();
    const homeRoot = document.getElementById("root");
    
    if (location.pathname === '/') {
        homeRoot.classList.add("home");
    } else {
        homeRoot.classList.remove("home");
    }
}
