import './sobre.css'
import './slider.css'
import Brands from '../../components/Brands/Brands'
import Flickity from "react-flickity-component";

const Sobre = () => {
    return (
        <div className='sobre'>
            <div className='img-background-sobre'>
            
            <div className='sobreimg'>
                <p className="cor-0 fonte-04 sub">NA GYMRATS PRIORIZAMOS</p>
                <p className="cor-3 fonte-02">A SUA SAÚDE</p>
            </div>
            </div>
            <div className='sobre-cont'>
            <div className='faq'>
                <h1 className='cor-0 fonte-05'>O QUE SOMOS?</h1>
                <p className='cor-0 fonte-gerais'>Nossa missão é ser uma rede de assinatura referência em acessibilidade, cuidado especial com cada cliente e promoção de um estilo de vida saudável. Através de nossos passes de assinatura, garantimos um suporte total para uma vida mais saudável, oferecendo uma ampla rede de academias filiadas conosco. Nosso sistema é procurado por diversas empresas para utilizar nossa assinatura como benefício para seus funcionários. Priorizamos um ambiente acolhedor e inclusivo, incentivando as práticas físicas para todos, colocando em destaque que deficiências nunca serão uma impossibilidade para se exercitar.</p>
                
                <div className='qualidades'>
                    <span>
                    <img src="src/img/Icons/graphic.svg" alt="icon de seta subindo para cima"/>
                    <p className='cor-0 fonte-gerais'>60.124 funcionários</p>
                    </span>
                    <span>
                    <img src="src/img/Icons/perfilSobre.svg" alt="icon de perfil"/>
                    <p className='cor-0 fonte-gerais'>36.878 assinaturas</p>
                    </span>
                    <span>
                    <img src="src/img/Icons/person.svg" alt="icon de pessoa"/>
                    <p className='cor-0 fonte-gerais'>Referência em Acessibilidade</p>
                    </span>    
                </div>
            </div>

            <div className='faq'>
                <h1 className='cor-0 fonte-05'>QUEM SOMOS?</h1>
                <p className='cor-0 fonte-gerais'>A GymRats conta com uma gama diversa de pessoas que possibilitam este projeto estar de pé. Nossos desenvolvedores foram bem escolhidos e trabalharam em equipe para garantir o melhor resultado para você, companheiro da GymRats. Abaixo, conheça um pouco de cada um de toda nossa equipe e <span className='cor-3'>acompanhe nossos desenvolvedores</span> em outros projetos!</p>
            
                <div className='devs'>
                <Flickity elementType="div" options={{ pageDots: true }} reloadOnUpdate>
                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Cauã"/>
                        <p className='cor-0 fonte-gerais'>Cauã Abreu</p>
                        <p className='fonte-gerais'><strong>Tech Lead</strong></p>
                        <p className='cor-0 fonte-gerais'>Além de exercer o cargo de Tech Lead geral, Cauã também faz parte da equipe de  <span className='cor-3'>desenvolvedores front-end</span>. Possui 19 anos e grande afinidade com tecnologias como JavaScript.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>
                    
                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Giovanna"/>
                        <p className='cor-0 fonte-gerais'>Giovanna Santos</p>
                        <p className='fonte-gerais'><strong>Tech Lead</strong></p>
                        <p className='cor-0 fonte-gerais'>Exerce o cargo de <span className='cor-3'>Tech Lead</span> geral, porém também liderou a equipe de Front-End. Desenvolveu a essência do <span className='cor-3'>UX/UI Design</span>, possuindo grande afinidade com a área de front.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>

                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Gabriel"/>
                        <p className='cor-0 fonte-gerais'>Gabriel dos Anjos</p>
                        <p className='fonte-gerais'><strong>Dev Ops</strong></p>
                        <p className='cor-0 fonte-gerais'>Gabriel é extremamente empenhado e, durando o projeto, exerceu o cargo de Dev Ops, que tem como objetivo integrar todas as partes e torná-las funcionais.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>

                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Erick"/>
                        <p className='cor-0 fonte-gerais'>Erick Cardoso</p>
                        <p className='fonte-gerais'><strong>Front-End Dev</strong></p>
                        <p className='cor-0 fonte-gerais'>Além de exercer o cargo de <span className='cor-3'>Tech Lead</span> geral, Cauã também faz parte da equipe de desenvolvedores front-end. Possui 19 anos e grande afinidade com tecnologias como JavaScript.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>

                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Erica"/>
                        <p className='cor-0 fonte-gerais'>Erica Lelis</p>
                        <p className='fonte-gerais'><strong>DataBase Lead</strong></p>
                        <p className='cor-0 fonte-gerais'>Erica desempenha um grande papel no projeto, guiando boa parte do Back-End e da vertente de Banco de dados. Possui um ótimo perfil de liderança e de proatividade.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>

                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - João"/>
                        <p className='cor-0 fonte-gerais'>João Paulo</p>
                        <p className='fonte-gerais'><strong>Back-End Lead</strong></p>
                        <p className='cor-0 fonte-gerais'>Além de exercer o cargo de <span className='cor-3'>Tech Lead</span> geral, Cauã também faz parte da equipe de desenvolvedores front-end. Possui 19 anos e grande afinidade com tecnologias como JavaScript.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>
                    
                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Julia"/>
                        <p className='cor-0 fonte-gerais'>Julia Freitas</p>
                        <p className='fonte-gerais'><strong>DataBase Dev</strong></p>
                        <p className='cor-0 fonte-gerais'>Além de exercer o cargo de <span className='cor-3'>Tech Lead</span> geral, Cauã também faz parte da equipe de desenvolvedores front-end. Possui 19 anos e grande afinidade com tecnologias como JavaScript.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>
                    
                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Leonardo"/>
                        <p className='cor-0 fonte-gerais'>Leonardo G.</p>
                        <p className='fonte-gerais'><strong>Front-End Dev</strong></p>
                        <p className='cor-0 fonte-gerais'>Atuou como desenvolvedor front-end, se dedicando na responsividade das páginas. Tem 19 anos, possui uma boa relação com tecnologias de front, como JavaScript.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>
                    
                    <div className='dev-ind'>
                        <img src="src\img\Devs\caua.jpg" alt="Imagem de perfil - Lívia"/>
                        <p className='cor-0 fonte-gerais'>Lívia Bello</p>
                        <p className='fonte-gerais'><strong>Back-End Dev</strong></p>
                        <p className='cor-0 fonte-gerais'>Lívia integra um ótimo papel na equipe de Back-End, sendo produtiva e proativa. Tem experiências diversas com tecnologia, e possui boa relação com C.</p>
                        <img src="src\img\Icons\github.svg" alt='Icon do GitHub' width="28px"></img>
                    </div>
                </Flickity>
                </div>
            </div>

            <div className='faq'>
                <h1 className='cor-0 fonte-05'>ONDE ESTAMOS?</h1>
                <p className='cor-0 fonte-gerais'>Apesar de estarmos presentes online de forma mundial, precisamos de algum lugar para situar como nossa origem, e foi, no <span className='cor-3'>SENAI Suíço-Brasileira</span> Paulo Ernesto Tolle que nasceu a GymRats, no distrito de Santo Amaro, dentro da grande São Paulo. Através da orientação de professores experientes e do incentivo de colegas e funcionários da escola, construímos e concluímos este projeto integrador.</p>

                <img src="src/img/Local.PNG" alt="Print do Google Maps da area situada"/>
                </div>
                <Brands/>
            </div>
            
        </div>
    )
}

export default Sobre 