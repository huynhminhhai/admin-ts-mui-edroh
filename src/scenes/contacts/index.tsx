import { Box, useTheme } from "@mui/material"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { tokens } from "../../theme"
import { mockDataContacts } from "../../data/mockData"
import Header from "../../components/Header"

const Contact = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 0.5
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 0.8
    },
    {
      field: 'zipCode',
      headerName: 'ZipCode',
      flex: 0.5
    },
    {
      field: 'registrarId',
      headerName: 'RegistrarId',
      type: 'number',
      flex: 1,
      align: 'left',
      headerAlign: 'left'
    }
  ]

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="CONTACTS" subTitle="Managing the Contacts Information" />
      </Box>
      <Box
        height='70vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            marginBottom: '5px'
          },
        }}>
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contact