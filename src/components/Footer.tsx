import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from '@mui/material/SvgIcon';

const TikTokIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 448 512">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </SvgIcon>
);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Column 1: Branding and Address */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <img 
                src="/assets/logo.png" 
                alt="Dorjee Financial Logo" 
                style={{ height: '80px', width: 'auto' }} 
              />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Dorjee Financial Private Limited
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
              NPPF Building, near FITI Office and Swimming Pool Complex,<br />
              Changeney, Thimphu, Bhutan
            </Typography>
          </Grid>

          {/* Column 2: Contact Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong><br /> 
                +975 77989320 / +975 77610029
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong><br />
                <Link href="mailto:dorjeefinancial@gmail.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  dorjeefinancial@gmail.com
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                component="a" 
                href="https://facebook.com" 
                target="_blank"
                sx={{ 
                  color: '#1877F2',
                  bgcolor: 'rgba(24, 119, 242, 0.05)',
                  '&:hover': { bgcolor: 'rgba(24, 119, 242, 0.15)' } 
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://wa.me/97577989320" 
                target="_blank"
                sx={{ 
                  color: '#25D366',
                  bgcolor: 'rgba(37, 211, 102, 0.05)',
                  '&:hover': { bgcolor: 'rgba(37, 211, 102, 0.15)' } 
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://tiktok.com" 
                target="_blank"
                sx={{ 
                  color: '#000000',
                  bgcolor: 'rgba(0, 0, 0, 0.05)',
                  '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.15)' } 
                }}
              >
                <TikTokIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://instagram.com" 
                target="_blank"
                sx={{ 
                  color: '#E4405F',
                  bgcolor: 'rgba(228, 64, 95, 0.05)',
                  '&:hover': { bgcolor: 'rgba(228, 64, 95, 0.15)' } 
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
              Follow us for industry news, financial tips, and firm updates.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" align="center" color="text.secondary">
            {'Copyright © '}
            <Link color="primary" href="/" sx={{ textDecoration: 'none', fontWeight: 500 }}>
              Dorjee Financial Private Limited
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
