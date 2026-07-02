import { useState } from "react";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header
            className="w-full"
            style={{ backgroundColor: "var(--color-primary)" }}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                <h1
                    className="text-6xl"
                    style={{ fontFamily: "Allura" }}
                >
                    Sou Bordados
                </h1>

                <ul className="flex items-center gap-8 text-sm">
                    <li>
                        <button>Como Encomendar</button>
                    </li>

                    <li>
                        <button>Catálogo</button>
                    </li>

                    <li>
                        <button>Adicionais</button>
                    </li>

                    <li className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Encomendar ⇩
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 top-12 w-64 rounded-lg border bg-white p-4 shadow-lg">
                                <ul className="space-y-3">
                                    <li>Formas de Pagamento</li>
                                    <li>Envio</li>
                                    <li>Aviso Importante</li>
                                    <li>Qualidade e Durabilidade</li>
                                    <li>Feedback</li>
                                    <li>Contato</li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;