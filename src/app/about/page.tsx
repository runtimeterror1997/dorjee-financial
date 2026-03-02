'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';

export default function About() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        {/* Page Hero */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 800 }}>
              Who We Are
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              A trusted partner in your financial journey since establishment.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 900, mb: 4 }}>
                Our Firm
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'text.secondary', mb: 4 }}>
                We are a trusted audit and accounting firm dedicated to providing exceptional financial services. 
                Our team of experienced professionals is committed to delivering accurate audits, insightful financial advice, 
                and personalized solutions tailored to your unique needs.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'text.secondary', mb: 4 }}>
                We pride ourselves on our integrity, expertise, and dedication to helping you achieve your financial goals. 
                Let us support you in navigating the complexities of accounting and audit with confidence.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'text.secondary' }}>
                 At Dorjee Financial, we believe that transparency and professionalism are the cornerstones of a successful business relationship. 
                 Our goal is to provide you with the clarity and confidence needed to make informed financial decisions.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card 
                sx={{ 
                  p: 2, 
                  borderRadius: 6,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  borderTop: '6px solid',
                  borderColor: 'secondary.main',
                  bgcolor: 'background.paper',
                  height: '100%'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1.5 }}>
                      <LightbulbIcon color="secondary" />
                      <Typography variant="h5" color="primary" sx={{ fontWeight: 800 }}>
                        Our Mission
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      To provide superior financial services with the highest level of integrity and professionalism, 
                      empowering our clients to achieve sustainable growth and success.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1.5 }}>
                      <VisibilityIcon color="secondary" />
                      <Typography variant="h5" color="primary" sx={{ fontWeight: 800 }}>
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      To be the leading audit and accounting firm in Bhutan, recognized for our excellence, 
                      trustworthiness, and innovative solutions.
                    </Typography>
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1.5 }}>
                      <StarIcon color="secondary" />
                      <Typography variant="h5" color="primary" sx={{ fontWeight: 800 }}>
                        Our Values
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 1 }}>
                      {[
                        'Integrity and Ethics',
                        'Professional Excellence',
                        'Client-Centered Solutions',
                        'Continuous Growth'
                      ].map((value) => (
                        <Typography key={value} variant="body1" color="text.secondary" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>•</Box> {value}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
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
