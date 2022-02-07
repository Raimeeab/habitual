import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import ViewHabits from "../HabitComponents/ViewHabits";
import AddHabitModal from "../HabitComponents/AddHabitModal";
import bgImage from "../../assets/background-image.png";
import { Marginer } from "../../utils/Marginer";

import { BackgroundImg } from "../styles/Home.styled";
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
  StyledTableRow,
  HeaderText,
  StyledTable,
  TableCellHeaders
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
        <BackgroundImg src={bgImage} />
        {isLoggedIn ? (
          <StyledTable
            disabled
            sx={{ minWidth: 200, backgroundColor: "transparent" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell size="sm" style={{ width: 100 }} align="center">
                  <HeaderText>Habits</HeaderText>
                </TableCell>
                <TableCell size="sm" style={{ width: 100 }} align="center">
                  <HeaderText>Frequency</HeaderText>
                </TableCell>
                <TableCell size="sm" style={{ width: 100 }} align="center">
                  <HeaderText><StyledAddIcon onClick={handleOpenModal} /></HeaderText>
                </TableCell>
              </TableRow>
            </TableHead>
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell>
                    <StyledDotLoader
                      color={"#68c098"}
                      loading={data}
                      size={70}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <ViewHabits habits={habits}></ViewHabits>
            )}
          </StyledTable>
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
