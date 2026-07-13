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
    <header className="w-full bg-main font-sans">
     
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
    

        <ul className="ml-auto flex items-center gap-8 text-sm md:text-base text-neutral-700 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="transition-colors hover:text-neutral-950 hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>

      <div className="w-full overflow-hidden">
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