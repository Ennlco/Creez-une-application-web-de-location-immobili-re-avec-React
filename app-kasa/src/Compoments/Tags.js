import '../Styles/Css/Tag.css'

function Tags({tagsElement}){
    return(   
        tagsElement.map((e, i) =>
            <span key={i} className="kasa-name-tag">{e}</span>
        )   
            
    )
}

export default Tags;