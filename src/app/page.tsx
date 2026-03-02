'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SecurityIcon from '@mui/icons-material/Security';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Card from '@mui/material/Card';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: '13%',
            px: 2,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/financial_office_hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              We are Professional and Audit Firm you can Trust.
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              We are a trusted audit and accounting firm dedicated to providing exceptional financial services. Our team of experienced professionals is committed to delivering accurate audits, insightful financial advice, and personalized solutions tailored to your unique needs. We pride ourselves on our integrity, expertise, and dedication to helping you achieve your financial goals. Let us support you in navigating the complexities of accounting and audit with confidence.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              color="secondary"
              sx={{ px: 4, py: 1.5, fontSize: '1.2rem' }}
            >
              Get Started
            </Button>
          </Container>
        </Box>

        {/* About Us Section */}
        <Container maxWidth="lg" sx={{ py: 15 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" color="primary" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
                Who We Are
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary' }}>
                We are a trusted audit and accounting firm dedicated to providing exceptional financial services.
                Our team of experienced professionals is committed to delivering accurate audits, insightful financial advice,
                and personalized solutions tailored to your unique needs.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary' }}>
                We pride ourselves on our integrity, expertise, and dedication to helping you achieve your financial goals.
                Let us support you in navigating the complexities of accounting and audit with confidence.
              </Typography>
              <Button 
                component={Link} 
                href="/about" 
                variant="text" 
                color="primary" 
                sx={{ mt: 4, fontWeight: 'bold', fontSize: '1.1rem', p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
              >
                Learn More About Us →
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
               <Box
                sx={{
                  width: '100%',
                  height: 450,
                  borderRadius: 6,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '8px solid white'
                }}
              >
                <img 
                  src="/financial_office_hero.png" 
                  alt="Office" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Services Highlight */}
        <Box sx={{ bgcolor: 'background.paper', py: 12 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" color="primary" align="center" gutterBottom sx={{ fontWeight: 800, mb: 2 }}>
              Our Core Expertise
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '700px', mx: 'auto' }}>
              We provide world-class financial advisory and audit services to help your business thrive.
            </Typography>
            <Grid container spacing={4}>
              {[
                { 
                  title: 'Statutory Audit', 
                  desc: 'Ensuring compliance with legal and regulatory requirements through rigorous examination.',
                  icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                },
                { 
                  title: 'Taxation', 
                  desc: 'Expert tax preparation, strategic planning, and comprehensive compliance services.',
                  icon: <ReceiptLongIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                },
                { 
                  title: 'Business Advisory', 
                  desc: 'Strategic planning, financial forecasting, and insights for sustainable success.',
                  icon: <BusinessCenterIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                }
              ].map((service, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: 'divider',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        borderColor: 'primary.light'
                      }
                    }}
                  >
                    <Box sx={{ 
                      mb: 3, 
                      display: 'inline-flex', 
                      p: 2, 
                      bgcolor: 'rgba(0, 78, 161, 0.05)', 
                      borderRadius: '50%' 
                    }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button 
                component={Link} 
                href="/services" 
                variant="outlined" 
                color="primary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                View All Services
              </Button>
            </Box>
          </Container>
        </Box>
        {/* Team Preview Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 15 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" color="primary" align="center" gutterBottom sx={{ fontWeight: 800, mb: 2 }}>
              Our Leadership
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '700px', mx: 'auto' }}>
              Led by experienced professionals dedicated to your financial success.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                { name: 'Jigme Dorji, CPA', role: 'Managing Partner' },
                { name: 'Chencho, FCPA', role: 'Partner Advisor' }
              ].map((member, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card 
                    sx={{ 
                      textAlign: 'center', 
                      p: 4,
                      borderRadius: 6,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease-in-out',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        transform: 'translateY(-10px)',
                        borderColor: 'primary.light'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        bgcolor: 'primary.main', 
                        color: 'white', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: '0 10px 20px rgba(0,78,161,0.2)',
                        border: '4px solid white'
                      }}
                    >
                      {member.name.charAt(0)}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                      {member.role}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button 
                component={Link} 
                href="/team" 
                variant="outlined" 
                color="primary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                Meet All Team Members
              </Button>
            </Box>
          </Container>
        </Box>
      </main>

      <Footer />
    </Box>
  );
}
