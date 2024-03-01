import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./introduction.scss"; // Import SCSS file

function Introduction() {
    const images = [
        "/src/SWP_RESOURCE/pictures/carousel_1.png",
        "/src/SWP_RESOURCE/pictures/carousel_5(update).png",
        "/src/SWP_RESOURCE/pictures/carousel_3.png",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings} aria-label="Image Carousel">
                {images.map((img, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={img} alt={`Carousel item ${index}`} />
                    </div>
                ))}
            </Slider>
            <h1 className="title-body">Lưu giữ cột mốc tuổi thơ</h1>
            <button
                className="action-button"
                role="button"
                aria-pressed="false"
            >
                Đặt tiệc ngay
            </button>
        </div>
    );
}

export default Introduction;
