
import { Main } from "@/components/Main";
import { PortifolioItem } from "@/components/PortifolioItem";
import React from "react";

export default function Portifolio(){
   return(
        <>
            <Main>
                <h1 className="text-4xl font-bold">Portifolio</h1>
                <PortifolioItem/>
            </Main>

        </>
    );
};