
import "./footer.css"   

import logoFooter from "../../img/logoFooter.svg"
import github from "../../img/Icons/github.svg"
import linktree from "../../img/Icons/linktree.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="right">
                <span id="line-roxa"></span>
                <span id="line-verde"></span>
            </div>

            <div className="flex">
                <img src={logoFooter} alt="logo footer" id="logo-footer"/>

                <div>
                    <div className="cor-0 fonte-gerais txt">
                        <p>A GymRats foi um projeto pensado e desenvolvido para fins educacionais pela equipe da turma <span className="cor-3">2DM</span> do <span className="cor-3">SENAI Suíço-Brasileiro</span></p>
                        <p>Acompanhe o desenvolvimento de nosso projeto e <span className="cor-4">siga nossos devs!</span></p>
                    </div>

                    <div className="github">
                        <a href="https://github.com/Giovanna-Sant/Integrador2DM">
                            <img src={github}   className="icon" alt="icon github"/>
                            <p className="cor-0 fonte-gerais">GitHub</p>
                        </a>
                    </div>
                    
                    <div className="linktree">
                        <a href="https://linktr.ee/Gymrats99">
                        <img src={linktree} className="icon" alt="icon linktree"/>
                        <p className="cor-0 fonte-gerais">Linktree</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="cor-0 fonte-gerais right">
                <p>© GymRats 2024, SENAI Suíço</p>
            </div>
        </div>
    )
}

export default Footer;

