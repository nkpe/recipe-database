import { Input } from "../ui/input"

export const SearchBar = ({className}: {className: string}) => {
    return (
        <Input className={className} placeholder="search"></Input>
    )
}