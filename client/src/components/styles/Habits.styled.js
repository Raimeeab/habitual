import styled from "styled-components";

import {
  Container,
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell, 
} from "@mui/material";

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
  border: none;
  border-radius: 5px;
  box-shadow: #6c584c;
  font-size: large;
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, 1) 35%,
    rgba(149, 196, 132, 1) 58%
  );
  background-color: #6c584c;

  &:hover {
    filter: brightness(1.03);
  }
`;

export const StyledContainer = styled(Container)`
background-color: none;
`

export const StyledCompleteHabit = styled(DoneIcon)`
  cursor: pointer;
  font-size: large;
`;

export const StyledDeleteHabit = styled(DeleteForeverIcon)`
  cursor: pointer;
  font-size: large;
  color: #ee2424;
`;

// Card stylings
export const StyledCard = styled(Card)`
  background-color: none;
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
`;

export const HeaderText = styled.h3`
  font-family: "Titillium Web", "Roboto Mono", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif monospace;
    text-transform: uppercase;
    font-size: large;
    letter-spacing: 0.01em;
`;

export const IconWrapper = styled.div`
text-align: center;
font-size: 1rem;
`
