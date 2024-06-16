import '../../style.css'
import '../../../../App.css'

export default function Responsividade(props){
    return(
        <div className='containerOculto'>
            <div className='eachPlano'>
                <div className='tituloDoPlano'>
                    <h2 className='fonte-05 cor-0 titlePlan'>Bronze</h2>
                    <span className='cor-0 fonte-gerais'>R$ 59,90 /mes</span>
                </div>
                <div className='acesso'>
                    <p className='cor-3 fonte-gerais'>Acesso a mais de 20 redes da academia</p>
                </div>
                <div className='desconto'>
                    <p className='cor-0 fonte-gerais line'> Desconto em produtos Growth </p>
                </div>
                <div className='acompanhamento'>
                    <p className='cor-0 fonte-gerais line'> Acompanhamento de personal trainer </p>
                </div>
            </div>
            <div className='eachPlano'>
                <div className='tituloDoPlano'>
                    <h2 className='fonte-05 cor-0 titlePlan'>Prata</h2>
                    <span className='cor-0 fonte-gerais'>R$ 59,90 /mes</span>
                </div>
                <div className='acesso'>
                    <p className='cor-3 fonte-gerais'>Acesso a mais de 20 redes da academia</p>
                </div>
                <div className='desconto'>
                    <p className='cor-0 fonte-gerais line'> Desconto em produtos Growth </p>
                </div>
                <div className='acompanhamento'>
                    <p className='cor-3 fonte-gerais'> Acompanhamento de personal trainer </p>
                </div>
            </div>
            <div className='eachPlano'>
                <div className='tituloDoPlano'>
                    <h2 className='fonte-05 cor-0 titlePlan'> Ouro </h2>
                    <span className='cor-0 fonte-gerais'>R$ 59,90 /mes</span>
                </div>
                <div className='acesso'>
                    <p className='cor-3 fonte-gerais'>Acesso a mais de 20 redes da academia</p>
                </div>
                <div className='desconto'>
                    <p className='cor-3 fonte-gerais'> Desconto em produtos Growth </p>
                </div>
                <div className='acompanhamento'>
                    <p className='cor-3 fonte-gerais'> Acompanhamento de personal trainer </p>
                </div>
            </div>
        </div>
    )
}