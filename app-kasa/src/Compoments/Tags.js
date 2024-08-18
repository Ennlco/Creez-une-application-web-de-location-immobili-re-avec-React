import '../Styles/Tag.css'

function Tags({tags}){
    return(
        <div className="kasa-tag-content">
            <span className="kasa-name-tag">{tags}</span>
        </div>
    )
}

export default Tags;