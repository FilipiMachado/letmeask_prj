type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

export function Question({}: QuestionProps) {
    return (
        <div className="question">
            <p>{props.content}</p>
        </div>
    );
}