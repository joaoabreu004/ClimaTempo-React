import './Semana.css';
import Card from "./Card";

function Semana(){
    const previsao = [{dia:'Seg', temp:'30', desc:'Ensolarado'},
                      {dia:'Ter', temp:'29', desc:'Chuvoso'},
                      {dia:'Qua', temp:'28', desc:'Sol'},
                      {dia:'Qui', temp:'27', desc:'Tempestade'},
                      {dia:'Sex', temp:'26', desc:'Parcialmente ensolarado'},];
    return(
        <div className='diariamente'>
            <h2>Diariamente</h2>
            <div className='temperatura-semana'>
                {
                    previsao.map((item) =>{
                        return(
                            <Card 
                                titulo={item.dia} 
                                temperatura={item.temp} 
                                clima={item.desc}>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Semana;