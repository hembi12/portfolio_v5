"use client";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Obtiene el año actual

    return (
        <footer className="bg-indigo-950 text-white py-4 text-center">
            <p className="text-sm">
                &copy; {currentYear} Héctor Martil - All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;