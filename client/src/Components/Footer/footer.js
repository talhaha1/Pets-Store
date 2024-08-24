import React from 'react';
import { Container, Grid, Typography, Link, IconButton, TextField, Button } from '@mui/material';
import { Facebook, Instagram, Twitter, Email } from '@mui/icons-material';
import logo from '../../Assets/Footer/pett.png';
import './footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#4A90E2', padding: '100px 0' }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} className="footer-logo">
            <img src={logo} alt="Logo" style={{ height: '60px' }} />
          </Grid>
          <Grid item xs={12} md={4} className="footer-info">
            <Typography variant="body1" style={{ color: 'white' }}>
              <Link href="/privacy-policy" color="inherit">
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body1" style={{ color: 'white' }}>Contact Information: (123) 456-7890</Typography>
            <Typography variant="body1" style={{ color: 'white' }}>Email: contact@example.com</Typography>
          </Grid>
          <Grid item xs={12} md={4} className="footer-social">
            <IconButton href="https://facebook.com" target="_blank" color="inherit">
              <Facebook style={{ color: 'white' }} />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit">
              <Instagram style={{ color: 'white' }} />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit">
              <Twitter style={{ color: 'white' }} />
            </IconButton>
            <IconButton href="mailto:contact@example.com" color="inherit">
              <Email style={{ color: 'white' }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} md={6} className="footer-signup">
            <Typography variant="h6" style={{ color: 'white' }}>Sign up for our newsletter</Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    sx={{ backgroundColor: 'white' }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" color="secondary" fullWidth> {/* Adjust color if needed */}
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6} className="footer-copyright">
            <Typography variant="body2" align="center" style={{ color: 'white' }}>
              &copy; {new Date().getFullYear()} Fluffy Friends. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

