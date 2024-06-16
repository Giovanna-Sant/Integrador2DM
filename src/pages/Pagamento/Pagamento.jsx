import {  useState } from 'react';
import './Pagamento.css';
import { PlanoSelecionado } from '../Planos/components/PlanosDisponiveis';

const Pagamento = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  // Função para lidar com a seleção
  const handleSelecao = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  return (
    <div className='container_pagamento'>
        <h1 className='fonte-04 title_pagamento'>FORMA DE <br /> <span className='cor-3'>PAGAMENTO</span></h1>

        <section className='container_main_pagamento'>
            <div className='container container_1 fonte-gerais cor-0'>
                <p>Olá, <span className='cor-3'>Usuário!</span></p>
                <p>Proin sagittis nisl rhoncus mattis. Ut tristique et estas quis ipsum.</p>
            </div>

            <div className='container container_2'>
                <h2 className='fonte-04 title_opcao'>Selecione uma opção de <span className='cor-3'>pagamento:</span></h2>
                <div className='botoess'>
                    <button className={opcaoSelecionada === "pix" ? "selected buttonPagamento pix" : "buttonPagamento pix" } onClick={() => handleSelecao("pix")}>
                    Pix
                    </button>

                    <button className={opcaoSelecionada === "debito" ? "selected buttonPagamento" : "buttonPagamento"} onClick={() => handleSelecao("debito")}>
                    Debito
                    </button>

                    <button className={opcaoSelecionada === "credito" ? "selected buttonPagamento" : "buttonPagamento"} onClick={() => handleSelecao("credito")}>
                    Credito
                    </button>

                    <button className={opcaoSelecionada === "boleto" ? "selected buttonPagamento" : "buttonPagamento"} onClick={() => handleSelecao("boleto")}>
                    Boleto
                    </button>
                </div>
                <p className='cor-0 fonte-gerais'>Você selecionou: <span className='cor-7'>{opcaoSelecionada}</span></p>
            </div>

            <div className='container container_3 fonte-gerais cor-0'>
                <h1 className="confirmar fonte-04 cor-3">CONFIRMAR</h1>
                <p className="assinatura fonte-04">ASSINATURA</p>
                <p className='resumo'>Resumo</p>
                <div className="container_plano">     
                    <div>                       
                        <p>Plano</p>
                        <p>Valor</p>
                    </div>
                    <div>
                        <p className='plano'>{PlanoSelecionado.plano}</p>
                        <p className='plano'>{PlanoSelecionado.valor}</p>
                    </div>
                </div>

                <hr />

                <div className='container_beneficios'>
                    <h3>Benefícios</h3>
                    <p>Todos os benefícios do plano bronze</p>
                    <p>Assistência Nutricional</p>
                    <p>Avaliação física mensal</p>
                    <p>Acesso a 2 modalidades escolhidas</p>
                </div>

                <button className='.fonte-gerais'>FINALIZAR COMPRA</button>
            </div>

        </section>
    </div>
  )
}

export default Pagamento;
