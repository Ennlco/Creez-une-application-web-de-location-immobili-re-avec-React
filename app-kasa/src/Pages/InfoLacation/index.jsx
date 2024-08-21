import '../../Styles/infoLocation.css'
import {locationList} from '../../Data/LocationList'
import Carousel from '../../Compoments/Carousel'
import TitleLoc from '../../Compoments/TitleLoc'
import Tags from '../../Compoments/Tags'
import Hote from '../../Compoments/Hote'
import Rate from '../../Compoments/Rate'
import Description from '../../Compoments/Description'
import Equipement from '../../Compoments/Equipement'


function InfoLocation(){
    
    const imgCarousel = locationList[0].pictures
    const titre = locationList[0].title
    const lieu = locationList[0].location
    const tagspage = locationList[0].tags
    const hoteName = locationList[0].host.name
    const hoteImg = locationList[0].host.picture
    const rateStar = locationList[0].rating
    const equip = locationList[0].equipments
    const descrip = locationList[0].description
    
    
    return(
        <div className='kasa-all-info'>
            <Carousel images={imgCarousel}/>
            <div className='kasa-info-base-content'>
                <div className='kasa-title-tags-content'>
                    <div className='kasa-title-content'>
                        <TitleLoc 
                            title={titre}
                            lieu={lieu}
                        />
                    </div>
                    <div className="kasa-tag-content">
                        <Tags tagsElement={tagspage} />
                    </div>
                </div>
                <div className='kasa-hote-info-content'>
                    <Hote 
                        name={hoteName}
                        profilIng={hoteImg}
                    />
                    <Rate rateValue={rateStar}/>
                </div>
            </div>
            <div className='kasa-info-plus'>
                <Description descrip={descrip}/>
                <Equipement equip={equip}/>
            </div>
        </div>
    )
}

export default InfoLocation;