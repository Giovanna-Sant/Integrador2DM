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
                    <div className="txt">
                        <p>A GymRats foi um projeto pensado e desenvolvido para fins educacionais pela equipe da turma <span className="verde">2DM</span> do <span className="verde">SENAI Suíço-Brasileiro</span></p>
                        <p>Acompanhe o desenvolvimento de nosso projeto e <span className="roxo">siga nossos devs!</span></p>
                    </div>

                    <img src={github}   className="icon" alt="icon github"/>
                    <img src={linktree} className="icon" alt="icon linktree"/>
                </div>
            </div>
            <div className="right">
                <p>© GymRats 2024, SENAI Suíço</p>
            </div>
        </div>
    )
}

export default Footer;