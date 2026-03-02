'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Who We Are', href: '/about' }, 
  { label: 'Our Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 0 }, minHeight: '140px' }}>
          <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', py: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img 
                src="/assets/logo.png" 
                alt="Dorjee Financial Logo" 
                style={{ height: '120px', width: 'auto', padding: '8px' }} 
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{ 
                  color: 'text.primary', 
                  ml: 2, 
                  fontSize: '1.2rem', 
                  fontWeight: 500,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
