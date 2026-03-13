'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import SvgIcon from '@mui/material/SvgIcon';

import { SvgIconProps } from '@mui/material/SvgIcon';

const TikTokIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 448 512">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </SvgIcon>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { icon: <FacebookIcon sx={{ fontSize: '1.2rem' }} />, href: 'https://facebook.com', color: '#1877F2', label: 'Facebook' },
  { icon: <WhatsAppIcon sx={{ fontSize: '1.2rem' }} />, href: 'https://wa.me/97577989320', color: '#25D366', label: 'WhatsApp' },
  { icon: <TikTokIcon sx={{ fontSize: '1.1rem' }} />, href: 'https://tiktok.com', color: '#fff', label: 'TikTok' },
  { icon: <InstagramIcon sx={{ fontSize: '1.2rem' }} />, href: 'https://instagram.com', color: '#E4405F', label: 'Instagram' },
];

const DARK = '#13151a';
const DARK2 = '#1c1f26';
const MUTED = 'rgba(255,255,255,0.45)';
const TEXT = 'rgba(255,255,255,0.82)';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: DARK,
        color: TEXT,
        pt: { xs: 6, md: 8 },
        pb: 0,
        mt: 'auto',
        borderTop: '4px solid',
        borderColor: 'primary.main',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }}>

          {/* ── Column 1: Brand ── */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {/* Logo on a white pill so it always pops on dark */}
            <Box
              sx={{
                bgcolor: '#fff',
                borderRadius: '50%',
                p: 1.2,
                mb: 2.5,
                width: 110,
                height: 110,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              }}
            >
              <img src="/assets/logo.png" alt="Dorjee Financial Logo" style={{ width: '86px', height: '86px', objectFit: 'contain' }} />
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 0.5, letterSpacing: '0.01em', fontSize: '1rem' }}>
              Dorjee Financial Private Limited
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 0.8, mt: 1.5, mb: 3 }}>
              <LocationOnOutlinedIcon sx={{ color: 'primary.main', fontSize: '1rem', mt: '2px', flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: MUTED, lineHeight: 1.7, fontSize: '0.85rem' }}>
                NPPF Building, near FITI Office<br />
                and Swimming Pool Complex,<br />
                Changeney, Thimphu, Bhutan
              </Typography>
            </Box>

            {/* Social row */}
            <Box sx={{ display: 'flex', gap: 1.2, justifyContent: 'center' }}>
              {socialLinks.map((s) => (
                <Box
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    bgcolor: DARK2,
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: s.color,
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      bgcolor: `${s.color}22`,
                      borderColor: `${s.color}55`,
                      boxShadow: `0 6px 16px ${s.color}33`,
                    },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* ── Column 2: Quick Links ── */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, mb: 3, letterSpacing: '0.12em', fontSize: '0.75rem' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.2 }}>
              {quickLinks.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  href={link.href}
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    color: MUTED,
                    py: 0.7,
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    transition: 'color 0.2s, padding-left 0.2s',
                    '& .chevron': { fontSize: '0.75rem', opacity: 0, transition: 'opacity 0.2s, transform 0.2s', transform: 'translateX(-4px)' },
                    '&:hover': {
                      color: '#fff',
                      '& .chevron': { opacity: 1, transform: 'translateX(0)' },
                    },
                  }}
                >
                  <ChevronRightIcon className="chevron" />
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* ── Column 3: Contact ── */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, mb: 3, letterSpacing: '0.12em', fontSize: '0.75rem' }}
            >
              Get In Touch
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {/* Phone */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.6 }}>
                <Box sx={{ bgcolor: DARK2, border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PhoneInTalkIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                </Box>
                <Typography variant="caption" sx={{ color: MUTED, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Phone
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT, fontWeight: 500, lineHeight: 1.6 }}>
                  +975 77989320<br />+975 77610029
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.6 }}>
                <Box sx={{ bgcolor: DARK2, border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <EmailOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                </Box>
                <Typography variant="caption" sx={{ color: MUTED, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Email
                </Typography>
                <MuiLink
                  href="mailto:dorjeefinancial@gmail.com"
                  underline="none"
                  sx={{ color: TEXT, fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}
                >
                  dorjeefinancial@gmail.com
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* ── Bottom Bar ── */}
        <Divider sx={{ mt: 7, borderColor: 'rgba(255,255,255,0.08)' }} />
        <Box sx={{ py: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: MUTED, fontSize: '0.82rem' }}>
            © {new Date().getFullYear()}{' '}
            <MuiLink
              component={Link}
              href="/"
              underline="none"
              sx={{ color: TEXT, fontWeight: 700, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}
            >
              Dorjee Financial Private Limited
            </MuiLink>
            . All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.06em' }}>
            Thimphu · Bhutan
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
