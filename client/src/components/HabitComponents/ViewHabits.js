import React from "react";
import { useMutation, useNavigate } from "@apollo/client";
import { COMPLETE_HABIT, REMOVE_HABIT } from "../../utils/mutations";

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
      window.location.assign("/habits");  
      
      console.log(date);
    } catch (error) {
      console.error(error);
    }
  };

  const [deleteHabit] = useMutation(REMOVE_HABIT ); 

  const handleDeleteHabits = async (habitId) => {
    try {

      await deleteHabit({
        variables: {
          _id: habitId,
        }
      });
      // window.location.assign("/habits");
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (e)=> {
    e.preventDefault(); 
   
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
        {habits.map((habit) =>
        // hasBeenCompleted = habnit.compleetedDates has today's date
         (
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
                <StyledDeleteHabit onClick={() => handleDeleteHabits(habit._id)} />
              </IconWrapper>
            </TableCell>
          </TableRow>
        ))}
      </StyledTableBody>
    </>
  );
};

export default ViewHabits;
