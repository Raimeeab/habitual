import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_HABIT } from "../../utils/mutations";
import { StyledDeleteHabit } from "../styles/Habits.styled";

const DeleteHabit = (habitId) => {
  useMutation(REMOVE_HABIT, {
    update(proxy, result) {

      const data = proxy.readQuery({
        query: REMOVE_HABIT,
      });

      data.removeHabit = [result.data.removeHabit];
    },
    variables: {
      id: habitId,
    },
  });

  return (
    <>
      <StyledDeleteHabit />
    </>
  );
};

export default DeleteHabit;
