import './Topo.css';
import {useState} from 'react';


// eslint-disable-next-line react-hooks/rules-of-hooks, no-undef


function Topo(props) {

    
    let [temp, setTemp] = useState();

    
    const obterDados = () => {

        const cidade = document.querySelector('.campoCidade').value;
        const titulo = document.querySelector('.titulo'); 


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=d48b36cf745e78d68759643ac8cedde6&units=metric`)
        .then(resp => {
            return resp.json()
        })
            .then(dados => {
                console.log(dados)
                alert(dados.main.temp + " " + dados.weather[0].description + " " + dados.weather[0].icon + " " +  dados.name);
                temp = dados.main.temp
                setTemp(titulo.innerHTML = `Previsão do Tempo: ${temp.toFixed(0)}ºC`); 
                console.log(temp); 
            })
                .catch(erro => {
                    console.log(erro); 
                })
    }


    return (
        <header>
            <div>
                <h2 className='titulo'>Previsão do Tempo: </h2>
            </div>
            <div className='pesquisa'>
                <input
                    className='campoCidade'
                    type='text'
                    placeholder='Buscar cidade'
                />
                <span onClick={obterDados}>&#x1F50E;&#xFE0E;</span>
            </div>
        </header>
    );
}
export default Topo;