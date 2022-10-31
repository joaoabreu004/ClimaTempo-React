import './App.css';

import Dia from './Componentes/Dia';
import Semana from './Componentes/Semana';
import Topo from './Componentes/Topo';

function App() {

  return (
    <div className="App">
      <Topo></Topo>
      <Dia></Dia>
      <Semana></Semana>
    </div>
  );
}

export default App;
