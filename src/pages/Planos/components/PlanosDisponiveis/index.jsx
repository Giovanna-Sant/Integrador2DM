import '../../style.css'
import '../../../../App.css'
import check from '../../../../img/check.png'
import notCheck from '../../../../img/false.png'
import Responsividade from '../Responsividade'
import { Link } from "react-router-dom"
import Planos from '../Context/Context'

export default function PlanosDisponiveis(){

    return(
        <>
            <div className='planosContainer'>
                <Responsividade></Responsividade>
                <div className='titulosPlanosContainer'>
                    <div className='titulosPlanos'>
                        <h2 className='fonte-05 cor-0 titlePlan'>BRONZE</h2>
                        <p className='cor-0 fonte-gerais planPrice'> <span className='fonteMenor'>R$</span> 55,90 <span className='fonteMenor'>/mes</span></p>
                    </div>
                    <div className='titulosPlanos'>
                        <h2 className='fonte-05 cor-0 titlePlan'>Prata</h2>
                        <p className='cor-0 fonte-gerais planPrice'> <span className='fonteMenor'>R$</span> 79,90 <span className='fonteMenor'>/mes</span></p>
                    </div>
                    <div className='titulosPlanos'>
                        <h2 className='fonte-05 cor-0 titlePlan'>Ouro</h2>
                        <p className='cor-0 fonte-gerais planPrice'> <span className='fonteMenor'>R$</span> 120,90 <span className='fonteMenor'>/mes</span></p>
                    </div>
                </div>
                <hr className='separator'></hr>
                <div className='beneficiosContainer'>
                    <div className='beneficioAcesso'>
                        <div className='titleBenef'>
                            <p className='cor-0 fonte-gerais ocultar'> Acesso a mais de 20 redes da academia </p>
                        </div>
                        <div className='yesOrNo'>
                            <img src={check}/>
                            <img src={check}/>
                            <img src={check}/>
                        </div>
                    </div>
                    <div className='beneficioDesconto'>
                        <div className='titleBenef'>
                            <p className='cor-0 fonte-gerais ocultar'> Desconto em produtos Growth </p>
                        </div>
                        <div className='yesOrNo'>
                            <img src={notCheck}/>
                            <img src={notCheck}/>
                            <img src={check}/>
                        </div>
                    </div>
                    <div className='beneficioAcompanhamento'>
                        <div className='titleBenef'>
                            <p className='cor-0 fonte-gerais ocultar'> Acompanhamento de personal trainer </p>
                        </div>
                        <div className='yesOrNo'>
                            <img src={notCheck}/>
                            <img src={check}/>
                            <img src={check}/>
                        </div>
                    </div>
                </div>
                <div className='containerBtn'>
                    <div className='botoesPlanos'>
                        <Link className='btnAssinar cor-7 fonte-03 link' to='/pagamento' onClick={Planos.setBronze}>assinar</Link>
                        <Link className='btnAssinar cor-7 fonte-03 link' to='/pagamento' onClick={Planos.setPrata}>assinar</Link>
                        <Link className='btnAssinar cor-7 fonte-03 link' to='/pagamento' onClick={Planos.setOuro}>assinar</Link>
                    </div>
                </div>
            </div>
        </>  
    );
}
