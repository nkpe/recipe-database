import { Link, useLocation } from "react-router-dom"
import { SearchBar } from "./SearchBar"

export const Header = () => {
    const location = useLocation();
    const homePath = "/";

    return (
        <header className="grid grid-cols-3 items-center justify-items-center sticky top-0 z-50 w-full bg-slate-100/[0.7] box-border py-4 px-8">
            <p className="text-3xl col-start-2"><Link to="/">Recipe<b>Finder</b></Link></p>
            {location.pathname === homePath ? <div className="spacer w-4"></div> : <SearchBar className="justify-self-end"/>}
        </header>
    )
}