import React from 'react';
import { HashLink } from 'react-router-hash-link'; 

interface NavItem {
    label: string;
    to: string;
}

const navItems: NavItem[] = [
    { label: "Como Encomendar", to: "/#how-to-order" }, 
    { label: "Catálogo", to: "/#catalog" },
    { label: "Adicionais", to: "/#additional" },
    { label: "Encomendar", to: "/encomendar" },
];

export const Header: React.FC = () => {
    return (
        <header className="w-full font-sans">
            <nav className="fixed top-0 left-0 w-full bg-main/95 backdrop-blur-sm z-50 shadow-xs transition-all">
                <div className="mx-auto flex max-w-full items-center justify-between px-6 py-4 md:px-12">
                    <ul className="ml-auto flex items-center gap-8 text-xs md:text-sm text-[#4A3525] font-medium">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <HashLink
                                    to={item.to}
                                    smooth 
                                    className="transition-colors hover:text-amber-900 hover:underline underline-offset-4"
                                >
                                    {item.label}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;