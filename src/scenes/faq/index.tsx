import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ExpandMore } from "@mui/icons-material"
import Header from "../../components/Header"


const FAQ = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="FAQ" subTitle="Managing the Faq" />
      </Box>
      <Box pb='40px'>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Importan question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Importan question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Importan question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Importan question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Importan question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Importan question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default FAQ