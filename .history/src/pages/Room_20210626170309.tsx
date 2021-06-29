import { ButtonHTMLAttributes } from "react"
import logoImg from "../assets/images/logo.svg"

export function Room() {
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="logo letmeask" />
                    <div>codigo</div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form>
                    <textarea
                        placeholder="O que você quer perguntar?"
                    />

                    <div className="form-footer">
                        <span>Para enviar uma pergunta,
                            <button>faça seu login</button>
                            .</span>
                        <ButtonHTMLAttributes
                    </div>
                </form>
            </main>
        </div>

    )
}