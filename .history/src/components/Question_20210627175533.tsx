type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

import "../styles"

export function Question({
    content,
    author,
}: QuestionProps) {
    return (
        <div className="question">
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div></div>
            </footer>
        </div>
    );
}