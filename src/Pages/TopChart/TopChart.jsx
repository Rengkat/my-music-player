import { Box } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import TableData from "../../Component/TableData";
import { useGetTopChartsQuery } from "../../Redux/api/Api";
import { useSelector, useDispatch } from "react-redux";

import { BsBarChartLineFill } from "react-icons/all";

const TopChart = () => {
  const { data, error, isLoading } = useGetTopChartsQuery();

  return (
    <Box bg="#121212" color="white" pb="7rem">
      <Hero
        name="Top charts"
        temTyle="none"
        icon={<BsBarChartLineFill />}
        subTitle="Top chart songs"
      />
      <TableData date="DATE RELEASED" data={data} display="none" />
    </Box>
  );
};

export default TopChart;
