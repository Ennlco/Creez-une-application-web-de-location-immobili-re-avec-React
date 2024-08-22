import '../Styles/Css/CardsList.css'
import {locationList} from '../Data/LocationList'
import Card from '../Compoments/Card'



function CardsList(){
    return (
        <div className="kasa-content-list">
            {locationList.map(({ id, title, cover}) =>
                <Card
                key={id}
                title={title}
                cover={cover}
                />
            )}
        </div>
    )

}

export default CardsList;