import './brands.css'

import growth   from "../../img/Marcas/growth.png"
import nike     from "../../img/Marcas/nike.png"
import smartfit from "../../img/Marcas/smartfit.png"
import insider  from "../../img/Marcas/insider.png"

const Brands = () => {
    return (
        <div className="brand-cont">
        <p className="cor-0 fonte-subtitulos">Temos uma relação de confiança com nossos parceiros!</p>
            <div className='marcas'>
                <a href="https://www.gsuplementos.com.br" target="_blank">
                <img src={growth}   alt="logo Growth" />
                </a>
                <a href="https://www.nike.com/"        target="_blank">
                <img src={nike}     alt="logo Nike" />
                </a>
                <a href="https://www.smartfit.com.br/" target="_blank">
                <img src={smartfit} alt="logo SmartFit" />
                </a>
                <a href="https://www.insiderstore.com/" target="_blank">
                <img src={insider}  alt="logo Insider" />
                </a>
            </div>
        </div>
    )
}

export default Brands
