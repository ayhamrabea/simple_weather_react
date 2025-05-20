import { Outlet } from 'react-router-dom';
import { Navbar } from "../Navbar/Navbar";
import { Hero } from '../Hero/Hero';

export const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero/>
                <Outlet />
            </main>
            <footer>
                
            </footer>
        </>
    );
};