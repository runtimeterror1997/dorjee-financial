'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Who We Are', href: '/about' }, 
  { label: 'Our Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
        DORJEE FINANCIAL
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              component={Link} 
              href={item.href} 
              sx={{ textAlign: 'center' }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 500,
                  color: 'text.primary'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 0 }, minHeight: { xs: '80px', sm: '140px' } }}>
          <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', py: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img 
                src="/assets/logo.png" 
                alt="Dorjee Financial Logo" 
                style={{ height: 'auto', maxHeight: '100px', width: 'auto', padding: '8px' }} 
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{ 
                  color: 'text.primary', 
                  ml: 2, 
                  fontSize: '1.1rem', 
                  fontWeight: 600,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 2, color: 'primary.main' }}
          >
            <MenuIcon sx={{ fontSize: '2.5rem' }} />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, borderRadius: '20px 0 0 20px' },
        }}
        anchor="right"
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
