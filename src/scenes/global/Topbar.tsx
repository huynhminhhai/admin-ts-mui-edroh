import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import { LightModeOutlined, DarkModeOutlined, NotificationAddOutlined, SettingsOutlined, PersonOutline, Search } from '@mui/icons-material'


const Topbar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search bar */}
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='somethings...' />
        <IconButton type='button' sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* Icon */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />
          }
        </IconButton>
        <IconButton>
          <NotificationAddOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar