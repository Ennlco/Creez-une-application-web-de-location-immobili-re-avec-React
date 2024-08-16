import '../../Styles/BoxList.css'
import Fiabilite from './Fiabilite'
import Respect from './Respect'
import Service from './Service'
import Securite from './Securite'

function BoxList(){
    return(
        <div className="kasa-box-list">
            <Fiabilite />
            <Respect />
            <Service />
            <Securite />
        </div>
    )
}

export default BoxList