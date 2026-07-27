"use client";
import Image from "next/image";
import "./PageBienvenue.css";

export default function PageBienvenue(){

    return(

        <div className="container">
            <div id="container1">
                <div id="boite2">
                    <h1>Bienvenue sur</h1>
                    <h1>Ministry<span>Flow</span></h1>
                    <p>La solution tout en un pour la gestion efficace de votre organisation religieuse.</p>
                </div>

                  <div id="boite3">
                      <button id="button">
                            Se connecter a votre compte
                            →
                       </button>

                      <button>
                           Créer un nouveau compte
                            →
                      </button>
                  </div>
            </div>

            <div id="container2">
                <Image src="/logo.png" alt="Logo de Ministry Flow" width={500} height={400}/>
            </div>
        </div>
    );
}