import React from 'react'
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
 {
    name: "John Miller",
    message: "Excellent service! Very user-friendly and reliable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Turner",
    message: "I love the interface and how smooth everything works!",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "James Anderson",
    message: "Quick setup and great support team. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    name: "Emily Carter",
    message: "It exceeded my expectations. So simple and clean!",
    image: "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    name: "Michael Scott",
    message: "Helped me complete my project efficiently. Great tool!",
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    name: "Ava Williams",
    message: "Beautiful design and easy to use. Loved it!",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const Testmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Maincontain>
      <Subcontains>
        <Topic>
          <Head>What Our Customers Say</Head>
          <Para>Real experiences from our happy clients.</Para>
        </Topic>

        <SliderContainer>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <TestimonialCard key={index}>
                <ProfileImg src={item.image} alt={item.name} />
                <Message>"{item.message}"</Message>
                <Name>- {item.name}</Name>
              </TestimonialCard>
            ))}
          </Slider>
        </SliderContainer>
      </Subcontains>
    </Maincontain>
  );
};

export default Testmonial;
const Maincontain = styled.div`
 
  padding: 50px 0;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
`;

const Subcontains = styled.div`
 
  width: 1200px;
`;

const Topic = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Head = styled.h2`
  font-size: 28px;
  color: #333;
`;

const Para = styled.p`
  font-size: 16px;
  color: #555;
`;

const SliderContainer = styled.div`
    
   
  .slick-dots {
    bottom: -30px;
     gap: 10px;
     
  }
`;

const TestimonialCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
 
 height: 200px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
   gap: 10px;
     transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;
const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
 
`;


const Message = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #333;
`;

const Name = styled.h4`
  margin-top: 20px;
  font-size: 16px;
  color: #666;
`;
