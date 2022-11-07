import './Dia.css'
import Card from '../Card'

function Dia(){
    return(
        <div className='temperatura-dia'>
            <Card titulo='Rio de Janeiro' temperatura='25' clima='Ensolarado'></Card>
        </div>
    );
}
export default Dia;