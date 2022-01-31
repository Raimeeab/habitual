import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: inherit;
  padding-top: 250px;
  padding-right: 20px;
  min-height: 200%;
`;


export const Welcome = styled.h1`
  font-size: 30px;
  font-weight: 600px;
  line-height: 1.24;
  color: #6c584c;
  z-index: 10;
  margin: 0;
`;

export const Text = styled.h5`
  font-size: 20px;
  text-align: center;
  line-height: 1;
  color: #6c584c;
`;
