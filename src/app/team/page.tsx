'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Header />

      <main style={{ flexGrow: 1 }}>

        {/* Page Heading (Matches Services and About) */}
        <Box sx={{ bgcolor: '#f0f4f8', borderBottom: '1px solid', borderColor: 'rgba(25,118,210,0.1)', py: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
              Meet the Experts
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mt: 1, mb: 2 }}>
              Our Team
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 2 }} />
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 600, mx: 'auto' }}>
              Excellence, Integrity, and Growth. We are committed to delivering high-quality services through rigorous professional standards.
            </Typography>
          </Container>
        </Box>

        {/* Team Grid */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: '#fff',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Avatar
                      sx={{
                        width: 96,
                        height: 96,
                        mx: 'auto',
                        mb: 3,
                        bgcolor: 'rgba(25,118,210,0.08)',
                        color: 'primary.main',
                        fontSize: '2rem',
                        fontWeight: 700,
                      }}
                    >
                      {member.name.charAt(0)}
                    </Avatar>
                    
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 3 }}>
                      {member.role}
                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, color: 'text.secondary' }}>
                      <PhoneIcon sx={{ fontSize: '1.1rem', color: 'text.disabled' }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {member.phone}
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
