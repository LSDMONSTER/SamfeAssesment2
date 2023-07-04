import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Chart from "./Chart";
import DashBoardBox from "@/components/DashBoardBox";

type Props = {};

const gridTemplateLargeScreens = `
  "a b c "
  "a b c "
  "a b c "
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j" 
  "j"
`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  const chartData = [
    { name: "Jan", EUR: 1.12, GBP: 0.86, YEN: 0.45, USD: 1.22 },
    { name: "Feb", EUR: 1.20, GBP: 0.89, YEN: 0.40, USD: 1.25 },
    { name: "Mar", EUR: 1.30, GBP: 0.92, YEN: 0.65, USD: 1.28 },
    { name: "Apr", EUR: 1.40, GBP: 0.94, YEN: 0.70, USD: 1.30 },
    { name: "May", EUR: 1.22, GBP: 0.96, YEN: 0.80, USD: 1.32 },
    { name: "Jun", EUR: 1.24, GBP: 0.98, YEN: 0.90, USD: 1.34 },
  ];

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <DashBoardBox gridArea="a">
        <Chart data={chartData} />
      </DashBoardBox>
      <DashBoardBox gridArea="b">
        <Chart data={chartData} />
      </DashBoardBox>
      <DashBoardBox gridArea="c">
        <Chart data={chartData} />
      </DashBoardBox>
      <DashBoardBox gridArea="d">
        <Chart data={chartData} />
      </DashBoardBox>
      <DashBoardBox gridArea="e"></DashBoardBox>
      <DashBoardBox gridArea="f"></DashBoardBox>
      <DashBoardBox gridArea="g"></DashBoardBox>
      <DashBoardBox gridArea="h"></DashBoardBox>
      <DashBoardBox gridArea="i"></DashBoardBox>
      <DashBoardBox gridArea="j"></DashBoardBox>
    </Box>
  );
};

export default Dashboard;
