import React from "react";
import DeleteHabit from "./DeleteHabit";
import { useMutation } from "@apollo/client";
import { COMPLETE_HABIT } from "../../utils/mutations";

import { TableBody, TableRow, TableCell } from "@mui/material";
import {
  BodyText,
  StyledTableBody,
  StyledCompleteHabit,
  StyledDeleteHabit,
  IconWrapper,
  HeaderText,
} from "../styles/Habits.styled";

const ViewHabits = ({ habits }) => {
  const [updateHabit] = useMutation(COMPLETE_HABIT);

  const handleCompleteHabits = async (habitId) => {
    try {
      const date = await updateHabit({
        variables: {
          id: habitId,
        }
      });

      console.log(date);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e)=> {
    e.preventDefault(); 
    window.location.assign("/habits"); 
  };

  if (!habits.length) {
    console.log("habit length:", habits.length);
    return (
      <TableBody>
        <TableRow>
          <TableCell>
            <HeaderText>No habits added yet</HeaderText>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  return (
    <>
      <StyledTableBody>
        {habits.map((habit) => (
          <TableRow
            key={habit._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="habit">
              <BodyText>{habit.name}</BodyText>
            </TableCell>
            <TableCell align="center">
              <BodyText>{habit.frequency}</BodyText>
            </TableCell>
            <TableCell align="center">
              <IconWrapper>
                <StyledCompleteHabit
                  onClick={() => handleCompleteHabits(habit._id)}
                />{" "}
                {/* <StyledDeleteHabit /> */}
                <DeleteHabit habitId={habit.id} onClick={handleDelete}/>
              </IconWrapper>
            </TableCell>
          </TableRow>
        ))}
      </StyledTableBody>
    </>
  );
};

export default ViewHabits;
