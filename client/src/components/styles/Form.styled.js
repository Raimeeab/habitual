import styled from "styled-components";

// Allows for transition between the Login/ Signup forms
import { motion } from "framer-motion";

// ----- Box Stylings -----

// Contains the entire form into the center of any screen size
export const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  margin-top: 60px;
`;

export const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fffff2;
  box-shadow: 0px 0.7px 1.4px -7px rgba(0, 0, 0, 0.034),
    0.1px 1.6px 3.4px -7px rgba(0, 0, 0, 0.065),
    0.1px 2.9px 6.4px -7px rgba(0, 0, 0, 0.094),
    0.2px 5px 11.4px -7px rgba(0, 0, 0, 0.124),
    0.4px 9px 21.3px -7px rgba(0, 0, 0, 0.159),
    1px 20px 51px -7px rgba(0, 0, 0, 0.23);
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
  background: rgb(174, 213, 120);
  background: linear-gradient(
    90deg,
    rgba(174, 213, 120, 1) 5%,
    rgba(160, 209, 143, 1) 26%,
    rgba(104, 192, 152, 1) 64%,
    rgba(54, 177, 104, 1) 87%,
    rgba(90, 156, 108, 1) 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
  color: white;
  font-weight: 400;
  font-size: 12px;
  z-index: 14;
  /* align-self: center; */
  margin: 0;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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
  padding: 0 10px;
`;

export const MutedText = styled.p`
  margin: 0 8px;
  font-size: 13px;
  color: #a98467;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: #68c098;
  font-weight: 500;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #6c584c;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  outline: none;
  height: 42px;
  padding: 0 10px;
  margin-top: 0.1px;
  border-bottom: 1.4px solid transparent;
  transition: all 250ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #68c098;
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
  background: rgb(174, 213, 120);
  background: linear-gradient(
    90deg,
    rgba(174, 213, 120, 1) 5%,
    rgba(160, 209, 143, 1) 26%,
    rgba(104, 192, 152, 1) 64%,
    rgba(54, 177, 104, 1) 87%,
    rgba(90, 156, 108, 1) 100%
  );
  z-index: 14;

  &:hover {
    filter: brightness(1.03);
  }
`;

// ----- Habit modal Stylings -----

export const ModalWrapper = styled.div`
  position: absolute;
  border: 1px solid #68c098;
  border-radius: 5px;
  padding: 10px 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  /* background-color: transparent; */
  background: rgb(243, 255, 241);
  background: linear-gradient(
    0deg,
    rgba(243, 255, 241, 0.1783088235294118) 0%,
    rgba(243, 255, 241, 1) 99%
  );
  /* box-align: center; */

  @media (max-width:460px) {
    right: -31%;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #68c098;
  }
`;

export const AddBtn = styled.button`
  width: 100%;
  font-weight: 300;
  cursor: pointer;
  color: white;
  border: 2px white;
  border-radius: 10px;
  background: rgb(174, 213, 120);
  background: linear-gradient(
    90deg,
    rgba(174, 213, 120, 1) 5%,
    rgba(160, 209, 143, 1) 26%,
    rgba(104, 192, 152, 1) 64%,
    rgba(54, 177, 104, 1) 87%,
    rgba(90, 156, 108, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const ModalText = styled.h5`
  margin: 7px 2px;
  font-size: 20px;
  /* color: white; */
  color: black;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
`;
