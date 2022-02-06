import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { ADD_HABIT } from "../../utils/mutations";
import { Modal } from "@mui/material";
import { Marginer } from "../../utils/Marginer";
import {
  ModalWrapper,
  InnerContainer,
  FormContainer,
  FormWrapper,
  Input,
  AddBtn,
  MutedText,
} from "../styles/Form.styled";

const AddHabitModal = ({ modal, handleCloseModal }) => {

  const navigate = useNavigate(); 

  const [newHabit, setNewHabit] = useState({
    name: "", 
    frequency: "", 
    journal: "",
  }); 

  console.log("-----ADDHABITMODAL FUNC")
  console.log("USESTATE, newHabit:", newHabit); 

  const handleChange = (e) => {
    const {name, value} = e.target; 

    console.log("-----HANDLE CHANGE FUNCTION");
    console.log("name", name); 
    console.log("value", value); 
    setNewHabit({
      ...newHabit, 
      [name]: value
    });
  };

  const [addHabit, {error}] = useMutation(ADD_HABIT, {
    update(proxy, result) {
      console.log("---- USE MUTATION, ADDHABIT FUNC, ")
      console.log("RESULT", result);
      console.log("PROXY", proxy)

      const data = proxy.readQuery({
        query: ADD_HABIT
      });
      console.log( "DATA", data)
      data.addHabit = [result.data.addHabit, ...data.addHabit]
      proxy.writeQuery({query: ADD_HABIT, data })
      console.log("data.userById", data.userById)
      setNewHabit({
        name: "", 
        frequency: "", 
        journal: ""
      })
      navigate("/habits")
    }
  }
  ); 

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    addHabit({variables: {
      ...newHabit
    }})
  };


  return (
    <>
      <Modal
        open={modal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalWrapper>
          <InnerContainer>
            <FormContainer onSubmit={handleModalSubmit}>
              <Marginer direction="vertical" margin={5} />
              <FormWrapper>
                <MutedText>Habit name:</MutedText>
                <Input
                  type="habit"
                  name="name"
                  placeholder="'Meditate'"
                  value={newHabit.name}
                  onChange={handleChange}
                />
                <MutedText>Times per week:</MutedText>
                <Input
                  type="number"
                  name="frequency"
                  placeholder="1-7"
                  value={newHabit.frequency}
                  onChange={handleChange}
                />
                <MutedText>How will this habit improve your life?</MutedText>
                <Input
                  type="text"
                  name="journal"
                  placeholder="Journal"
                  value={newHabit.journal}
                  onChange={handleChange}
                />
                <Marginer direction="vertical" margin="1.6em" />
                <AddBtn type="submit">Add</AddBtn>
                {error && <MutedText>{error.message}</MutedText>}
              </FormWrapper>
            </FormContainer>
          </InnerContainer>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default AddHabitModal;
