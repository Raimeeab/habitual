import styled from "styled-components";
import Button from '@mui/material/Button';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 1px rgba(15, 15, 15, 0.28);
   /* Full screen - navbar */
  background: rgb(173, 193, 120);
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, .3) 0%,
    rgba(255, 255, 255, .3) 58%
  );
  border-radius: 19px;
  margin: 0 10px;
`;

export const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: inherit;
  background-position: center;
`;

export const Welcome = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #6c584c;
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

export const StyledButton = styled(Button)`
 &&{
  margin: 10px 0;
  color: white;
  font-size: 12px; 
  border: none; 
  border-radius: 10px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: rgb(173, 193, 120);
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, 1) 35%,
    rgba(149, 196, 132, 1) 58%
  );
  z-index: 3;

  &:hover { 
    filter: brightness(1.03)
  }
 }
`