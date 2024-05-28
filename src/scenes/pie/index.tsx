import { Box } from "@mui/material"
import Header from "../../components/Header"
import PieChart from "../../components/Pie-chart"

const Pie = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="PIE CHART" subTitle="Managing the Pie Chart" />
      </Box>
      <Box height='70vh'>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie