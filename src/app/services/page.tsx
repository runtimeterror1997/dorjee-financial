'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
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
    icon: <SecurityIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
    description:
      'We meticulously examine financial statements and accounting records to provide an independent, objective assessment of your financial health. Our audits ensure full compliance with the latest legal framework and accounting standards.',
    details: ['Financial Statement Audits', 'Compliance & Regulatory Audits', 'Independent Assurance', 'Statutory Reporting'],
  },
  {
    title: 'Internal Audit',
    icon: <AssessmentIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
    description:
      "A proactive approach to risk management. We conduct comprehensive assessments to identify vulnerabilities, ensure adherence to internal policies, and streamline processes — ultimately enhancing your organisation's operational efficiency.",
    details: ['Risk Assessment & Profiling', 'Process Optimization', 'Fraud Investigation', 'Internal Control Review'],
  },
  {
    title: 'Bookkeeping & Payroll',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
    description:
      'End-to-end financial administration so you can focus on growth. From accurate daily ledger management to complex payroll processing and compliance, we handle the administrative burden of your finance operations.',
    details: ['Daily Ledger Maintenance', 'Salary & Benefit Processing', 'Bank Reconciliations', 'Financial Statements Preparation'],
  },
  {
    title: 'Taxation Services',
    icon: <ReceiptLongIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
    description:
      'Expert navigation of complex tax landscapes. We provide strategic tax planning, timely preparation, and submission of returns, ensuring you maximise available deductions while remaining fully compliant with all tax authorities.',
    details: ['Corporate Tax Returns', 'Personal Income Tax', 'Tax Planning & Strategy', 'Filing & Compliance'],
  },
  {
    title: 'Business Advisory',
    icon: <BusinessCenterIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
    description:
      'Strategic guidance to help you navigate financial complexity. Whether you are restructuring, looking for investment, or planning a succession, our advisory team provides the insights needed to achieve your long-term goals.',
    details: ['Financial Modeling', 'Mergers & Acquisitions', 'Business Valuation', 'Strategic Planning'],
  },
  {
    title: 'Company Registration',
    icon: <AppRegistrationIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
    description:
      "We simplify the journey of formalising your business. Our team provides step-by-step guidance through local entity incorporation and Foreign Direct Investment (FDI) registration, acting as your trusted local partner.",
    details: ['FDI Registration', 'Entity Incorporation', 'Licensing & Permits', 'Corporate Governance Setup'],
  },
];

export default function Services() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flexGrow: 1 }}>

        {/* Page Heading */}
        <Box sx={{ bgcolor: '#f0f4f8', borderBottom: '1px solid', borderColor: 'rgba(25,118,210,0.1)', py: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em' }}>
              What We Offer
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mt: 1, mb: 2 }}>
              Our Services
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', borderRadius: 2, mx: 'auto', mb: 2 }} />
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem' }}>
              Comprehensive financial solutions tailored to your business.
            </Typography>
          </Container>
        </Box>

        {/* Cards */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <Box
                  sx={{
                    height: '100%',
                    bgcolor: '#fff',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    '&:hover': {
                      boxShadow: '0 8px 28px rgba(0,0,0,0.09)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {service.icon}
                  <Divider sx={{ borderColor: 'primary.main', width: 36, borderWidth: 2, borderRadius: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1 }}>
                    {service.description}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                    {service.details.map((detail, idx) => (
                      <Typography component="li" variant="body2" key={idx} sx={{ fontSize: '0.875rem' }}>
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </Box>
  );
}
