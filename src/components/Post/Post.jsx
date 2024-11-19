import { useState } from "react";
import "./style.css";
import Titulo from "./Titulo";

function Post () {

    const [curtidas, setCurtidas] = useState(0); //[estado, função modificadora]
    const [carregando, setCarregando] = useState(true);
    function adicionarCurtida() {
        setCurtidas(curtidas+1);
    }
    
    setTimeout(() => {
        setCarregando(false);
    }, 5000);

    if (carregando){
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }
    return(
        <div className="post">
            <Titulo>Dolar sobe para R$ 6 APÒS TRUMP GANHAR AS ELEIÇÕES. </Titulo>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis necessitatibus quaerat, cum voluptate temporibus impedit, illum maiores culpa omnis beatae corporis eum, quos architecto reprehenderit ipsam atque delectus quasi.
            </p>

            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>

        </div>
    );
}

export default Post