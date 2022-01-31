import styled from "styled-components";
import { motion } from "framer-motion";

// ----- Box Stylings -----

// Contains the entire form into the center of any screen size
export const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
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

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #6c584c;
  z-index: 10;
  margin: 0;
`;

export const SmallText = styled.h5`
  color: #f0ead2;
  font-weight: 500;
  font-size: 15px;
  z-index: 14;
  align-self: center;
  margin: 0;
`;

export const InnerContainer = styled.div`
width: 100%; 
display: flex; 
flex-direction: column;
`

// ----- Form Stylings -----

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// export const MutedLink = styled.a`
//   font-size: 13px;
//   color: #a98467;
//   font-weight: 500;
//   text-decoration: none;
// `;

export const BoldLink = styled.a`
  font-size: 13px;
  color: #adc178;
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(200, 200, 200, 0.3);
  outline: none;
  height: 42px;
  padding: 0 10px;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  /* Add border bottom to the last element */
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #adc178;
  }
`;

export const SbmtButton = styled.button`
  width: 100%;
  padding: 11px 40%; 
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
  z-index: 14;
  
  &:hover { 
    filter: brightness(1.03)
  }
`;
