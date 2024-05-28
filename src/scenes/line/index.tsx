import { Box } from "@mui/material"
import Header from "../../components/Header"
import LineChart from "../../components/Line-chart"

const Line = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="LINE CHART" subTitle="Managing the Line Chart" />
      </Box>
      <Box height='70vh'>
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line