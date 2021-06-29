import copyImg from "../assets/images/copy.svg";

import "../styles/"

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #161989845</span>
        </button>
    )
}
