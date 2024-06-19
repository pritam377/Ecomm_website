import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Box, display } from '@mui/system';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const menu = [
    {name:"Dashboard", path:"/admin-dashboard",icon:<DashboardIcon/>},
    {name:"Products", path:"/admin/products",icon:<InventoryIcon/>},
    {name:"Customers", path:"/admin/customers",icon:<PersonAddIcon/>},
    {name:"Orders", path:"/admin/orders",icon:<ShoppingCartIcon/>},
    {name:"AddProduct", path:"/admin/product",icon:<ListAltIcon/>},
    // {name:"", path:""},
]
const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box sx={{overflow:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%"}}>
            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
                </ListItem>)}
            </List>

            <List>
                <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

  return (
    <div>
        <Box sx={{display:`${isLargeScreen} ? "flex":"block"`}}>
            <CssBaseline/>
            <Drawer variant='permanent' sx={{height:"100vh",
            width:240,
            flexShrink:0}}>
                {drawer}
            </Drawer>
        </Box>
    </div>
  )
}

export default Admin