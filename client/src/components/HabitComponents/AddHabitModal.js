import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_HABIT } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import { Modal } from "@mui/material";
import { Marginer } from "../../utils/Marginer";
import {
  ModalWrapper,
  InnerContainer,
  FormContainer,
  FormWrapper,
  Input,
  AddBtn,
  ModalText,
} from "../styles/Form.styled";

const AddHabitModal = ({ modal, handleCloseModal }) => {
  const [newHabit, setNewHabit] = useState({
    name: "",
    frequency: "",
    journal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewHabit({
      ...newHabit,
      [name]: value,
    });
  };

  const [addHabit, { error }] = useMutation(ADD_HABIT, {
    refetchQueries: [
      QUERY_USER, // DocumentNode object parsed with gql
    ],
  });

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    await addHabit({
      variables: {
        ...newHabit,
      },
    });
    handleCloseModal();
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
                <ModalText>Habit name:</ModalText>
                <Input
                  type="habit"
                  name="name"
                  placeholder="'Meditate'"
                  value={newHabit.name}
                  onChange={handleChange}
                />
                <ModalText>Times per week:</ModalText>
                <Input
                  type="number"
                  name="frequency"
                  placeholder="1-7"
                  value={newHabit.frequency}
                  onChange={handleChange}
                />
                <ModalText>How will this habit improve your life?</ModalText>
                <Input
                  type="text"
                  name="journal"
                  placeholder="Journal"
                  value={newHabit.journal}
                  onChange={handleChange}
                />
                <Marginer direction="vertical" margin="1.6em" />
                <AddBtn type="submit">Add</AddBtn>
                {error && <ModalText>{error.message}</ModalText>}
              </FormWrapper>
            </FormContainer>
          </InnerContainer>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default AddHabitModal;
