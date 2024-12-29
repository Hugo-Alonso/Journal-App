
import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* Navbar drawerWidth */}
        <NavBar />

        {/* SiderBar drawerWidth */}

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}    
        > 
            {/* ToolBar */}

            { children }
        </Box>

    </Box>
  )
}
