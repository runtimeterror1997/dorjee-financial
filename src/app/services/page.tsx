import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const services = [
  {
    title: 'Statutory Audit',
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Our statutory audit services are designed to help businesses ensure compliance with legal and regulatory requirements. We meticulously examine financial statements and accounting records, providing an independent assessment of your financial health.',
  },
  {
    title: 'Internal Audit',
    icon: <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'We provide comprehensive internal audit services designed to enhance your organization\'s efficiency and effectiveness. We conducts thorough assessments to identify risks, ensure compliance, and improve internal controls.',
  },
  {
    title: 'Book keeping and Payroll',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'We provide comprehensive financial solutions tailored to meet your business needs. Our experienced team ensures accuracy and compliance while helping you make informed decisions. We also provide payroll services using different platforms.',
  },
  {
    title: 'Taxation',
    icon: <ReceiptLongIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'We assist businesses in tax preparation, planning, and compliance, ensuring that our clients meet their obligations while maximizing deductions and credits. Trusting us with your taxation needs will allow you to focus on what matters most.',
  },
  {
    title: 'Business Advisory',
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'We offer comprehensive business planning and consulting services tailored to your unique needs. Our team will help you navigate the complexities of financial management while ensuring your business achieves its goals.',
  },
  {
    title: 'Company registration',
    icon: <AppRegistrationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'We simplify the process of starting your business by providing expert guidance and support at every step in the Foreign Direct Investment (FDI) company registration. Whether you\'re a new entrepreneur or expanding an existing venture.',
  },
];

export default function Services() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Typography variant="h5" align="center">
              Comprehensive financial solutions tailored to your business.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 4,
                    borderTop: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      transform: 'translateY(-10px)'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, pt: 5, px: 3 }}>
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: -24, 
                        left: 24, 
                        bgcolor: 'background.paper', 
                        borderRadius: '12px',
                        p: 1.5,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 800, 
                        color: 'primary.main',
                        mb: 2,
                        mt: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </Box>
  );
}
