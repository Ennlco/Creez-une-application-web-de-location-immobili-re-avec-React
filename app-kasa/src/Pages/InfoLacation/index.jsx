import '../../Styles/infoLocation.css'
import { useState } from 'react'
import {locationList} from '../../Data/LocationList'
import Chevron from '../../Assets/Chevron.png'
import Tags from '../../Compoments/Tags'

function InfoLocation({cover, title, description, name, picture, location, equipments}){
    const [isOpen, setIsOpen] = useState(true)
    const equip = locationList[0].equipments
    console.log(equip);
    
    
    return isOpen ? (
        <div className='kasa-all-info'>
            <div className='kasa-gallery'>
                <img className='kasa-info-cover' src={locationList[0].cover} alt={`${locationList[0].title}`}/>
            </div>
            <div className='kasa-info-base-content'>
                <div className='kasa-title-tags-content'>
                    <div className='kasa-title-content'>
                        <h2 className='kasa-info-title'>{locationList[0].title}</h2>
                        <span className='kasa-info-location'>{locationList[0].location}</span>
                    </div>
                    <div className="kasa-tag-content">
                        <Tags />
                    </div>
                    
                </div>
                <div className='kasa-hote-info-content'>
                    <div className='kasa-hote'>
                        <span className='kasa-name-hote'>{locationList[0].host.name}</span>
                        <img className='kasa-img-hote' src={locationList[0].host.picture} alt={`${locationList[0].name}`}/>
                    </div>
                    <div className='kasa-rate'>

                    </div>
                </div>
            </div>
            <div className='kasa-info-plus'>
                <div className='kasa-description-content'>
                    <div className='kasa-description-title'>
                        <span>Description</span>
                        <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'onClick={() => setIsOpen(false)}/>
                    </div>
                </div>
                <div className='kasa-equipements-content'>
                    <div className='kasa-equipements-title'>
                        <span>Équipements</span>
                        <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'onClick={() => setIsOpen(false)}/>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='kasa-all-info'>
            <div className='kasa-gallery'>
                <img className='kasa-info-cover' src={locationList[0].cover} alt={`${locationList[0].title}`}/>
            </div>
            <div className='kasa-info-base-content'>
                <div className='kasa-title-tags-content'>
                    <div className='kasa-title-content'>
                        <h2 className='kasa-info-title'>{locationList[0].title}</h2>
                        <span className='kasa-info-location'>{locationList[0].location}</span>
                    </div>
                    <div className="kasa-tag-content">
                        <Tags />
                    </div>
                    
                </div>
                <div className='kasa-hote-info-content'>
                    <div className='kasa-hote'>
                        <span className='kasa-name-hote'>{locationList[0].host.name}</span>
                        <img className='kasa-img-hote' src={locationList[0].host.picture} alt={`${locationList[0].name}`}/>
                    </div>
                    <div className='kasa-rate'>

                    </div>
                </div>
            </div>
            <div className='kasa-info-plus'>
                <div className='kasa-description-content'>
                    <div className='kasa-description-title'>
                        <span>Description</span>
                        <img src={Chevron} alt='icone chevron' className='kasa-btn-close-box'onClick={() => setIsOpen(true)}/>
                    </div>
                    <div className='kasa-description-text'>
                        <p>{locationList[0].description}</p>
                    </div>
                </div>
                <div className='kasa-equipements-content'>
                    <div className='kasa-equipements-title'>
                        <span>Équipements</span>
                        <img src={Chevron} alt='icone chevron' className='kasa-btn-close-box'onClick={() => setIsOpen(true)}/>
                    </div>
                    <div className='kasa-equipements-text'>
                        <p>{locationList[0].equipments}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoLocation;