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
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { usePathname } from 'next/navigation';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

const aboutSubItems = [
  { label: 'Who We Are', href: '/about', icon: <InfoOutlinedIcon fontSize="small" /> },
  { label: 'Our Team', href: '/team', icon: <PeopleOutlinedIcon fontSize="small" /> },
];

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: <HomeOutlinedIcon fontSize="small" /> },
  { label: 'Our Services', href: '/services', icon: <MiscellaneousServicesOutlinedIcon fontSize="small" /> },
  { label: 'Contact Us', href: '/contact', icon: <MailOutlineIcon fontSize="small" /> },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const dropdownOpen = Boolean(anchorEl);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAboutClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleAboutClose = () => setAnchorEl(null);
  const handleMobileAboutToggle = () => setMobileAboutOpen(!mobileAboutOpen);

  const isAboutActive = pathname === '/about' || pathname === '/team';

  const navButtonSx = (href: string) => ({
    position: 'relative',
    color: pathname === href ? 'primary.main' : 'text.primary',
    mx: 0.5,
    px: 1.5,
    py: 1,
    fontSize: '0.95rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    textTransform: 'none',
    borderRadius: '8px',
    transition: 'color 0.2s, background 0.2s',
    '&:hover': {
      color: 'primary.main',
      bgcolor: 'rgba(25,118,210,0.06)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 4,
      left: '50%',
      transform: pathname === href ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
      transformOrigin: 'center',
      width: '60%',
      height: '2.5px',
      borderRadius: '2px',
      bgcolor: 'primary.main',
      transition: 'transform 0.25s ease',
    },
    '&:hover::after': {
      transform: 'translateX(-50%) scaleX(1)',
    },
  });

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Drawer Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 60%, #42a5f5 100%)',
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '0.04em' }}>
            DORJEE
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.1, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
            FINANCIAL
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.15)', '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' } }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Nav List */}
      <List sx={{ pt: 2, px: 1, flex: 1 }}>
        {/* Home */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            component={Link}
            href="/"
            onClick={handleDrawerToggle}
            selected={pathname === '/'}
            sx={{
              borderRadius: '10px',
              '&.Mui-selected': { bgcolor: 'rgba(25,118,210,0.1)', '& .MuiListItemText-primary': { color: 'primary.main', fontWeight: 700 } },
              '&:hover': { bgcolor: 'rgba(25,118,210,0.06)' },
            }}
          >
            <Box sx={{ mr: 2, color: pathname === '/' ? 'primary.main' : 'text.secondary', display: 'flex' }}>
              <HomeOutlinedIcon />
            </Box>
            <ListItemText primary="Home" primaryTypographyProps={{ fontSize: '1rem', fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>

        {/* Our Services */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            component={Link}
            href="/services"
            onClick={handleDrawerToggle}
            selected={pathname === '/services'}
            sx={{
              borderRadius: '10px',
              '&.Mui-selected': { bgcolor: 'rgba(25,118,210,0.1)', '& .MuiListItemText-primary': { color: 'primary.main', fontWeight: 700 } },
              '&:hover': { bgcolor: 'rgba(25,118,210,0.06)' },
            }}
          >
            <Box sx={{ mr: 2, color: pathname === '/services' ? 'primary.main' : 'text.secondary', display: 'flex' }}>
              <MiscellaneousServicesOutlinedIcon />
            </Box>
            <ListItemText primary="Our Services" primaryTypographyProps={{ fontSize: '1rem', fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>

        {/* About Us with submenu */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            onClick={handleMobileAboutToggle}
            selected={isAboutActive}
            sx={{
              borderRadius: '10px',
              '&.Mui-selected': { bgcolor: 'rgba(25,118,210,0.1)', '& .MuiListItemText-primary': { color: 'primary.main', fontWeight: 700 } },
              '&:hover': { bgcolor: 'rgba(25,118,210,0.06)' },
            }}
          >
            <Box sx={{ mr: 2, color: isAboutActive ? 'primary.main' : 'text.secondary', display: 'flex' }}>
              <GroupsOutlinedIcon />
            </Box>
            <ListItemText primary="About Us" primaryTypographyProps={{ fontSize: '1rem', fontWeight: 600 }} />
            {mobileAboutOpen ? <ExpandLess sx={{ color: 'text.secondary' }} /> : <ExpandMore sx={{ color: 'text.secondary' }} />}
          </ListItemButton>
        </ListItem>

        <Collapse in={mobileAboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 2, mb: 0.5 }}>
            {aboutSubItems.map((sub) => (
              <ListItem key={sub.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={sub.href}
                  onClick={handleDrawerToggle}
                  selected={pathname === sub.href}
                  sx={{
                    borderRadius: '10px',
                    '&.Mui-selected': { bgcolor: 'rgba(25,118,210,0.1)', '& .MuiListItemText-primary': { color: 'primary.main', fontWeight: 700 } },
                    '&:hover': { bgcolor: 'rgba(25,118,210,0.06)' },
                  }}
                >
                  <Box sx={{ mr: 2, color: pathname === sub.href ? 'primary.main' : 'text.secondary', display: 'flex' }}>
                    {sub.icon}
                  </Box>
                  <ListItemText primary={sub.label} primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <Divider sx={{ my: 1, mx: 1 }} />

        {/* Contact Us */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            component={Link}
            href="/contact"
            onClick={handleDrawerToggle}
            selected={pathname === '/contact'}
            sx={{
              borderRadius: '10px',
              bgcolor: pathname === '/contact' ? 'rgba(25,118,210,0.1)' : 'transparent',
              border: '1.5px solid',
              borderColor: 'primary.main',
              '&:hover': { bgcolor: 'rgba(25,118,210,0.1)' },
            }}
          >
            <Box sx={{ mr: 2, color: 'primary.main', display: 'flex' }}>
              <MailOutlineIcon />
            </Box>
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{ fontSize: '1rem', fontWeight: 700, color: 'primary.main' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: scrolled ? 'none' : '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow 0.3s ease, border 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 0 },
            minHeight: { xs: '72px', sm: '88px' },
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/logo.png"
                alt="Dorjee Financial Logo"
                style={{ height: 'auto', maxHeight: '72px', width: 'auto', padding: '6px' }}
              />
              <Box sx={{ ml: 1.5, display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1.2, letterSpacing: '0.02em', fontSize: '1.15rem' }}>
                  DORJEE FINANCIAL
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', letterSpacing: '0.05em', fontSize: '0.7rem', opacity: 0.8 }}>
                  PRIVATE LIMITED
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            <Button component={Link} href="/" disableRipple sx={navButtonSx('/')}>
              Home
            </Button>
            <Button component={Link} href="/services" disableRipple sx={navButtonSx('/services')}>
              Our Services
            </Button>

            {/* About Us dropdown trigger */}
            <Button
              onClick={handleAboutClick}
              disableRipple
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: '1.1rem !important',
                    transition: 'transform 0.25s ease',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              }
              sx={{
                ...navButtonSx('/about'),
                color: isAboutActive ? 'primary.main' : 'text.primary',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: isAboutActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                  transformOrigin: 'center',
                  width: '60%',
                  height: '2.5px',
                  borderRadius: '2px',
                  bgcolor: 'primary.main',
                  transition: 'transform 0.25s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
              }}
            >
              About Us
            </Button>

            {/* About Us Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={dropdownOpen}
              onClose={handleAboutClose}
              MenuListProps={{ 'aria-labelledby': 'about-us-button', sx: { py: 1 } }}
              PaperProps={{
                elevation: 8,
                sx: {
                  mt: 1.5,
                  minWidth: 210,
                  borderRadius: '12px',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'visible',
                  backdropFilter: 'blur(12px)',
                  // Tooltip arrow
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: -6,
                    left: 24,
                    width: 12,
                    height: 12,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    transform: 'rotate(45deg)',
                    borderRight: 'none',
                    borderBottom: 'none',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'left', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
              {aboutSubItems.map((sub) => (
                <MenuItem
                  key={sub.label}
                  component={Link}
                  href={sub.href}
                  onClick={handleAboutClose}
                  selected={pathname === sub.href}
                  sx={{
                    mx: 1,
                    borderRadius: '8px',
                    fontSize: '0.93rem',
                    fontWeight: 600,
                    py: 1.2,
                    px: 1.5,
                    gap: 1.2,
                    color: pathname === sub.href ? 'primary.main' : 'text.primary',
                    '&.Mui-selected': { bgcolor: 'rgba(25,118,210,0.08)' },
                    '&:hover': { color: 'primary.main', bgcolor: 'rgba(25,118,210,0.06)' },
                  }}
                >
                  <Box sx={{ display: 'flex', color: pathname === sub.href ? 'primary.main' : 'text.secondary' }}>
                    {sub.icon}
                  </Box>
                  {sub.label}
                </MenuItem>
              ))}
            </Menu>

            <Button component={Link} href="/contact" disableRipple sx={navButtonSx('/contact')}>
              Contact Us
            </Button>

            {/* CTA Button */}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              disableElevation
              sx={{
                ml: 2,
                px: 2.5,
                py: 1,
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.88rem',
                textTransform: 'none',
                letterSpacing: '0.03em',
                background: 'linear-gradient(135deg, #1565c0, #1976d2)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #0d47a1, #1565c0)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 6px 20px rgba(21,101,192,0.35)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Get in Touch
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: 'primary.main',
              bgcolor: 'rgba(25,118,210,0.08)',
              borderRadius: '10px',
              '&:hover': { bgcolor: 'rgba(25,118,210,0.15)' },
            }}
          >
            <MenuIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
            borderRadius: '16px 0 0 16px',
            boxShadow: '-8px 0 30px rgba(0,0,0,0.12)',
          },
        }}
        anchor="right"
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
