import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full p-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600">
            <Logo />

        </header>
    )
}