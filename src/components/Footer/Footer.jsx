import "./footer.css"

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

<<<<<<< HEAD
                    <a href="https://github.com/Giovanna-Sant/Integrador2DM.git">
                        <img src="src/img/Icons/github.svg"   className="icon" alt="icon github"/>
                    </a>
                    <a>
                        <img src="src/img/Icons/linktree.svg" className="icon" alt="icon linktree"/>
                    </a>
=======
                    <div className="github">
                        <img src={github}   className="icon" alt="icon github"/>
                        <p className="cor-0 fonte-gerais">GitHub</p>
                    </div>
                    
                    <div className="linktree">
                        <img src={linktree} className="icon" alt="icon linktree"/>
                        <p className="cor-0 fonte-gerais">Linktree</p>
                    </div>
>>>>>>> origin/gabriel
                </div>
            </div>
            <div className="cor-0 fonte-gerais right">
                <p>© GymRats 2024, SENAI Suíço</p>
            </div>
        </div>
    )
}

export default Footer;