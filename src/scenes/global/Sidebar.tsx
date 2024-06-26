import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  HomeMaxOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  HelpOutline,
  BarChartOutlined,
  PieChartOutline,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined
} from '@mui/icons-material'

const Item = ({ title, to, icon, selected, setSelected }: { title: string, to: string, icon: React.ReactNode, selected: string, setSelected: any }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('Dashboard')

  console.log(selected)

  return (
    <Box sx={{
      '& .pro-sidebar-inner': {
        background: `${colors.primary[400]} !important`
      },
      '& .pro-icon-wrapper': {
        backgroundColor: 'transparent !important'
      },
      '& .pro-inner-item': {
        padding: '5px 35px 5px 20px !important'
      },
      '& .pro-inner-item:hover': {
        color: '#5d547c !important'
      },
      '& .pro-menu-item.active': {
        color: '#5d547c !important'
      },
    }}>
      <ProSidebar width='300px' collapsed={isCollapsed}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {
              !isCollapsed &&
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            }
          </MenuItem>

          {/* User */}
          {
            !isCollapsed &&
            <Box margin='0px 20px 25px' display='flex' gap='15px' alignItems='center'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt="profile-user"
                  width='80px'
                  height='80px'
                  src={`../../assets/pain.jpg`}
                  style={{ cursor: 'pointer', borderRadius: '50%', objectFit: 'cover' }}
                />
              </Box>
              <Box>
                <Typography variant="h3" color={colors.grey[100]} fontWeight='bold' sx={{ m: '10px 0 5px 0' }}>Biendev</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
              </Box>
            </Box>
          }

          {/* Menu Item */}
          <Box paddingLeft={isCollapsed ? undefined : '0px'} paddingBottom='40px'>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeMaxOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar