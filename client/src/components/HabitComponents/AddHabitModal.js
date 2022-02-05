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

  // , {
  //   update(cache, { data: { addHabit } }) {
  //     try {
  //       const { habits } = cache.readQuery({ query: QUERY_USER});

  //       cache.writeQuery({
  //         query: QUERY_USER,
  //         data: { habits: [newHabit, ...habits]},
  //       });
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  // }

  const handleChange = (e) => {
    const name = e.target.name;
    console.log("name", name);
    const value = e.target.value;
    console.log("value", value);
    setNewHabit({
      ...newHabit,
      [name]: value,
    });
  };

  const [addHabit, error] = useMutation(ADD_HABIT, {
    update(proxy, result) {
      console.log(result); 

      const data = proxy.readQuery({
        query: QUERY_USER
      }); 

      data.addHabit = [result.data.addHabit, ...data.addHabit]; 
      proxy.writeQuery({query: QUERY_USER, data})
      setNewHabit({name: "", frequency: "", journal: ""})
    }
  });

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      await addHabit({
        variables: { ...newHabit },
      });
      console.log(addHabit);
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

export default AddHabitModal;
