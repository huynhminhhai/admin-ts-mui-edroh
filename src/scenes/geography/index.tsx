import { Box } from "@mui/material"
import Header from "../../components/Header"
import GeographyChart from "../../components/Geo-chart"

const Geography = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="GEOGRAPHY CHART" subTitle="Managing the Geography Chart" />
      </Box>
      <Box height='70vh'>
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography