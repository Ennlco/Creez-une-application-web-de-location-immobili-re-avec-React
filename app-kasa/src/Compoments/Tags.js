import '../Styles/Tag.css'

function Tags({tagsElement}){
    const tagsList = tagsElement
    return(   
        tagsList.map(()=>
            <div>
                <span className="kasa-name-tag">{tagsList}</span>
            </div>
        )   
            
    )
}

export default Tags;