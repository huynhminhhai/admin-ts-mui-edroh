import { Box, Button, TextField } from "@mui/material"
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"
import { IProfileForm } from "../../interfaces/User"
import { phoneRegExp } from "../../constants/regexs"

const initialValues: IProfileForm = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
}

const profileFormSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup.string().email('Email is invalid').required('This field is required'),
  contact: yup.string().matches(phoneRegExp, 'Phone number is invalid').required('This field is required'),
  address1: yup.string().required('This field is required'),
  address2: yup.string().required('This field is required'),
})

const Form = () => {

  const isNonMobile = useMediaQuery('(min-width: 600px)')

  const handleSubmitForm = (values: any) => {
    console.log(values)
  }

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="CREATE USER" subTitle="Managing the Profile Form" />
      </Box>
      <Box>
        <Formik
          onSubmit={handleSubmitForm}
          initialValues={initialValues}
          validationSchema={profileFormSchema}
        >
          {
            props => (
              <form onSubmit={props.handleSubmit}>
                <Box
                  display='grid'
                  gap='30px'
                  gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                  sx={{
                    '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
                  }}
                >
                  <TextField
                    sx={{ gridColumn: 'span 2' }}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.firstName}
                    name="firstName"
                    error={!!props.touched.firstName && !!props.errors.firstName}
                    helperText={props.touched.firstName && props.errors.firstName}
                  />
                  <TextField
                    sx={{ gridColumn: 'span 2' }}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.lastName}
                    name="lastName"
                    error={!!props.touched.lastName && !!props.errors.lastName}
                    helperText={props.touched.lastName && props.errors.lastName}
                  />
                  <TextField
                    sx={{ gridColumn: 'span 2' }}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.email}
                    name="email"
                    error={!!props.touched.email && !!props.errors.email}
                    helperText={props.touched.email && props.errors.email}
                  />
                  <TextField
                    sx={{ gridColumn: 'span 2' }}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contact Number"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.contact}
                    name="contact"
                    error={!!props.touched.contact && !!props.errors.contact}
                    helperText={props.touched.contact && props.errors.contact}
                  />
                  <TextField
                    sx={{ gridColumn: 'span 2' }}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 1"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.address1}
                    name="address1"
                    error={!!props.touched.address1 && !!props.errors.address1}
                    helperText={props.touched.address1 && props.errors.address1}
                  />
                  <TextField
                    sx={{ gridColumn: 'span 2' }}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 2"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    value={props.values.address2}
                    name="address2"
                    error={!!props.touched.address2 && !!props.errors.address2}
                    helperText={props.touched.address2 && props.errors.address2}
                  />
                </Box>
                <Box display='flex' justifyContent='end' mt='20px'>
                  <Button type="submit" color="secondary" variant="contained">
                    Create New User
                  </Button>
                </Box>
              </form>
            )
          }
        </Formik>
      </Box>
    </Box>
  )
}

export default Form