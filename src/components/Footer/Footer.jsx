import "./footer.css";
import github from "../../img/Icons/github.svg";
import linktree from "../../img/Icons/linktree.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="right">
                <span id="line-roxa"></span>
                <span id="line-verde"></span>
            </div>

            <div className="flex">
                <img src="src/img/logoFooter.svg" alt="logo footer" id="logo-footer"/>

                <div>
                    <div className="cor-0 fonte-gerais txt">
                        <p>A GymRats foi um projeto pensado e desenvolvido para fins educacionais pela equipe da turma <span className="cor-3">2DM</span> do <span className="cor-3">SENAI Suíço-Brasileiro</span></p>
                        <p>Acompanhe o desenvolvimento de nosso projeto e <span className="cor-4">siga nossos devs!</span></p>
                    </div>

                    <div className="github">
                        <a href="https://github.com/Giovanna-Sant/Integrador2DM.git">
                            <img src={github} className="icon" alt="icon github"/>
                        </a>
                        <p className="cor-0 fonte-gerais">GitHub</p>
                    </div>
                    
                    <div className="linktree">
                        <a>
                            <img src={linktree} className="icon" alt="icon linktree"/>
                        </a>
                        <p className="cor-0 fonte-gerais">Linktree</p>
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