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
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one card width (container / 3)
      const scrollAmount = direction === 'left' ? -(current.clientWidth / 3) : (current.clientWidth / 3);
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        {/* ── Hero Section ── */}
        <Box
          sx={{
            py: { xs: 12, md: 18 },
            px: 2,
            backgroundImage: `linear-gradient(rgba(10, 25, 41, 0.8), rgba(10, 25, 41, 0.8)), url('/financial_office_hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block' }}>
              Welcome to Dorjee Financial
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.75rem' }, lineHeight: 1.1 }}>
              Professional Audit & Advisory You Can Trust.
            </Typography>
            <Typography variant="h6" sx={{ mb: 5, color: 'rgba(255,255,255,0.8)', fontWeight: 400, lineHeight: 1.6, maxWidth: 800, mx: 'auto' }}>
              A trusted audit and accounting firm dedicated to providing exceptional financial services.
              We deliver accurate audits, insightful financial advice, and personalised solutions tailored to your unique needs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                href="/services"
                variant="contained"
                size="large"
                disableElevation
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '1.05rem', fontWeight: 700, borderRadius: '8px' }}
              >
                Our Services
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                size="large"
                sx={{ 
                  px: 4, py: 1.5, fontSize: '1.05rem', fontWeight: 700, borderRadius: '8px',
                  color: 'white', borderColor: 'rgba(255,255,255,0.5)', 
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ── About Us Section ── */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
                About Our Firm
              </Typography>
              <Typography variant="h3" color="text.primary" sx={{ fontWeight: 800, mt: 1, mb: 3 }}>
                Who We Are
              </Typography>
              <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mb: 4 }} />
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary', mb: 3 }}>
                We are a trusted audit and accounting firm dedicated to providing exceptional financial services.
                Our team of experienced professionals is committed to delivering accurate audits, insightful financial advice,
                and personalised solutions.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary', mb: 4 }}>
                We pride ourselves on our integrity, expertise, and dedication to helping you achieve your financial goals.
                Let us support you in navigating the complexities of accounting and auditing with absolute confidence.
              </Typography>
              <Button 
                component={Link} 
                href="/about" 
                variant="text" 
                color="primary" 
                endIcon={<ArrowForwardIcon />}
                sx={{ fontWeight: 700, fontSize: '1rem', p: 0, '&:hover': { bgcolor: 'transparent', gap: 1 } }}
              >
                Learn More About Us
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
               <Box
                sx={{
                  width: '100%',
                  height: 480,
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: 4,
                    pointerEvents: 'none'
                  }
                }}
              >
                <img 
                  src="/financial_office_hero.png" 
                  alt="Financial Office" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* ── Services Highlight ── */}
        <Box sx={{ bgcolor: '#f0f4f8', py: { xs: 10, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
                What We Do
              </Typography>
              <Typography variant="h3" color="text.primary" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
                Our Core Expertise
              </Typography>
              <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 3 }} />
              <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                We provide world-class financial advisory and audit services to help your business thrive.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {[
                { 
                  title: 'Statutory Audit', 
                  desc: 'Ensuring compliance with legal and regulatory requirements through rigorous examination.',
                  icon: <SecurityIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                },
                { 
                  title: 'Taxation Services', 
                  desc: 'Expert tax preparation, strategic planning, and comprehensive compliance services.',
                  icon: <ReceiptLongIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                },
                { 
                  title: 'Business Advisory', 
                  desc: 'Strategic planning, financial forecasting, and insights for sustainable success.',
                  icon: <BusinessCenterIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                }
              ].map((service, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
                      }
                    }}
                  >
                    {service.icon}
                    <Divider sx={{ borderColor: 'primary.main', width: 36, borderWidth: 2, borderRadius: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                component={Link} 
                href="/services" 
                variant="outlined" 
                color="primary" 
                size="large"
                sx={{ px: 4, py: 1.5, borderRadius: '8px', fontWeight: 700, textTransform: 'none' }}
              >
                View All Services
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ── Team Preview Section ── */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
              Our Leadership
            </Typography>
            <Typography variant="h3" color="text.primary" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
              Meet The Partners
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 3 }} />
            <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Led by experienced professionals dedicated to your financial success.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              { name: 'Jigme Dorji, CPA', role: 'Managing Partner' },
              { name: 'Chencho, FCPA', role: 'Partner Advisor' },
              { name: 'Audit Manager', role: 'Audit Manager' }
            ].map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    textAlign: 'center', 
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: '#fff',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
                    }
                  }}
                >
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
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {member.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              component={Link} 
              href="/team" 
              variant="outlined" 
              color="primary" 
              size="large"
              sx={{ px: 4, py: 1.5, borderRadius: '8px', fontWeight: 700, textTransform: 'none' }}
            >
              Meet The Full Team
            </Button>
          </Box>
        </Container>

        {/* ── Testimonials Section ── */}
        <Box sx={{ bgcolor: '#f0f4f8', py: { xs: 10, md: 12 } }}>
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
                Client Success Stories
              </Typography>
              <Typography variant="h3" color="text.primary" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
                What Our Clients Say
              </Typography>
              <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 3 }} />
              <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Don't just take our word for it—here is what our valued clients have to say about our services.
              </Typography>
            </Box>

            {/* Carousel Container with Arrows */}
            <Box sx={{ position: 'relative', px: { xs: 0, md: 8 } }}>
              {/* Left Arrow */}
              <IconButton
                onClick={() => scroll('left')}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  bgcolor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  display: { xs: 'none', md: 'flex' },
                  '&:hover': { bgcolor: '#f5f5f5' }
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <Box
                ref={scrollRef}
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: 4,
                  pb: 2,
                  px: 2,
                  scrollSnapType: 'x mandatory',
                  msOverflowStyle: 'none', // IE and Edge
                  scrollbarWidth: 'none', // Firefox
                  '&::-webkit-scrollbar': {
                    display: 'none', // Chrome, Safari and Opera
                  },
                }}
              >
                {[
                  {
                    quote: "Dorjee Financial transformed the way we handle our tax compliance. Their team is professional, detail-oriented, and truly cares about our success.",
                    name: "Sarah Jenkins",
                    role: "CEO, TechInnovate",
                  },
                  {
                    quote: "We've been partnering with them for our statutory audits for the past five years. Their insights have been invaluable to our board of directors.",
                    name: "Michael Chang",
                    role: "CFO, Global Logistics",
                  },
                  {
                    quote: "The personalized business advisory we received helped us navigate a tough transition period smoothly. Highly recommend their expertise!",
                    name: "Elena Rodriguez",
                    role: "Founder, Rodriguez Enterprises",
                  },
                  {
                    quote: "Exceptional service and deep industry knowledge. They have been instrumental in our financial planning and growth strategy.",
                    name: "David Chen",
                    role: "Director, Apex Solutions",
                  }
                ].map((testimonial, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: { xs: '85vw', md: 'calc((100% - 64px) / 3)' },
                      maxWidth: { xs: '85vw', md: 'calc((100% - 64px) / 3)' },
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        transition: 'box-shadow 0.2s, transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
                        }
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.light', opacity: 0.5 }} />
                      </Box>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 4, flexGrow: 1, lineHeight: 1.8 }}>
                        "{testimonial.quote}"
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                        <Avatar sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 700 }}>
                          {testimonial.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                ))}
              </Box>

              {/* Right Arrow */}
              <IconButton
                onClick={() => scroll('right')}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  bgcolor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  display: { xs: 'none', md: 'flex' },
                  '&:hover': { bgcolor: '#f5f5f5' }
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Container>
        </Box>

      </main>

      <Footer />
    </Box>
  );
}
