import '../Styles/Css/TitleLoc.css'

function TitleLoc({title, lieu}){
    return(
        <div>
            <h2 className='kasa-info-title'>{title}</h2>
            <span className='kasa-info-location'>{lieu}</span>
        </div>
    )
}

export default TitleLoc;