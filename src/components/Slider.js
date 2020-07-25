import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function renderImage(item) {
    return (
        <div className='image-gallery-image'>
            {
                item.imageSet ?
                    <picture>
                        {
                            item.imageSet.map((source, index) => (
                                <source
                                    key={index}
                                    media={source.media}
                                    srcSet={source.srcSet}
                                    type={source.type}
                                />
                            ))
                        }
                        <img
                            alt={item.originalAlt}
                            src={item.original}
                        />
                    </picture>
                    :
                    <img
                        src={item.original}
                        alt={item.originalAlt}
                        srcSet={item.srcSet}
                        sizes={item.sizes}
                        title={item.originalTitle}
                    />
            }

            {
                item.description &&
                <span className='image-gallery-description'>
                    {item.description}
                </span>
            }
        </div>

    );
}
const aboutPage = {
    className: '',
    showThumbnails: false,
    showFullscreenButton: false,
    showPlayButton: false,
    autoPlay: true,
    showNav: false
}

const Slider = ({ array, display, isAboutPage }) => {
    return (
        <section className={isAboutPage ? aboutPage.className : 'section'}>
            {display === 'slide' ?
                <ImageGallery 
                    lazyLoad={true} 
                    showBullets={true}
                    showThumbnails={isAboutPage ? aboutPage.showThumbnails : true}
                    showFullscreenButton={isAboutPage ? aboutPage.showFullscreenButton : true}
                    showPlayButton={isAboutPage ? aboutPage.showPlayButton : true}
                    autoPlay={isAboutPage ? aboutPage.autoPlay : false}
                    showNav={isAboutPage ? aboutPage.showNav : true}
                    renderItem={renderImage} 
                    items={array} 
                />
                :
                <div className='void'></div>
            }
        </section>
    );
}


Slider.propTypes = {
    array: PropTypes.array,
    display: PropTypes.string,
    classs: PropTypes.string,
}

export default Slider