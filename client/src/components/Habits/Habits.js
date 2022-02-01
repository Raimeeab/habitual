import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {Card, CardContent, Typography, Container, Grid} from "@mui/material"; 

import DatePicker from "./DatePicker";

const Habits = () => {

  return(
    <>
     <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "#f0ead2" }}
      >
        <CardContent>
          <Typography variant="p">
            Hello "username"
          </Typography>
          <DatePicker />
        </CardContent>
      </Card>
    </Container>
    </>
  )
};

export default Habits;
