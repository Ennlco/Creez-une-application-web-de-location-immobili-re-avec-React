import React, { useState } from 'react';
import '../Styles/Css/Carousel.css'
import Chevron from '../Assets/Chevron.png'

function Carousel({images}) {

    const CarouselIndicators = ({ images, activeIndex, onClick }) => {
        return (
          <div className="carousel__indicators">
            {images.map((_, index) => (
            <span
            key={index}
            className={`carousel__indicators ${index === activeIndex ? 'active' : 'inactive'} `}
            onClick={() =>(index)}
            >{index}/{images.length - 1}</span>  
            ))}
          </div>
        );
    };

    const [activeIndex, setActiveIndex] = useState(0)
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='kasa-gallery'>
            <button onClick={prevSlide} className='kasa-carousel-btn btn-prev'>
                <img src={Chevron} alt='icone bouton précedent' className='kasa-img-btn-carousel'/>
            </button>
            <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} className='kasa-carousel-img' />
            <button onClick={nextSlide} className='kasa-carousel-btn btn-next'>
                <img src={Chevron} alt='icone bouton suivant' className='kasa-img-btn-carousel'/>
            </button>
            <CarouselIndicators
                images={images}
                activeIndex={activeIndex}
                onClick={goToSlide}
            />
        </div>
    )
}

export default Carousel;

