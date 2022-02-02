import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";

import DatePicker from "../DatePicker";

const Habits = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Card
          className="root"
          variant="outlined"
          style={{ marginTop: 35, background: "#f0ead2" }}
        >
          <CardContent>
            <DatePicker />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Habits;
