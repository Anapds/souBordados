import React from 'react';
import fotoSouBordados from "../../assets/images/fotoSouBordados.png";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Como Encomendar", href: "#how-to-order" },
    { label: "Catálogo", href: "#catalog" },
    { label: "Adicionais", href: "#additional" },
    { label: "Encomendar", href: "#order" },
];

export const Header: React.FC = () => {
    return (
        <header className="w-full font-sans">

            <nav className="fixed top-0 left-0 w-full bg-main/95 backdrop-blur-sm z-50 shadow-xs transition-all">
                <div className="mx-auto flex max-w-full items-center justify-between px-6 py-4 md:px-12">

                    <ul className="ml-auto flex items-center gap-8 text-xs md:text-sm text-[#4A3525] font-medium">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="transition-colors hover:text-amber-900 hover:underline underline-offset-4"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </nav>

            <div className="w-full overflow-hidden pt-12">
                <img
                    src={fotoSouBordados}
                    alt="Banner Sou Bordados"
                    className="w-full object-cover max-h-[500px]"
                />
            </div>

        </header>
    );
};

export default Header;