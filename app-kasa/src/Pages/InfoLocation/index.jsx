import '../../Styles/Css/infoLocation.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { locationList } from '../../Data/LocationList';
import Carousel from '../../Compoments/Carousel';
import TitleLoc from '../../Compoments/TitleLoc';
import Tags from '../../Compoments/Tags';
import Hote from '../../Compoments/Hote';
import Rate from '../../Compoments/Rate';
import Description from '../../Compoments/Description';
import Equipement from '../../Compoments/Equipement';

function InfoLocation() {
    const { id } = useParams();
    const navigate = useNavigate();

    const location = locationList.find(loc => loc.id === id);

    useEffect(() => {
        if (!location) {
            navigate('/error'); 
        }
    }, [location, navigate]);

   
    useEffect(() => {
        if (location) {
            document.title = `Info Location - ${location.title}`;
        }
    }, [location]);


    if (!location) {
        return null; 
    }

   
    const imgCarousel = location.pictures;
    const titre = location.title;
    const lieu = location.location;
    const tagspage = location.tags;
    const hoteName = location.host.name;
    const hoteImg = location.host.picture;
    const rateStar = location.rating;
    const equip = location.equipments;
    const descrip = location.description;

    return (
        <div className='kasa-all-info'>
            <Carousel key={imgCarousel} images={imgCarousel} />
            <div className='kasa-info-base-content'>
                <div className='kasa-title-tags-content'>
                    <div className='kasa-title-content'>
                        <TitleLoc title={titre} lieu={lieu} />
                    </div>
                    <div className="kasa-tag-content">
                        <Tags tagsElement={tagspage} />
                    </div>
                </div>
                <div className='kasa-hote-info-content'>
                    <div className='kasa-hote'>
                        <Hote name={hoteName} profilIng={hoteImg} />
                    </div>
                    <div className='kasa-rate'>
                        <Rate key={rateStar} rateValue={rateStar} />
                    </div>
                </div>
            </div>
            <div className='kasa-info-plus'>
                <Description descrip={descrip} />
                <Equipement equip={equip} />
            </div>
        </div>
    );
}

export default InfoLocation;