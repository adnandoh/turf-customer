import React from 'react';
import { Box, Container, Divider, Grid as MuiGrid, IconButton, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Use Grid with proper typing
const Grid = MuiGrid;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const footerLinks = [
    { title: 'Company', links: [
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ]},
    { title: 'Sports', links: [
      { name: 'Cricket', path: '/cricket' },
      { name: 'Pickleball', path: '/pickleball' },
    ]},
    { title: 'Legal', links: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ]},
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: <WhatsAppIcon />, url: 'https://wa.me/8468942754' },
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 4, md: 6 },
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <MuiGrid container spacing={isMobile ? 3 : 4}>
          <MuiGrid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #673ab7 30%, #9c27b0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TurfBook
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Connecting cricket and pickleball enthusiasts with the perfect turf fields for their games and events.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component={Link}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  size="small"
                  sx={{
                    color: 'grey.700',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </MuiGrid>

          {/* Contact Information */}
          <MuiGrid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} sx={{ mb: 2 }}>
              Contact Info
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                <Link
                  href="tel:+918468942754"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  +91 84689 42754
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <LocationIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary', mt: 0.2 }} />
                <Link
                  href="https://www.google.com/maps/dir/19.0724792,72.8887125/Gat+no+69+%2F32,+Turf+N+Lonavala,+Railway+station,+boraj+road,+near+Malavli,+Malavli,+Lonavala,+Maharashtra+410401/@18.9074373,72.5100978,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2ab70d00a1c5f:0xe9c8a48745dd469c!2m2!1d73.4835825!2d18.7451839?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    lineHeight: 1.4,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Turf N Lonavala, Gat no 69/32, Railway station, boraj road, near Malavli, Malavli, Lonavala, Maharashtra 410401
                </Link>
              </Box>
            </Box>
          </MuiGrid>
          
          {footerLinks.map((category) => (
            <MuiGrid item xs={6} sm={4} md={2} key={category.title}>
              <Typography variant="subtitle2" color="text.primary" fontWeight={600} sx={{ mb: 2 }}>
                {category.title}
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {category.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'none',
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </MuiGrid>
          ))}
        </MuiGrid>
        
        <Divider sx={{ my: { xs: 3, md: 4 } }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', sm: 'center' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: { xs: 1, sm: 0 }
        }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} TurfBook. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ for cricket and pickleball enthusiasts
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 