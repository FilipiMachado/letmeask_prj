import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"

import { Button } from "../components/Button"

import "../styles/auth.scss"

export function NewRoom() {
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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        
                    </p>
                </div>
            </main>
        </div>
    );
}