import React, { useState } from "react";
import ViewHabits from "../HabitComponents/ViewHabits";
import {
  Card,
  CardContent,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DotLoader from "react-spinners/DotLoader";
// import DatePicker from "../HabitComponents/DatePicker";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

const Habits = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const isLoggedIn = Auth.loggedIn();
  const habits = data?.getHabits || [];

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
                {loading ? (
                  <TableBody>
                    <TableRow>
                      <DotLoader color={"#adc178"} loading={data} size={70} />
                    </TableRow>
                  </TableBody>
                ) : (
                  <ViewHabits habits={habits}></ViewHabits>
                )}
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
