import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BackgroundImage = styled.div`
  padding-top: 100px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: inherit;
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

export const RegisterBtn = styled.button`
  padding: 10px 60px;
  width: 100%;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: rgb(173, 193, 120);
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, 1) 35%,
    rgba(149, 196, 132, 1) 58%
  );
`;

