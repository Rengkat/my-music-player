import { Box } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import TableData from "../../Component/TableData";

import { BsBarChartLineFill } from "react-icons/all";

const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const TopChart = () => {
  return (
    <Box bg="#121212" color="white" pb="7rem">
      <Hero
        name="Top charts"
        temTyle="none"
        icon={<BsBarChartLineFill />}
        subTitle="Top chart songs"
      />
      <TableData date="DATE RELEASED" data={arr} display="none" />
    </Box>
  );
};

export default TopChart;
