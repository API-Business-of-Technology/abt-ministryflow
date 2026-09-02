// @ts-nocheck
"use client";
import "./Page_splash.css";
import Image from "next/image";

export default function SplashPage(){

    return(

        <div className="FondEcran">
             <Image src="/logo.png" alt="Logo de Ministry Flow" width={150} height={150}/>
             <h1>Une plateforme intelligente qui permet de gerer les activités de votre ministère.</h1>
        </div>

    );
}

