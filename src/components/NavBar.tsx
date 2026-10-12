import { useState } from "react";

type NavLink = {
    name: string;
    href: string;
};

const NavigationLink: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string>("Home");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const linkClasses = (label: string): string =>
        `text-sm transition-colors ${ activeLink === label ? "text-pink-600" : "text-slate-800 hover:text-pink-600"
    }`;

    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 py-10">
                
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2.5">
                    <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-600 text-large font-bold text-white'>
                        DS
                    </span>
                    <span className="text-xl font-semibold text-slate-900">
                        Dev<span className="text-pink-600">Stack</span>
                    </span>
                </a>

                {/*  links  */}
                <ul className="hidden items-center gap-8 md:flex text-lg font-semibold">
                    {NavigationLink.map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                onClick={() => setActiveLink(name)}
                                className={linkClasses(name)}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right actions (desktop) */}
                <div className="hidden items-center gap-5 md:flex">
                    <a
                        href="#signin"
                        className="text-sm text-slate-800 transition-colors hover:text-pink-600"
                    >
                        Sign In
                    </a>
                    <a
                        href="#signup"
                        className="whitespace-nowrap rounded-full bg-pink-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-700"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Hamburger (mobile) */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="rounded-md p-2 text-slate-800 md:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                        ) : (
                        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </nav>

        {/* Mobile menu */}
            {menuOpen && (
                <div className="border-t border-slate-100 bg-white px-6 pb-5 md:hidden">
                    <ul className="flex flex-col gap-4 py-4">
                        {NavigationLink.map(({ name, href }) => (
                        <li key={name}>
                            <a
                            href={href}
                            onClick={() => {
                                setActiveLink(name);
                                setMenuOpen(false);
                            }}
                            className={linkClasses(name)}
                            >
                            {name}
                            </a>
                        </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-5">
                        <a href="#signin" className="text-sm text-slate-800">
                        Sign In
                        </a>
                        <a
                        href="#signup"
                        className="whitespace-nowrap rounded-full bg-pink-600 px-6 py-2 text-sm font-medium text-white"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}