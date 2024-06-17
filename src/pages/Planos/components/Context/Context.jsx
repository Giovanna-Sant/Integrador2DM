import { createContext } from "react"

const Planos = {
    PlanoSelecionado: createContext({
        nome: "",
        mensalidade: "",
        beneficios: ['']
        
    }),
    setBronze: () =>{
        Planos.PlanoSelecionado.nome='Bronze';
        Planos.PlanoSelecionado.mensalidade='55,90';
        Planos.PlanoSelecionado.beneficios= ['Acesso a mais de 20 redes de academia', 'Avaliação física semestral', 'Acesso a uma modalidade escolhida'];
    },
    setPrata: () =>{
        Planos.PlanoSelecionado.nome='Prata';
        Planos.PlanoSelecionado.mensalidade='79,90';
        Planos.PlanoSelecionado.beneficios= ['Todos os benefícios do plano Bronze', 'Assistência nutricional', 'Avaliação física mensal', 'Acesso a duas modalidades escolhidas'];
    },
    setOuro: () =>{
        Planos.PlanoSelecionado.nome='Ouro';
        Planos.PlanoSelecionado.mensalidade='120,90';
        Planos.PlanoSelecionado.beneficios= ['Todos os benefícios dos planos anteriores', 'Desconto em suplementos Growth', 'Acompanhamento de Personal Trainer', 'Acesso a todas as modalidades'];
    }
    
}

export default Planos