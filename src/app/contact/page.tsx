'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 800 }}>
              Contact Us
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              Dedicated to providing exceptional financial advisory and audit services.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 900, mb: 4 }}>
                Get In Touch
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary', mb: 6 }}>
                Have questions or need professional financial advice? Our team is ready to support you with tailored solutions.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { icon: <LocationOnIcon color="secondary" />, title: 'Our Office', content: 'NPPF Building, near FITI Office, Changeney, Thimphu, BHUTAN' },
                  { icon: <PhoneIcon color="secondary" />, title: 'Call Us', content: '+975 77989320 / +975 77610029' },
                  { icon: <EmailIcon color="secondary" />, title: 'Email Us', content: 'dorjeefinancial@gmail.com' }
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 2.5 }}>
                    <Box sx={{ 
                      bgcolor: 'rgba(0, 78, 161, 0.05)', 
                      p: 2, 
                      borderRadius: '16px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      height: 'fit-content'
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Card 
                sx={{ 
                  p: 2, 
                  borderRadius: 6, 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  borderTop: '6px solid',
                  borderColor: 'primary.main'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {submitted ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ 
                          width: 80, 
                          height: 80, 
                          bgcolor: 'success.light', 
                          color: 'success.main', 
                          borderRadius: '50%', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '3rem',
                          mb: 3
                        }}>
                          ✓
                        </Box>
                      </Box>
                      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 800 }}>
                        Message Sent Successfully!
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        We'll be in touch with you shortly.
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        sx={{ mt: 5, borderRadius: '30px', px: 4 }} 
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </Box>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 4, color: 'primary.main' }}>
                        Send Us A Message
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth label="Full Name" placeholder="Your Name" variant="outlined" required />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth label="Email Address" placeholder="email@example.com" type="email" required />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth label="Phone Number" placeholder="+975 ..." />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth label="Subject" placeholder="How can we help?" required />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField 
                            fullWidth 
                            label="Your Message" 
                            multiline 
                            rows={5} 
                            placeholder="Write your message here..."
                            required 
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <Button 
                            type="submit" 
                            variant="contained" 
                            fullWidth 
                            size="large"
                            sx={{ 
                              py: 2, 
                              mt: 2, 
                              borderRadius: '12px', 
                              fontWeight: 800, 
                              fontSize: '1.1rem',
                              boxShadow: '0 8px 16px rgba(0,78,161,0.2)'
                            }}
                          >
                            Submit Inquiry
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </Box>
  );
}
