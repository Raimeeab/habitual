import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const ViewHabits = ({ habits }) => {
  if (!habits.length) {
    console.log("habit length:", habits.length)
    return (
      <TableBody>
        <TableRow><TableCell>No habits added yet</TableCell></TableRow>
      </TableBody>
    );
  }
  return (
    <>
      <TableBody>
        {habits.map((habit) =>  (
          <TableRow
            key={habit._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="habit">
              {habit.name}
            </TableCell>
            <TableCell align="center">{habit.frequency}{" "}a week</TableCell>
            <TableCell align="center">
              <DoneIcon fontSize="md" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ViewHabits;
