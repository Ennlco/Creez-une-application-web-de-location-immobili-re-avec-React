import { useState } from 'react'
import Chevron from '../../Assets/Chevron.png'
import '../../Styles/Css/Box.css'

function Service(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div>
            <div className="kasa-box">
                <h4>Service</h4>
                <img src={Chevron} alt='icone chevron' className="kasa-btn-open-box" onClick={() => setIsOpen(false)}/>
            </div>
            <div className="kasa-text close">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
        </div>  
    ) : (
        <div>
            <div className="kasa-box">
                <h4>Service</h4>
                <img src={Chevron} alt='icone chevron' className="kasa-btn-close-box" onClick={() => setIsOpen(true)}/>
            </div>
            <div className="kasa-text open">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
        </div> 
    )
}

export default Service