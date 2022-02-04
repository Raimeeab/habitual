import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const ViewHabits = ({ habits }) => {
  if (!habits.length) {
    return (
      <TableBody>
        <TableRow>No habits yet</TableRow>
      </TableBody>
    );
  }
  return (
    <>
      <TableBody>
        {habits.map((habit, index) =>  (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="habit">
              {habit.name}
            </TableCell>
            <TableCell align="right">{habit.frequency}</TableCell>
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
