import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const quadroInical = Array(9).fill(null);

  const [quadro, setQuadro] = useState(quadroInical);
  const [xAtual, setXAtual] = useState(true);
  const [vencedor, setVencedor] = useState(null);
  
  function lidarComReiniciar() {
    setQuadro(quadroInical);
    setXAtual(true);
    setVencedor(null);
  }

  function verificarGanhador(novoQuadro) {
    const combinacoesParaGanhar = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < combinacoesParaGanhar.length; i++) {
      const [a, b, c] = combinacoesParaGanhar[i];

      if(novoQuadro[a] && novoQuadro[a] === novoQuadro[b] && novoQuadro[a] === novoQuadro[c]) {
        setVencedor(novoQuadro[a]);
      }else if(novoQuadro.every((botao) => botao !== null)) {
        
      }
    }   
  }

  function lidarComEscolha(index) {
    if(quadro[index] || vencedor) {
      return;
    }
    
    const novoQuadro = [...quadro];
    novoQuadro[index] = xAtual ? 'X' : 'O';
    
    setQuadro(novoQuadro);
    verificarGanhador(novoQuadro);
    setXAtual(!xAtual);
  }

  return (
    <div className='page'>
      <div className="container">
        <h1>Jogo da Velha</h1>
        {vencedor ? (
          <h3 className='vencedor'><span className='jogadorAtual'>{vencedor} É o vencedor!</span></h3>
        ) : (
          <h3>É a vez do jogador <span className='jogadorAtual'>{xAtual ? 'X' : 'O'}</span></h3>
        )}
        <div className='containerDoJogo'>
          <div className='containerDosBotoes'>
            {quadro.map((itemAtual, index) => {
              return <button key={index} onClick={() => lidarComEscolha(index)} className='botao'>
                {quadro[index]}
              </button>
            })}
          </div>
          <button onClick={lidarComReiniciar}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
