import React from "react";
import { useMutation } from "@apollo/client";
import { COMPLETE_HABIT, REMOVE_HABIT } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import { isSameDay } from "date-fns";
import { TableBody, TableRow, TableCell } from "@mui/material";
import {
  StyledTableBody,
  StyledCompleteHabit,
  StyledDeleteHabit,
  IconWrapper,
} from "../styles/Habits.styled";

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
    } catch (error) {
      console.error(error);
    }
  };

  if (!habits.length) {
    console.log("habit length:", habits.length);
    return (
      <TableBody>
        <TableRow>
          <TableCell
            size="sm"
            style={{
              width: 200,
              fontSize: "1rem",
              fontWeight: "500",
              border: "none",
            }}
          >
            No habits added yet
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
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              "background-color": habitCompletedToday(habit)
                ? "#68c098"
                : "none",
            }}
          >
            <TableCell align="center" component="th" scope="habit">
              {habit.name}
            </TableCell>
            <TableCell align="center">{habit.frequency}</TableCell>
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
