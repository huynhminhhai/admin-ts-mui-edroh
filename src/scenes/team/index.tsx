import { Typography, Box, useTheme } from "@mui/material"
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { tokens } from "../../theme"
import { mockDataTeam } from "../../data/mockData"
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material"
import Header from "../../components/Header"
import { UserAccess, UserRowData } from "../../interfaces/User"

const Team = () => {

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
      field: 'age',
      headerName: 'Age',
      flex: 1
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
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }: GridCellParams<UserRowData>) => {

        const { access } = row as UserRowData

        return (
          <Box
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            bgcolor={
              access === UserAccess.admin ?
                colors.greenAccent[600] :
                colors.greenAccent[700]
            }
            borderRadius='4px'
          >
            {access === UserAccess.admin && <AdminPanelSettingsOutlined />}
            {access === UserAccess.manager && <SecurityOutlined />}
            {access === UserAccess.user && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      }
    },
  ]

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="TEAM" subTitle="Managing the Team Members" />
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
        }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Team