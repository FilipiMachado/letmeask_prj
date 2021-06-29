import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss";

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(-Md8sorwG9TgeLJV7XWw);
    }

    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.}</span>
        </button>
    )
}
