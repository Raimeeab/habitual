import React from "react";
import { useMutation, useNavigate } from "@apollo/client";
import { COMPLETE_HABIT, REMOVE_HABIT } from "../../utils/mutations";
import { isSameDay } from "date-fns";
import { TableBody, TableRow, TableCell } from "@mui/material";
import {
  BodyText,
  StrikeBodyText,
  StyledTableBody,
  StyledCompleteHabit,
  StyledDeleteHabit,
  IconWrapper,
  HeaderText,
} from "../styles/Habits.styled";
import { QUERY_USER } from "../../utils/queries";

const ViewHabits = ({ habits }) => {
  const [updateHabit] = useMutation(COMPLETE_HABIT, {
    refetchQueries: [QUERY_USER],
  });

  const handleCompleteHabits = async (habitId) => {
    try {
      const date = await updateHabit({
        variables: {
          id: habitId,
        },
      });

      console.log(date);
    } catch (error) {
      console.error(error);
    }
  };

  const [deleteHabit] = useMutation(REMOVE_HABIT, {
    refetchQueries: [QUERY_USER],
  });

  const habitCompletedToday = (habit) => {
    const today = new Date();
    const completedToday = habit.completedHabits.some((completion) => {
      const completionDate = new Date(+completion.completedAt);
      return isSameDay(today, completionDate);
    });
    console.log("habit", habit._id, completedToday);
    return completedToday;
  };

  const handleDeleteHabits = async (habitId) => {
    try {
      await deleteHabit({
        variables: {
          _id: habitId,
        },
      });
      // window.location.assign("/habits");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e) => {
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
        {habits.map((habit) => (
          // hasBeenCompleted = habnit.compleetedDates has today's date
          <TableRow
            key={habit._id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              "background-color": habitCompletedToday(habit) ? "red" : "none",
            }}
          >
            <TableCell align="center" component="th" scope="habit">
              <BodyText>{habit.name}</BodyText>
            </TableCell>
            <TableCell align="center">
              {habitCompletedToday(habit) ? (
                <StrikeBodyText style>{habit.frequency}{" "}per week</StrikeBodyText>
              ) : (
                <BodyText style>{habit.frequency}</BodyText>
              )}
            </TableCell>
            <TableCell align="center">
              <IconWrapper>
                <StyledCompleteHabit
                  onClick={() => handleCompleteHabits(habit._id)}
                />{" "}
                <StyledDeleteHabit
                  onClick={() => handleDeleteHabits(habit._id)}
                />
              </IconWrapper>
            </TableCell>
          </TableRow>
        ))}
      </StyledTableBody>
    </>
  );
};

export default ViewHabits;
