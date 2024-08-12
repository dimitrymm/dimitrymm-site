import React from "react";
import { Navbar } from "../Navbar";

export const Header = () =>{
    return(
        <>
            <header className="w-full bg-gray-900 text-white">
                <div className="container mx-auto flex justify-between items-center p-5">
                    <h1 className="text-3xl font-bold">Dimitry Machado Marinho</h1>
                    <Navbar/>
                </div>
            </header>
        </>
    );
};