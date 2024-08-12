import React from "react";

export const Profile = () =>{
    return(
        <>
            <aside className="w-full lg:w-1/4 p-5 bg-gray-100 fixed lg:sticky top-20">
                <div className="text-center">
                    <img src="" alt="" className="rounded-full w-32 h-32 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Dimitry Machado Marinho</h2>
                    <p className="text-gray-600 mb-4">Desenvolvedor Front End</p>
                    <p className="text-gray-600">Ribeirão Preto Sp</p>
                    <p className="text-gray-600">dimitrym.marinho@gmail.com</p>
                </div>
            </aside>
        </>
    );
};