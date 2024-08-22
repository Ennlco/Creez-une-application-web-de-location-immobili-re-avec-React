import '../Styles/Css/Hote.css'

function Hote({name, profilIng}){
    return(
        <div className='kasa-hote'>
            <span className='kasa-name-hote'>{name}</span>
            <img className='kasa-img-hote' src={profilIng} alt={`${profilIng} ${name}`}/>
        </div>
    )
}
export default Hote;