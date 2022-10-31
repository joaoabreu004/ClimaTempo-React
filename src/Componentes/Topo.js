import './Topo.css';
import {useState} from 'react';


// eslint-disable-next-line react-hooks/rules-of-hooks, no-undef


function Topo(props) {

    const [contador, somaUm] = useState(null);

    const obterDados = () => {


        fetch('https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&lang=pt_br&appid=d48b36cf745e78d68759643ac8cedde6&units=metric')
        .then(resp => {
            return resp.json()
        })
            .then(dados => {
                console.log(dados)
                alert(dados.main.temp);
            })
                .catch(erro => {
                    console.log(erro) 
                })
    }


    return (
        <header>
            <div>
                <h2>Previsão do Tempo {contador}</h2>
            </div>
            <div className='pesquisa'>
                <input
                    type='text'
                    placeholder='buscar cidade'
                />
                <span onClick={obterDados}>&#x1F50E;&#xFE0E;</span>
            </div>
        </header>
    );
}
export default Topo;