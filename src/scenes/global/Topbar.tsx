import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material'
import { LightModeOutlined, DarkModeOutlined, NotificationAddOutlined, SettingsOutlined, PersonOutline, Search } from '@mui/icons-material'


const Topbar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box>Topbar</Box>
  )
}

export default Topbar