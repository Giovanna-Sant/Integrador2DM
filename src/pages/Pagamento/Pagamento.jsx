import { useState, useEffect } from 'react';
import './Pagamento.css';
import Planos from '../Planos/components/Context/Context';
import { useNavigate } from 'react-router-dom';
import api from '../../config/axios';
import Loading from '../../components/Loading/Loading';
const Pagamento = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('tokennz')
  const [isLoading, setLoading] = useState(true)
  const [nome, setNome] = useState('')
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [compraRealizada, setCompraRealizada] = useState(false);

  
  const handleSelecao = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  const getNomeUser = async() => {
    try {
      const user = await api.get(`/user/${id}`, {headers: {Authorization: `bearer ${token}`}})
      setNome(user.data.nome)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleFinalizarCompra = async () => {
    if (!opcaoSelecionada) {
      alert('Por favor, selecione uma opção de pagamento.');
      return;
    }

    if (confirm('Tem certeza que deseja finalizar a compra?')) {
      try {
        await api.patch(`/user/${id}`, {plano: {
          nome: Planos.PlanoSelecionado.nome,
          mensalidade: Planos.PlanoSelecionado.mensalidade,
          beneficios: Planos.PlanoSelecionado.beneficios
        }}, {
          headers: {
            Authorization: ` bearer ${token}`
          }
        })
      } catch (error) {
        console.log(error.message)
      }
      setConfirmado(true);
      setTimeout(() => {
        setCompraRealizada(true);
        alert('Pagamento realizado com sucesso.')
        navigate('/home')
      }, 3000); // Simulando um atraso para o alerta de sucesso
    }

  };

  useEffect(() =>{
    getNomeUser()
    setTimeout(()=>{
      setLoading(false)
    },1500)
  }, [])

  return (
    <div>
    {isLoading ? (
      <div className='loading-container'>
      <Loading />
      </div>
    ) : (
      
      
      <div className='container_pagamento'>
    <h1 className='fonte-04 title_pagamento'>
      FORMA DE <br /> <span className='cor-3'>PAGAMENTO</span>
    </h1>

    <section className='container_main_pagamento'>
      <div className='container container_1 fonte-gerais cor-0'>
        <p>Olá <span className='cor-3'>{nome}</span>!</p>
        <p>
          Aqui você está nos últimos passos para começar sua trajetória em busca do shape inexplicável.
          Por favor, selecione a forma de pagamento e em seguida, finalize a compra do seu <span className='cor-3'>plano</span>!
        </p>
      </div>

      <div className='container container_2'>
        <h2 className='fonte-04 title_opcao'>
          Selecione uma opção de <span className='cor-3'>pagamento:</span>
        </h2>
        <div className='botoess'>
          <button className={opcaoSelecionada === 'pix' ? 'selected buttonPagamento pix' : 'buttonPagamento pix'} onClick={() => handleSelecao('Pix')}>
            Pix
          </button>

          <button className={opcaoSelecionada === 'debito' ? 'selected buttonPagamento' : 'buttonPagamento'} onClick={() => handleSelecao('Débito')}>
            Debito
          </button>

          <button className={opcaoSelecionada === 'credito' ? 'selected buttonPagamento' : 'buttonPagamento'} onClick={() => handleSelecao('Crédito')}>
            Credito
          </button>

          <button className={opcaoSelecionada === 'boleto' ? 'selected buttonPagamento' : 'buttonPagamento'} onClick={() => handleSelecao('Boleto')}>
            Boleto
          </button>
        </div>
        <p className='cor-0 fonte-gerais'>Você selecionou: <span className='cor-7'>{opcaoSelecionada}</span></p>
      </div>

      <div className='container container_3 fonte-gerais cor-0'>
        <h1 className='confirmar fonte-04 cor-3'>CONFIRMAR</h1>
        <p className='assinatura fonte-04'>ASSINATURA</p>
        <p className='resumo'>Resumo</p>
        <div className='container_plano'>
          <div>
            <p>Plano</p>
            <p>Valor</p>
          </div>
          <div>
            <p className='plano'>{Planos.PlanoSelecionado.nome}</p>
            <p className='plano'>{Planos.PlanoSelecionado.mensalidade}</p>
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

        {confirmado && !compraRealizada && (
          <div className='alerta'>
            <p>Compra sendo processada...</p>
          </div>
        )}

        {compraRealizada && (
          <div className='alerta sucesso'>
            <p>Compra realizada com sucesso!</p>
          </div>
        )}

        {!confirmado && (
          <button className='buttonFinalizar' onClick={handleFinalizarCompra}>
            FINALIZAR COMPRA
          </button>
        )}
      </div>
      </section>
      </div>
  
  )}
  </div>
  );
};

export default Pagamento;
