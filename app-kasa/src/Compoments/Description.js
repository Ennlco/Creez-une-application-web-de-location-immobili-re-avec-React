import '../Styles/Css/BoxInfo.css'
import { useState } from 'react'
import Chevron from '../Assets/Chevron.png'

function Description({descrip}){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div className='kasa-box-content'>
            <div className='kasa-box-title'>
                <span>Description</span>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'onClick={() => setIsOpen(false)}/>
            </div>
        </div>
    ) : (
        <div className='kasa-box-content'>
            <div className='kasa-box-title'>
                <span>Description</span>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-close-box'onClick={() => setIsOpen(true)}/>
            </div>
            <div className='kasa-description-text'>
                <p>{descrip}</p>
            </div>
        </div>
    )
}
export default Description;