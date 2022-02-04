import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
// import DatePicker from "../HabitComponents/DatePicker";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

const Habits = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const isLoggedIn = Auth.loggedIn();
  const habitData = data?.getHabits || [];
  const createData = (name, frequency, isComplete) => {
    return (name, frequency, isComplete);
  };
  // TODO: get habits using query & have it render on the page
  const getHabits = [
    createData("Go for a run", 4, ""),
    createData("Meditate", 3, ""),
    createData("Read", 5, ""),
  ];
  return (
    <>
      <Container maxWidth="sm">
        {isLoggedIn ? (
          <Card
            className="root"
            variant="outlined"
            style={{ marginTop: 35, background: "#f0ead2" }}
          >
            <CardContent>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Habits</TableCell>
                    <TableCell align="center">Frequency</TableCell>
                    <TableCell align="center">
                      <AddIcon fontSize="md" />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getHabits.map((habit, index) => (
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
              </Table>
            </CardContent>
          </Card>
        ) : (
          <Card
            className="root"
            variant="outlined"
            style={{ marginTop: 35, background: "#f0ead2" }}
          >
            <CardContent>You must be logged in to view habits.</CardContent>
          </Card>
        )}
      </Container>
    </>
  );
};
export default Habits;
