import { useState } from "react";

const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="carousel-left-right" transform="translate(-182 -465)"> <g id="blocks-walls" transform="translate(25.003 -131)"> <rect id="left" class="cls-1" width="20" height="4" transform="translate(160.997 600) rotate(90)"/> <rect id="bottom" class="cls-1" width="19.997" height="4" transform="translate(161 620)"/> <rect id="right" class="cls-1" width="20" height="4" transform="translate(184.997 600) rotate(90)"/> <rect id="top" class="cls-1" width="19.997" height="4" transform="translate(161 596)"/> </g> <g id="arrow" class="cls-2" transform="translate(188.596 487.268) rotate(-90)"> <path class="cls-3" d="M9.579,1.4l.628,1,5.061,8.1v1.9h-14v-1.9L7.661,1.4Z"/> <path class="cls-4" d="M 8.530654907226562 5.385342597961426 L 5.7083740234375 9.404240608215332 L 11.04168224334717 9.404240608215332 L 8.530654907226562 5.385342597961426 M 7.660551071166992 1.404240608215332 L 9.579140663146973 1.404240608215332 L 10.2071008682251 2.406840324401855 L 15.26812076568604 10.50699043273926 L 15.26812076568604 12.40424060821533 L 1.268120765686035 12.40424060821533 L 1.268120765686035 10.50699043273926 L 7.660551071166992 1.404240608215332 Z"/> </g> </g></svg>;
const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="blocks-walls"> <rect id="left" class="cls-1" width="20" height="4" transform="translate(28 4) rotate(90)"/> <rect id="bottom" class="cls-1" width="19.997" height="4" transform="translate(4 24)"/> <rect id="right" class="cls-1" width="20" height="4" transform="translate(4 4) rotate(90)"/> <rect id="top" class="cls-1" width="19.997" height="4" transform="translate(4)"/> </g> <g id="arrow" class="cls-2" transform="translate(9 21) rotate(-90)"> <path class="cls-3" d="M8.311,11l.628-1L14,1.9V0H0V1.9L6.392,11Z"/> <path class="cls-4" d="M 7.262531280517578 7.018893718719482 L 9.7735595703125 3 L 4.440252780914307 3 L 7.262531280517578 7.018893718719482 M 8.311019897460938 11 L 6.392429828643799 11 L -8.881784197001252e-16 1.897250056266785 L -8.881784197001252e-16 -8.881784197001252e-16 L 14 -8.881784197001252e-16 L 14 1.897250056266785 L 8.311019897460938 11 Z"/> </g></svg>;

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='modal-content-body-product-detail-image-gallery-slider'>
            <div onClick={goToPrevious} className="modal-content-body-product-detail-image-gallery-arrow-left">
                {arrowLeft}
            </div>
            <div onClick={goToNext} className="modal-content-body-product-detail-image-gallery-arrow-right">
                {arrowRight}
            </div>

            <img width='200' src={slides[currentIndex].url} alt=''/>
        </div>
    );
};

export default ImageSlider;
