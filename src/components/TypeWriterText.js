import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  align-self: flex-start;
  color: ${(props) => props.theme.text};
  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: yellow;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  text-transform: capitalize;
  font-weight: 600;
  width: 80%;
  margin: 1rem;
  align-self: flex-start;
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;
const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new area cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">Dyno!</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Collectible Items</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Ape Killer</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored of Apecs? Try Somthing New</SubTitle>
      <ButtonContainer>
        {/* <Button text={"Explore more"} link={"/about"} /> */}
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
