import illustrationImg from "../assets/images/illustration.svg"

//webpack (snowpack, vite ...)

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Imagem Ilustrativa"></img>
            </aside>
        </div>
    );
};