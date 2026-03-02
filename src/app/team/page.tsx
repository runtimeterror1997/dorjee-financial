'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const team = [
  { name: 'Jigme Dorji, CPA', role: 'Managing Partner', phone: '+975 77989320' },
  { name: 'Chencho, FCPA', role: 'Partner Advisor', phone: '+975 77610029' },
  { name: 'Tshering Wangchuk', role: 'Audit Manager', phone: '+975 17118584' },
  { name: 'Tulsi Ram Timsina', role: 'Senior Auditor', phone: '123-456-7890' },
  { name: 'Namgay Wangchuk', role: 'Auditor', phone: '123-456-7890' },
  { name: 'Nedup Lhamo', role: 'Auditor', phone: '123-456-7890' },
];

export default function Team() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Team
            </Typography>
            <Typography variant="h5" align="center">
              Excellence | Integrity | Growth
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 8, fontSize: '1.2rem', color: 'text.secondary' }}>
            We are committed to delivering high-quality services through rigorous professional standards, 
            attention to detail, and a strong culture of continuous improvement. Integrity guides every aspect of our work.
          </Typography>

          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    textAlign: 'center', 
                    p: 4,
                    borderRadius: 6,
                    boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
                      transform: 'translateY(-15px)',
                      borderColor: 'primary.light'
                    }
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Avatar 
                      sx={{ 
                        width: 130, 
                        height: 130, 
                        mx: 'auto', 
                        mb: 4, 
                        bgcolor: 'primary.main',
                        fontSize: '3.5rem',
                        fontWeight: 900,
                        boxShadow: '0 12px 24px rgba(0,78,161,0.25)',
                        border: '5px solid white'
                      }}
                    >
                      {member.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 900, color: 'text.primary', mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 700, mb: 3, letterSpacing: 0.5 }}>
                      {member.role.toUpperCase()}
                    </Typography>
                    <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'rgba(0,0,0,0.06)' }}>
                      <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <strong style={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.8rem' }}>CONTACT:</strong> {member.phone}
                      </Typography>
                    </Box>
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
