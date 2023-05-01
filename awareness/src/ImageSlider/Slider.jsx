import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "./data";
import { Link, useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -152px;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  position: relative;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 60%;
  margin: 20px;
`;
const Title = styled.h1`
  margin: -286px 27px 32px 4px;
  font-size: 40px;
  color: purple;
`;
const Desc = styled.p`
  margin: 30px 0px;
  font-size: 37px;
  font-weight: 1000;
  font-family: "Josefin Sans";
  letter-spacing: 3px;
  color: #60afc9;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Slider = () => {
  const navigate = useNavigate();
  const handleButtonClick = (key) => {
    if (key === 1) {
      let path = "/drugaddiction";
      navigate(path);
    }
    if (key === 2) {
      let path = "/physicalfitness";
      navigate(path);
      //   //e.preventDefault();
    }
    if (key === 3) {
      let path = "/mentalhealth";
      navigate(path);
      //e.preventDefault();
    }
    if (key === 5) {
      let path = "/foodhabbits";
      navigate(path);
      //e.preventDefault(); // Do some stuffs navigate("/next-page");
    }
  };
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} style={{ backgroundColor: item.bg }}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={() => handleButtonClick(item.id)}>
                Know More
              </Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
