import Link from "next/link"

export default function Navbar(){
    return (
        <header className="navbar">
            <img src="/ryan-logo.png" />
            <ul>
                <Link href="/profile">

                </Link>
            </ul>
        </header>
    )
}