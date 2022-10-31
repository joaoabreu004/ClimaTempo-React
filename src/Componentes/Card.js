

function Card(props){
    return(
        <div>
            <h3>{props.titulo}</h3>
            <h1>{props.temperatura}</h1>
            <p>{props.clima}</p>
        </div>
    );
}
export default Card;