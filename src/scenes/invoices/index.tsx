import { Typography, Box, useTheme } from "@mui/material"
import { DataGrid, GridCellParams, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { tokens } from "../../theme"
import { mockDataInvoices } from "../../data/mockData"
import Header from "../../components/Header"
import { InvoicesRowData } from "../../interfaces/User"

const Invoices = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell({ row }: GridCellParams<InvoicesRowData>) {

        const { cost } = row as InvoicesRowData

        return (
          <Typography color={colors.greenAccent[500]}>
            ${cost}
          </Typography>
        )
      },

    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1
    }
  ]

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="INVOICES" subTitle="Managing the Invoices Balances" />
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
          rows={mockDataInvoices}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Invoices