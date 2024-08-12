import React, { ReactNode } from "react";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { Footer } from "../Footer";



interface LayoutProps{
    children: ReactNode;
}

export const Main:React.FC<LayoutProps> = ({children}) =>{
    return(
        <>
            <div className="pattern-boxes pattern-gray-500 pattern-bg-white 
  pattern-size-6 pattern-opacity-20">
                
                
                <div className="relative min-h-screen flex flex-col lg:flex-row">
                    <Profile/>
                    <div className="relative flex-grow container mx-auto p-5 lg:ml-5 z-10">
                        <Header/>
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};