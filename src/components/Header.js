import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FestivalIcon from '@mui/icons-material/Festival';

const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#232F3D', fontFamily: 'Arial, sans-serif' }}>
      <Toolbar>
        <FestivalIcon sx={{ marginRight: '10px', fontSize: '2rem' }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
          Indian Culture Management System
        </Typography>
        <Tabs
          textColor="inherit"
          indicatorColor="primary"
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ '& .MuiTab-root': { fontSize: '1rem', textTransform: 'none', minWidth: 'auto' } }}
        >
          <Tab
            component={NavLink}
            to="/heritagesites"
            label="Heritage Sites"
            sx={{ textDecoration: 'none', color: 'inherit', '&.Mui-selected': { color: '#fff' } }}
          />
          <Tab
            component={NavLink}
            to="/gallery"
            label="Gallery"
            sx={{ textDecoration: 'none', color: 'inherit', '&.Mui-selected': { color: '#fff' } }}
          />
          <Tab
            component={NavLink}
            to="/statelist"
            label="State List"
            sx={{ textDecoration: 'none', color: 'inherit', '&.Mui-selected': { color: '#fff' } }}
          />
          <Tab
            component={NavLink}
            to="/signup"
            label="SignUp"
            sx={{ textDecoration: 'none', color: 'inherit', '&.Mui-selected': { color: '#fff' } }}
          />
          <Tab
            component={NavLink}
            to="/signin"
            label="SignIn"
            sx={{ textDecoration: 'none', color: 'inherit', '&.Mui-selected': { color: '#fff' } }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
