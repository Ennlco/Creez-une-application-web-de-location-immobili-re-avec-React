import '../../Styles/infoLocation.css'
import {locationList} from '../../Data/LocationList'
import Chevron from '../../Assets/Chevron.png'
import Tags from '../../Compoments/Tags'

function InfoLocation({cover, title, description, name, picture, location, equipments}){
    return(
        <div>
            <div className='kasa-gallery'>
                <img className='kasa-info-cover' src={cover} alt={`${title}`}/>
            </div>
            <div className='kasa-info-base-content'>
                <div className='kasa-title-tags-content'>
                    <div className='kasa-title-content'>
                        <h2 className='kasa-info-title'>{title}</h2>
                        <span className='kasa-info-location'>{location}</span>
                    </div>
                    <div className='kasa-tags-content'>
                        {locationList.map(({tags}) =>
                            <Tags 
                            key={tags}
                            tags={tags}
                            />
                        )}
                    </div>
                </div>
                <div className='kasa-hote-info-content'>
                    <span className='kasa-name-hote'>{name}</span>
                    <img className='kasa-img-hote' src={picture} alt={`${name}`}/>
                </div>
                <div className='kasa-rate'>

                </div>
            </div>
            <div className='kasa-info-plus'>
                <div className='kasa-description-content'>
                    <div className='kasa-description-title'>
                        <span>Description</span>
                        <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'/>
                    </div>
                </div>
                <div className='kasa-equipements-content'>
                    <div className='kasa-equipements-title'>
                        <span>Équipements</span>
                        <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoLocation;