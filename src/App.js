import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { Card, Grid } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

import SectionHeader from "../src/components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  chartCard: {
    padding: "40px",
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const App = () => {
  const classes = useStyles();
  // Sample data
  const data = [
    { x: 1, y: 27 },
    { x: 15, y: 56 },
    { x: 30, y: 129 }
  ];
  return (
    <>
      <SectionHeader />

      <Card className={classes.chartCard} >
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="y" argumentField="x" />
        </Chart>
      </Card>
    </>
  );
};

export default App;
