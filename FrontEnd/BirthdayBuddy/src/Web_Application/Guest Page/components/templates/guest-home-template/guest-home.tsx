import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    overflow: hidden;
`;

const CarouselItem = styled.div`
    min-width: 300px;
    margin: 16px;
    position: relative;
    img {
        width: 100%;
        display: block;
        border-radius: 10px;
    }
`;

const images = ['/src/SWP_RESOURCE/pictures/carousel_1.png',
                '/src/SWP_RESOURCE/pictures/carousel_5(update).png',
                '/src/SWP_RESOURCE/pictures/carousel_3.png']

const Header = styled.h1`
    text-align: center;
    color: #333;
    font-size: 1.2rem;
    line-height: 1.4;
    margin: 20px auto;
    max-width: 1200px;
    padding: 0 20px;
    word-wrap: break-word; 
    box-sizing: border-box;
`;

const ActionButton = styled.button`
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    display: block;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0986e0;
    }
`;

function GuestHomeTemplate() {
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                dots: false
                }
            }
        ]
    };

    return (
        <CarouselContainer>
            <Slider {...settings} aria-label="Image Carousel">
                {images.map((img, index) => (
                    <CarouselItem key={index}>
                        <img src={img} alt={`Carousel item ${index}`} />
                    </CarouselItem>
                ))}
            </Slider>
            <Header>
                Một sinh nhật thật ý nghĩa và đặc biệt để đánh dấu cột mốc quan trọng của các thiên thần nhỏ luôn là điều bố mẹ băn khoăn?
                <br/>
                Với sự đa dạng trong các gói tiệc sinh nhật, BirthdayBuddy hứa hẹn sẽ mang đến cho các thiên thần nhỏ một bữa tiệc đầy bất ngờ và tràn ngập những khoảnh khắc đáng nhớ.
            </Header>
            <ActionButton role="button" aria-pressed="false">
                LIÊN HỆ ĐẶT TIỆC
            </ActionButton>
        </CarouselContainer>
    );
}

export default GuestHomeTemplate;
