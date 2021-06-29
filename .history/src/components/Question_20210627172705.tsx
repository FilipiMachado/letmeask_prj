type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

export function Question(props: QuestionProps) {
    <div className="question">
        <p>{props.}</p>
    </div>
}