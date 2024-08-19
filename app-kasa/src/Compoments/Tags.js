import '../Styles/Tag.css'
import {locationList} from '../Data/LocationList'

function Tags(){
    const tagsList = locationList[0].tags
    return(   
        tagsList.map(()=>
            <div>
                <span className="kasa-name-tag">{tagsList}</span>
            </div>
        )   
            
    )
}

export default Tags;