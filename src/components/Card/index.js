import "./card.css"

export default function Card ({className,title,children}) {
    return <div className={`card ${className}`}>
        <div className="card-title">{title}</div>
        <div className="card-content">{children}</div>
    </div>
}