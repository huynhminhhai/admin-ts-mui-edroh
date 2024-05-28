import { Box } from "@mui/material"
import BarChart from "../../components/Bar-chart"
import Header from "../../components/Header"

const Bar = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="BAR CHART" subTitle="Managing the Bar Chart" />
      </Box>
      <Box height='70vh'>
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar