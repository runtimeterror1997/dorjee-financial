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
import Divider from '@mui/material/Divider';

export default function About() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Header />

      <main style={{ flexGrow: 1 }}>
        {/* Page Heading (Matches Services) */}
        <Box sx={{ bgcolor: '#f0f4f8', borderBottom: '1px solid', borderColor: 'rgba(25,118,210,0.1)', py: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
              About Us
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mt: 1, mb: 2 }}>
              Who We Are
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 2 }} />
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem' }}>
              A trusted partner in your financial journey since establishment.
            </Typography>
          </Container>
        </Box>

        {/* Content Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
            
            {/* Left Column: Text */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h4" color="text.primary" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
                Our Firm
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary', mb: 3 }}>
                We are a trusted audit and accounting firm dedicated to providing exceptional financial services.
                Our team of experienced professionals is committed to delivering accurate audits, insightful financial advice,
                and personalised solutions tailored to your unique needs.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary', mb: 3 }}>
                We pride ourselves on our integrity, expertise, and dedication to helping you achieve your financial goals.
                Let us support you in navigating the complexities of accounting and auditing with confidence.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                At Dorjee Financial, we believe that transparency and professionalism are the cornerstones of a successful business relationship.
                Our goal is to provide you with the clarity and confidence needed to make informed financial decisions.
              </Typography>
            </Grid>

            {/* Right Column: Key Pillars Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  {/* Mission */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                      <LightbulbIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                      <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                        Our Mission
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      To provide superior financial services with the highest level of integrity and professionalism,
                      empowering our clients to achieve sustainable growth and success.
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 4 }} />

                  {/* Vision */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                      <VisibilityIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                      <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      To be the leading audit and accounting firm in Bhutan, recognized for our excellence,
                      trustworthiness, and innovative solutions.
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 4 }} />

                  {/* Values */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                      <StarIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                      <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                        Our Values
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ m: 0, pl: 2, color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {[
                        'Integrity and Ethics',
                        'Professional Excellence',
                        'Client-Centered Solutions',
                        'Continuous Growth'
                      ].map((value) => (
                        <Typography component="li" key={value} variant="body2" sx={{ lineHeight: 1.5 }}>
                          {value}
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
