import styled from "styled-components";

import { Container, Card, TableBody, Table } from "@mui/material";

import DotLoader from "react-spinners/DotLoader";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// Icon stylings
export const StyledDotLoader = styled(DotLoader)`
  align-items: center;
  position: absolute;
  padding: 40px 40px;
`;

export const StyledAddIcon = styled(AddIcon)`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: #6c584c;
  font-size: large;

  &:hover {
    font-size: 30px;
  }
`;

export const StyledContainer = styled(Container)`
  background-color: transparent;
`;

export const StyledCompleteHabit = styled(DoneIcon)`
  cursor: pointer;
  font-size: large;
`;

export const StyledDeleteHabit = styled(DeleteForeverIcon)`
  cursor: pointer;
  font-size: large;
  /* color: #ee2424; */
`;

// Card stylings
export const StyledCard = styled(Card)`
  box-shadow: 11.9px 11.9px 5.3px rgba(0, 0, 0, 0.008),
    26.5px 26.5px 17.9px rgba(0, 0, 0, 0.023),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`;

export const StyledTableBody = styled(TableBody)`
  line-height: 1.24;
`;

export const BodyText = styled.p`
  font-family: "Titillium Web", "Roboto Mono", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif monospace;
  text-align: left;
  font-size: 1rem;
  padding: 0;
`;

export const StrikeBodyText = styled.p`
  font-family: "Titillium Web", "Roboto Mono", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif monospace;
  text-align: left;
  font-size: 1rem;
  text-decoration: line-through;
`;

export const HeaderText = styled.h3`
  font-size: large;
  letter-spacing: 0.01em;
  font-weight: 600;
  color: black;
  border-radius: 5px;
`;

export const IconWrapper = styled.div`
  text-align: center;
  font-size: 1rem;
`;

export const StyledTable = styled(Table)`
  background: transparent;
  border: 0.5px;
  border-radius: 10px;
  padding: 5px;
  margin-top: 130px;
  background: rgb(243, 255, 241);
  background: linear-gradient(
    0deg,
    rgba(243, 255, 241, 0.1783088235294118) 0%,
    rgba(243, 255, 241, 1) 99%
  );
  box-shadow: 0px 0.7px 1.4px -7px rgba(0, 0, 0, 0.034),
    0.1px 1.6px 3.4px -7px rgba(0, 0, 0, 0.065),
    0.1px 2.9px 6.4px -7px rgba(0, 0, 0, 0.094),
    0.2px 5px 11.4px -7px rgba(0, 0, 0, 0.124),
    0.4px 9px 21.3px -7px rgba(0, 0, 0, 0.159),
    1px 20px 51px -7px rgba(0, 0, 0, 0.23);

  @media (max-width: 760px) {
    margin-top: 170px;
  }
`;
