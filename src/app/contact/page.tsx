'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>

        {/* Page Heading (Matches Services, About, Team) */}
        <Box sx={{ bgcolor: '#f0f4f8', borderBottom: '1px solid', borderColor: 'rgba(25,118,210,0.1)', py: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
              Reach Out
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mt: 1, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 2 }} />
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 600, mx: 'auto' }}>
              Have questions or need professional financial advice? Our team is ready to support you with tailored solutions.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 8, md: 10 }}>
            
            {/* Left Column: Contact Methods */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h4" color="text.primary" gutterBottom sx={{ fontWeight: 800, mb: 4 }}>
                Get In Touch
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { icon: <LocationOnIcon />, title: 'Our Office', content: 'NPPF Building, near FITI Office, Changeney, Thimphu, BHUTAN' },
                  { icon: <PhoneIcon />, title: 'Call Us', content: '+975 77989320 / +975 77610029' },
                  { icon: <EmailIcon />, title: 'Email Us', content: 'dorjeefinancial@gmail.com' }
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 2.5 }}>
                    <Box sx={{ 
                      bgcolor: 'rgba(25,118,210,0.08)', 
                      color: 'primary.main',
                      p: 2, 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      height: 'fit-content'
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right Column: Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 3, 
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: '#fff',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
                  {submitted ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
                      <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 800 }}>
                        Message Sent Successfully
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        Thank you for reaching out. We will get back to you shortly.
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        sx={{ borderRadius: '8px', px: 4, py: 1, textTransform: 'none', fontWeight: 600 }} 
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </Box>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
                        Send a Message
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField 
                            fullWidth 
                            label="Full Name" 
                            placeholder="Your Name" 
                            variant="outlined" 
                            required 
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField 
                            fullWidth 
                            label="Email Address" 
                            placeholder="email@example.com" 
                            type="email" 
                            required 
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField 
                            fullWidth 
                            label="Phone Number" 
                            placeholder="+975 ..." 
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField 
                            fullWidth 
                            label="Subject" 
                            placeholder="How can we help?" 
                            required 
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField 
                            fullWidth 
                            label="Your Message" 
                            multiline 
                            rows={4} 
                            placeholder="Write your message here..."
                            required 
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <Button 
                            type="submit" 
                            variant="contained" 
                            disableElevation
                            fullWidth 
                            size="large"
                            sx={{ 
                              py: 1.5, 
                              mt: 1, 
                              borderRadius: '8px', 
                              fontWeight: 700, 
                              textTransform: 'none',
                              fontSize: '1rem',
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
