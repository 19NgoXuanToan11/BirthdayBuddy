import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
    width: 100vw; 
    margin: 0 auto; 
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 0; 
    overflow: hidden;
`;

const CarouselItem = styled.div`
    position: relative;
    width: 100%;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); 
        z-index: 2; 
    }

    img {
        width: 100%;
        display: block;
        border-radius: 0;
    }
`;

const images = ['/src/SWP_RESOURCE/pictures/carousel_1.png',
            '/src/SWP_RESOURCE/pictures/carousel_5(update).png',
            '/src/SWP_RESOURCE/pictures/carousel_3.png']

const IconBody = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%; 
    overflow: hidden; 
    background: url("/src/SWP_RESOURCE/pictures/z5120957459050_426078a0d112eb6024986efd8aea3ff3.jpg");
    background-size: cover; 
    background-position: center; 
`;


const TitleBody = styled.h1`
    position: absolute;
    width: 1199px;
    height: 115px;
    left: 362px;
    top: 420px;
    font-family: "Itim";
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 115px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
`;

const Content = styled.h2`
    display: inline-block;
    position: absolute;
    width: 650px;
    height: 180px;
    left: 525px;
    top: 550px;
    font-family: "Itim";
    font-style: normal;
    font-size: 24px;
    line-height: 50px;
    color: #ffffff;
    text-indent: 30px;
`;

const ActionButton = styled.button`
    position: absolute;
    top: 650px;
    left: 50%;
    transform: translateX(-50%);
    background: #cfa924;
    font-family: "Itim", cursive;
    font-size: 20px;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 40px;
    cursor: pointer;

    &:hover {
        background: #816916;
        color: white;
        color: white; 
        transition: background 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                    color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
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
            <IconBody/>
            <TitleBody>
                Lưu giữ cột mốc tuổi thơ            
            </TitleBody>
            <Content>
                Hãy để chúng tôi lo và con bạn chỉ việc tận hưởng niềm vui
            </Content>
            <ActionButton role="button" aria-pressed="false">
                Đặt tiệc ngay
            </ActionButton>
        </CarouselContainer>
    );
}

export default GuestHomeTemplate;
