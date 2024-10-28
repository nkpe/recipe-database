import { Header } from "./static/Header";
import { Footer } from "./static/Footer";
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}