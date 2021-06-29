import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

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
                    <img src={logoImg} alt="logo letmeask"></img>
                    <button>Cri sua sala com o Google
                        <img src={googleIconImg} alt="logo do Google" />
                    </button>
                    <div>
                        ou entre em uma sala
                    </div>
                    <form action=""></form>
                </div>
            </main>
        </div>
    );
};