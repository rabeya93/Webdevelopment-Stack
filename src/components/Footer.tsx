
type FooterLink={
    name:string,
    href:string
}

type FooterColumn ={
    title:string;
    links: FooterLink[];
}

const FooterColumnArray: FooterColumn[]= [
    {
        title: "Product",
        links: [
            { name: "Home", href: "#home" },
            { name: "Technologies", href: "#technologies" },
            { name: "Projects", href: "#projects" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
        ],
    },
];


const SocialLinks: FooterLink[] = [
    { name: "GitHub", href: "https://github.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-6xl px-6 pb-8 pt-42">
        
                <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        
                    <div>
                        <a href="#home" className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 text-[15px] font-bold text-white">
                                DS
                            </span>
                            <span className="text-xl font-semibold text-slate-900">
                                Dev 
                                <span className="text-pink-600">Stack</span>
                            </span>
                        </a>
 
                        <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-500">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                        </p>
 
                        <ul className="mt-5 flex items-center gap-5">
                            {SocialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-medium text-slate-800 transition-colors hover:text-pink-600"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
 
                    {FooterColumnArray.map((column) => (
                        <div key={column.title}>
                            <h4 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
                                {column.title}
                            </h4>
                            <ul className="mt-4 ">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                        href={link.href}
                                        className="text-xs text-slate-500 transition-colors hover:text-pink-600"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
 
                {/*  Privacy and Terms */}
                <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="transition-colors hover:text-pink-600">
                        Privacy
                        </a>
                        <a href="#" className="transition-colors hover:text-pink-600">
                        Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;