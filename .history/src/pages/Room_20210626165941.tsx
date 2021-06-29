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
                    <h1>Sala</h1>
                </div>
            </main>
        </div>

    )
}