import '../Styles/Css/BoxInfo.css'
import { useState } from 'react'
import Chevron from '../Assets/Chevron.png'

function Equipement({equip}){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div className='kasa-box-content'> 
            <div className='kasa-box-title'>
                <span>Équipements</span>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'onClick={() => setIsOpen(false)}/>
            </div>
            <div className='kasa-equipements-text close'>
                {equip.map((e, i) => 
                <p key={i} className='kasa-text-equipement'>{e}</p>
                )}
            </div>
        </div>
    ) : (
        <div className='kasa-box-content'> 
            <div className='kasa-box-title'>
                <span>Équipements</span>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-close-box'onClick={() => setIsOpen(true)}/>
            </div>
            <div className='kasa-equipements-text open'>
                {equip.map((e, i) => 
                <p key={i} className='kasa-text-equipement'>{e}</p>
                )}
            </div>
        </div>
    )
}
export default Equipement;