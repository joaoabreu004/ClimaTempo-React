import './Card.css'

function Card(props){
    return(
        <div className="cardBody">
            <h3>{props.titulo}</h3>
            <h1>{props.temperatura}</h1>
            <p>{props.clima}</p>
        </div>
    );
}
export default Card;