import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"

//webpack (snowpack, vite ...)

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Imagem Ilustrativa"></img>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="logo do site"></img>
                </div>
            </main>
        </div>
    );
};