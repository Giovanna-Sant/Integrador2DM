import './sobre.css'
import grafico from "../../img/Icons/graphic.svg"
import perfil from "../../img/Icons/perfilSobre.svg"
import pessoa from "../../img/Icons/person.svg"

const Sobre = () => {
    return (
        <div className='sobre'>
            <div className='faq'>
                <h1 className='cor-0 fonte-05'>O QUE SOMOS?</h1>
                <p className='cor-0 fonte-gerais'>Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et netus et malesuada fames ac. Laoreet suspendisse interdum consectetur libero id faucibus.uis auctor elit sed vulutate mi sit amet mauris. Interdum velit euismod in pellentesque massa. Ornare arcu dui vivamus arcu felis bibendum. Eros donec ac odio tempor orci</p>
                
                <div className='qualidades'>
                    <span>
                    <img src={grafico} alt="icon de seta subindo para cima"/>
                    <p className='cor-0 fonte-gerais'>60.124 funcionários</p>
                    </span>
                    <span>
                    <img src={perfil} alt="icon de perfil"/>
                    <p className='cor-0 fonte-gerais'>36.878 assinaturas</p>
                    </span>
                    <span>
                    <img src={pessoa} alt="icon de pessoa"/>
                    <p className='cor-0 fonte-gerais'>Referência em Acessibilidade</p>
                    </span>    
                </div>
            </div>

            <div className='faq'>
                <h1 className='cor-0 fonte-05'>QUEM SOMOS?</h1>
                <p className='cor-0 fonte-gerais'>Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Lectus nulla at volutpat diam ut venenatis tellus. Placerat orci nulla pellentesque dignissim enim sit amet. Ut sem viverra aliquet eget sit amet</p>
            
                <div className='devs'>
                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Cauã"/>
                        <p className='cor-0 fonte-gerais'>Cauã Abreu</p>
                    </div>
                </div>
            </div>

            <div className='faq'>
                <h1 className='cor-0 fonte-05'>ONDE ESTAMOS?</h1>
                <p className='cor-0 fonte-gerais'>Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Adipiscing at in tellus integer feugiat. At in tellus integer feugiat. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna.</p>
            </div>
        </div>
    )
}

export default Sobre 