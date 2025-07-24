import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid as MuiGrid, 
  Card, 
  CardMedia, 
  Dialog, 
  DialogContent, 
  IconButton,
  Chip,
  Paper
} from '@mui/material';
import { 
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  SportsCricket as CricketIcon,
  SportsFootball as FootballIcon,
  Lightbulb as NightIcon,
  Event as EventIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

// Enhanced Sports/Turf theme colors
const colors = {
  primary: {
    main: '#388e3c', // Rich grass green
    dark: '#2e7d32', // Deep forest green
    light: '#66bb6a', // Vibrant light green
  },
  secondary: {
    main: '#ff5722', // Bold orange-red
    dark: '#d84315', // Deep orange
    light: '#ff7043', // Bright orange
  },
  accent: {
    main: '#1976d2', // Royal blue
    dark: '#0d47a1', // Navy blue
    light: '#42a5f5', // Sky blue
  },
  background: {
    default: '#f8fffe', // Clean white with hint of green
    paper: '#ffffff',
  },
  text: {
    primary: '#1b2e35', // Deep charcoal
    secondary: '#455a64', // Steel grey
  },
  gradient: {
    primary: 'linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)',
    secondary: 'linear-gradient(45deg, #ff5722 30%, #d84315 90%)',
    accent: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: 'cricket' | 'football' | 'night' | 'events';
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Cricket Match in Action',
    category: 'cricket',
    description: 'Professional cricket matches on our well-maintained turf'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Football Training Session',
    category: 'football',
    description: '7v7 football matches with proper goal posts and markings'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Night Match Under Floodlights',
    category: 'night',
    description: 'LED floodlights enable exciting night matches'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Cricket Practice Nets',
    category: 'cricket',
    description: 'Dedicated cricket nets for practice sessions'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Football Tournament',
    category: 'events',
    description: 'Corporate tournaments and special events'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Evening Football Match',
    category: 'night',
    description: 'Beautiful evening matches with mountain backdrop'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Team Celebration',
    category: 'events',
    description: 'Victory celebrations and team bonding moments'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Cricket Batting Practice',
    category: 'cricket',
    description: 'Individual and team practice sessions'
  }
];

const categories = [
  { key: 'all', label: 'All Photos', icon: null, color: colors.primary.main },
  { key: 'cricket', label: 'Cricket', icon: <CricketIcon />, color: colors.primary.main },
  { key: 'football', label: 'Football', icon: <FootballIcon />, color: colors.secondary.main },
  { key: 'night', label: 'Night Matches', icon: <NightIcon />, color: colors.accent.main },
  { key: 'events', label: 'Events', icon: <EventIcon />, color: colors.secondary.dark },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="View photos of Turf N Lonavala's cricket and football facilities. See our LED-lit night matches, tournaments, and world-class sports infrastructure in scenic Lonavala."
        keywords="turf gallery lonavala, cricket ground photos, football turf images, night matches, sports facility gallery, turf photos maharashtra"
        url="https://turfbook.com/gallery"
      />
      <Box sx={{ bgcolor: colors.background.default, minHeight: '100vh' }}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.background.paper,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: colors.gradient.primary,
              opacity: 0.8,
              zIndex: 1,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Typography
                variant="h2"
                component="h1"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: 'white',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                📸 Gallery
              </Typography>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.125rem', md: '1.5rem' },
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                Turf in Action • Night Matches • Events & Tournaments
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Gallery Content */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Category Filter */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: colors.primary.dark,
                }}
              >
                Browse by Category
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {categories.map((category) => (
                  <Chip
                    key={category.key}
                    icon={category.icon}
                    label={category.label}
                    onClick={() => setSelectedCategory(category.key)}
                    sx={{
                      py: 2,
                      px: 1,
                      fontSize: '1rem',
                      fontWeight: 600,
                      bgcolor: selectedCategory === category.key ? category.color : 'transparent',
                      color: selectedCategory === category.key ? 'white' : category.color,
                      border: `2px solid ${category.color}`,
                      '&:hover': {
                        bgcolor: category.color,
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Image Grid */}
            <MuiGrid container spacing={3}>
              {filteredImages.map((image, index) => (
                <MuiGrid size={{ xs: 12, sm: 6, md: 4 }} key={image.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                        },
                      }}
                      onClick={() => handleImageClick(image)}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          image={image.src}
                          alt={image.title}
                          sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            p: 2,
                          }}
                        >
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'white',
                                fontWeight: 700,
                                mb: 0.5,
                                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                              }}
                            >
                              {image.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'rgba(255,255,255,0.9)',
                                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                              }}
                            >
                              {image.description}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            bgcolor: 'rgba(255,255,255,0.9)',
                            borderRadius: '50%',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ZoomInIcon sx={{ color: colors.primary.main, fontSize: 20 }} />
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </MuiGrid>
              ))}
            </MuiGrid>

            {/* Call to Action */}
            <Paper
              sx={{
                mt: 8,
                p: 6,
                borderRadius: 4,
                textAlign: 'center',
                background: colors.gradient.primary,
                color: 'white',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Ready to Create Your Own Memories?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.125rem',
                  opacity: 0.9,
                }}
              >
                Book your slot now and be part of the action at Turf N Lonavala!
              </Typography>
              <Typography
                component="a"
                href="tel:+918468942754"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  bgcolor: 'rgba(255,255,255,0.2)',
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.3)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                📞 Call: 8468942754
              </Typography>
            </Paper>
          </motion.div>
        </Container>

        {/* Image Dialog */}
        <Dialog
          open={!!selectedImage}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              bgcolor: 'transparent',
              boxShadow: 'none',
              overflow: 'visible',
            },
          }}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            {selectedImage && (
              <>
                <IconButton
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    color: colors.text.primary,
                    zIndex: 1,
                    '&:hover': {
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  component="img"
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                />
                <Paper
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0 0 8px 8px',
                  }}
                >
                  <Typography variant="h6" fontWeight={700} color={colors.text.primary} sx={{ mb: 1 }}>
                    {selectedImage.title}
                  </Typography>
                  <Typography variant="body1" color={colors.text.secondary}>
                    {selectedImage.description}
                  </Typography>
                </Paper>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default Gallery;