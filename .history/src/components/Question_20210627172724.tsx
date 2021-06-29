type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

export function Question(props: QuestionProps) {
    return (
    <div className="question">
        <p>{props.content}</p>
    </div>
}