import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full flex bg-slate-100/[0.7] h-12 justify-center items-center box-content py-4">
            <p className="text-3xl"><Link to="/">Recipe<b>Finder</b></Link></p>
        </header>
    )
}