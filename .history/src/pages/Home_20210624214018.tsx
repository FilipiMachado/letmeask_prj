import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";
import { useContext } from "react";
import { AuthContext } from "../App";

//webpack (snowpack, vite ...)

export function Home() {
    const history = useHistory();
    const {us} = useContext(AuthContext);

    function HandleCreateRoom() {


        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Imagem Ilustrativa"></img>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="logo letmeask" />
                    <button onClick={HandleCreateRoom} className="create-room">Crie sua sala com o Google
                        <img src={googleIconImg} alt="logo do Google" />
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
};