import { useEffect, useState } from "react";

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

export function useRoom() {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on("value", room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            });

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
    }, [roomId]);
}