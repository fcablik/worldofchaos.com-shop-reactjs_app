import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function BackToTop() {
    const location = useLocation();
    useEffect(() => {
        document.querySelector('#root').scrollTop = 0;
    }, [location])

    return null;
}