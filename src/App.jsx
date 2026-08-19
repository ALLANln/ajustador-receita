import { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import FormularioPorcoes from './components/FormularioPorcoes';
import IngredientesAjustados from './components/IngredientesAjustados';
import './App.css';

// Receita original fixa feita para 4 porções.
const PORCOES_BASE = 4;
const FARINHA_BASE = 2; // xícaras
const ACUCAR_BASE = 1;  // xícara
const OVOS_BASE = 2;    // unidades
const LEITE_BASE = 1;   // xícara

// Toda a conta fica aqui fora, numa função separada
function calcularReceita(porcoesDesejadas) {
  const fator = porcoesDesejadas / PORCOES_BASE;

  return {
    farinha: FARINHA_BASE * fator,
    acucar: ACUCAR_BASE * fator,
    ovos: OVOS_BASE * fator,
    leite: LEITE_BASE * fator,
  };
}

function App() {
  // useState #1 - ligado ao input de porções (controlado)
  const [porcoesDesejadas, setPorcoesDesejadas] = useState('');
  // useState #2 - guarda o resultado depois de calcular
  const [resultado, setResultado] = useState(null);

  function aoCalcular() {
    const porcoes = Number(porcoesDesejadas);

    if (porcoes <= 0) {
      alert('Informe uma quantidade de porções maior que zero.');
      return;
    }

    const receitaCalculada = calcularReceita(porcoes);
    setResultado(receitaCalculada);
  }

  function aoLimpar() {
    setPorcoesDesejadas('');
    setResultado(null);
  }

  return (
    <div className="caixa">
      <Cabecalho titulo="Ajustador de Receita Culinária" />

      <FormularioPorcoes
        porcoes={porcoesDesejadas}
        aoAlterarPorcoes={(e) => setPorcoesDesejadas(e.target.value)}
      />

      <div className="botoes">
        <button onClick={aoCalcular}>Calcular</button>
        <button onClick={aoLimpar}>Limpar</button>
      </div>

      {resultado ? (
        <IngredientesAjustados
          farinha={resultado.farinha}
          acucar={resultado.acucar}
          ovos={resultado.ovos}
          leite={resultado.leite}
        />
      ) : (
        <p className="aviso">Informe as porções desejadas e clique em Calcular.</p>
      )}
    </div>
  );
}

export default App;
