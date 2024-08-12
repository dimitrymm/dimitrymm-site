import React from "react";
import Image from "next/image";
import tela from '../../../public/images/Teste Site.png'

export const PortifolioItem = () =>{
    return(
        <> 
            <div className="border rounded-lg p-5">
                <Image
                    src={tela}
                    alt="tela1"
                    className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-4">Projeto Teste 1</h3>
                <p className="mt-2">Descrição</p>
            </div>
        </>
    );
};