import '../Styles/Rate.css'
import StarActive from '../Assets/star-active.png'

function Rate({ rateValue }){
    const range = [1, 2, 3, 4, 5]

    return(
        <div className='kasa-star-content'>
            {range.map((rangeElem) => 
            rateValue >= rangeElem ? (
                <img key={rangeElem.toString()} className='kasa-star-active' src={StarActive} alt='icone étoile active' />
                ) : null
            )}
        </div>
    )
}

export default Rate;