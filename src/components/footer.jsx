import React from "react";
import logoFooter from "../img/logoFooter.svg"
import github from "../img/github.svg"
import linktree from "../img/linktree.svg"
import "./style/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div class="right">
                <span id="line-roxa"></span>
                <span id="line-verde"></span>
            </div>

            <div class="flex">
                <img src={logoFooter} alt="logo footer" id="logo-footer"/>

                <div>
                    <div class="txt">
                        <p>A GymRats foi um projeto pensado e desenvolvido para fins educacionais pela equipe da turma <span class="verde">2DM</span> do <span class="verde">SENAI Suíço-Brasileiro</span></p>
                        <p>Acompanhe o desenvolvimento de nosso projeto e <span class="roxo">siga nossos devs!</span></p>
                    </div>

                    <img src={github}   class="icon" alt="icon github"/>
                    <img src={linktree} class="icon" alt="icon linktree"/>
                </div>
            </div>
            <div class="right">
                <p>© GymRats 2024, SENAI Suíço</p>
            </div>
        </div>
    )
}

export default Footer;