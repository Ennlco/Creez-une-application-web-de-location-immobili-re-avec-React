import '../../Styles/Css/infoLocation.css'
import {locationList} from '../../Data/LocationList'
import Carousel from '../../Compoments/Carousel'
import TitleLoc from '../../Compoments/TitleLoc'
import Tags from '../../Compoments/Tags'
import Hote from '../../Compoments/Hote'
import Rate from '../../Compoments/Rate'
import Description from '../../Compoments/Description'
import Equipement from '../../Compoments/Equipement'



function InfoLocation(){
    const i = 0

    const imgCarousel = locationList[i].pictures
    const titre = locationList[i].title
    const lieu = locationList[i].location
    const tagspage = locationList[i].tags
    const hoteName = locationList[i].host.name
    const hoteImg = locationList[i].host.picture
    const rateStar = locationList[i].rating
    const equip = locationList[i].equipments
    const descrip = locationList[i].description
    
    
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