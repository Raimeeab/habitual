import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
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

const AddHabit = ({ modal, handleCloseModal }) => {
  const navigate = useNavigate();
  const [newHabit, setNewHabit] = useState({
    name: "",
    frequency: 1,
    journal: "",
  });

  const [addHabit, error] = useMutation(ADD_HABIT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHabit({
      ...newHabit,
      [name]: value,
    });
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      await addHabit({
        variables: { ...newHabit },
      });
      console.log(addHabit)
      navigate("/habits");
      console.log(
        "checking if addHabits mutation is called",
        JSON.stringify.data
      );
    } catch {
      console.error(e);
      console.log(e);
    }
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

export default AddHabit;
