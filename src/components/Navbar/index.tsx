import React from "react";
import Link from 'next/link';


export const Navbar = () =>{
    return(
        <nav>
            <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/portifolio">Portifolio</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    );
};