import '../Styles/Css/Tag.css'

function Tags({tagsElement}){
    return(   
        tagsElement.map((e) =>
            <div>
                <span className="kasa-name-tag">{e}</span>
            </div>
        )   
            
    )
}

export default Tags;