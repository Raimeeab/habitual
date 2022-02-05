import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import ViewHabits from "../HabitComponents/ViewHabits";
import AddHabit from "../HabitComponents/AddHabit";

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

import Auth from "../../utils/auth";

const Habits = () => {
  const { loading, data } = useQuery(QUERY_USER);

  // Confirm user is logged in
  const isLoggedIn = Auth.loggedIn();

  // Use optional chaining to check if data exists and if it has a habits property. If not, return an empty array to use.
  const habits = data?.userById.habits || [];


  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);

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
                    <TableCell  style={{fontSize:"1.3rem"}} align="center">Habits</TableCell>
                    <TableCell align="center">Frequency</TableCell>
                    <TableCell align="center">
                      <AddIcon fontSize="large" 
                      style={{pointer:"cursor", color: "#adc178"}}
                      onClick={handleOpenModal} />
                    </TableCell>
                  </TableRow>
                </TableHead>
                {loading ? (
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <DotLoader color={"#adc178"} loading={data} size={70} />
                      </TableCell>
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
      <AddHabit modal={modal} handleCloseModal={handleCloseModal} />
    </>
  );
};
export default Habits;
