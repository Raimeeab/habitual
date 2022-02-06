import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import ViewHabits from "../HabitComponents/ViewHabits";
import AddHabitModal from "../HabitComponents/AddHabitModal";
import bgVid from "../../assets/background.mp4";
import { VideoBackground } from "../styles/Home.styled";
import {
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import {
  StyledContainer,
  StyledDotLoader,
  StyledAddIcon,
  StyledCard,
  HeaderText
} from "../styles/Habits.styled";
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
      <StyledContainer maxWidth="sm">
        <VideoBackground loop autoPlay>
          <source src={bgVid} type="video/mp4" />
        </VideoBackground>
        {isLoggedIn ? (
          <StyledCard
            className="root"
            variant="outlined"
            style={{ marginTop: 35 }}
          >
            <CardContent>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left"><HeaderText>Habits</HeaderText></TableCell>
                    <TableCell align="left"><HeaderText>Frequency</HeaderText></TableCell>
                    <TableCell align="center">
                      <StyledAddIcon onClick={handleOpenModal} />
                    </TableCell>
                  </TableRow>
                </TableHead>
                {loading ? (
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <StyledDotLoader
                          color={"#adc178"}
                          loading={data}
                          size={70}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ) : (
                  <ViewHabits habits={habits}></ViewHabits>
                )}
              </Table>
            </CardContent>
          </StyledCard>
        ) : (
          <StyledCard
            className="root"
            variant="outlined"
            style={{ marginTop: 35 }}
          >
            <CardContent>You must be logged in to view habits.</CardContent>
          </StyledCard>
        )}
      </StyledContainer>
      <AddHabitModal modal={modal} handleCloseModal={handleCloseModal} />
    </>
  );
};
export default Habits;
