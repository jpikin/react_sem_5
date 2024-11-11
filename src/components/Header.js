import { useContext } from "react";
import { UserContext } from '../App'

export default function Header() {
    const userName = useContext(UserContext)
    return (
        <>
            <p>Hello, {userName}</p>
        </>
    );
}
