import React from "react";
import { Divider, Typography } from "@mui/material";

const SectionHeader = () => {
  return (
    <>
      <Divider style={{ marginTop: '1rem' }} />
      <Typography variant="h1" style={{ marginTop: '2rem' }} gutterBottom>My Github Contributions</Typography>
    </>
  );
};

export default SectionHeader;
