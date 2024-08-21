import '../Styles/BoxInfo.css'
import { useState } from 'react'
import Chevron from '../Assets/Chevron.png'

function Equipement({equip}){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div className='kasa-equipements-content'> 
            <div className='kasa-equipements-title'>
                <span>Équipements</span>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'onClick={() => setIsOpen(false)}/>
            </div>
        </div>
    ) : (
        <div className='kasa-equipements-content'> 
            <div className='kasa-equipements-title'>
                <span>Équipements</span>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-close-box'onClick={() => setIsOpen(true)}/>
            </div>
            <div className='kasa-equipements-text'>
                {equip.map((e) => 
                <p className='kasa-text-equipement'>{e}</p>
                )}
            </div>
        </div>
    )
}
export default Equipement;