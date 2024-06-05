import './brands.css'

const Brands = () => {
    return (
        <div className="brand-cont">
        <p className="cor-0 fonte-subtitulos">Temos uma relação de confiança com nossos parceiros!</p>
            <div className='marcas'>
                <a href="https://www.gsuplementos.com.br" target="_blank">
                <img src="src\img\Marcas\growth.png"   alt="logo Growth" />
                </a>
                <a href="https://www.nike.com/"        target="_blank">
                <img src="src\img\Marcas\nike.png"     alt="logo Nike" />
                </a>
                <a href="https://www.smartfit.com.br/" target="_blank">
                <img src="src\img\Marcas\smartfit.png" alt="logo SmartFit" />
                </a>
                <a href="https://insiderstore.com.br/" target="_blank">
                <img src="src\img\Marcas\insider.png"  alt="logo Insider" />
                </a>
            </div>
        </div>
    )
}

export default Brands