import { BlogPost } from "@/components/BlogPost";
import { Main } from "@/components/Main";
import React from "react";

export default function Blog(){
   return(
        <>
            <Main>
                <h1>Blog</h1>
                <BlogPost/>
            </Main>

        </>
    );
};