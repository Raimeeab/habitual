import styled from "styled-components";
import { motion } from "framer-motion";

// Contains the entire form into the center of any screen size 
export const FormContainer = styled.div`
width: 100%; 
height: 100%; 
display: flex; 
flex-direction: center;
justify-content: center;
`

export const BoxContainer = styled.div`
  align-self: center;
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #f0ead2;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(173, 193, 120);
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, 1) 35%,
    rgba(149, 196, 132, 1) 58%
  );
`;
