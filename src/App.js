import logo from './logo.svg';
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda';
import Centro from './componentes/Centro/ConteudoCentral';
import Direito from './componentes/Direita/ConteudoLateralDireita'

function App() {
  return (
    <>
      <Esquerda />
      <Centro />
      <Direito/>
      
    </>
  );
}

export default App;
