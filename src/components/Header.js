import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Header() {
  const { t , i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to="/"
                // onClick={() => { window.location.href = '/'; }}
              >
                {t("Home")}
              </Button>

              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to="/about"
                // onClick={() => { window.location.href = '/about'; }}
              >
                {t("About")}
              </Button>

              <Button
                sx={{ my: 2, color: 'white', display: 'block', ml: 100 }}
                onClick={() => changeLanguage('fi')}
                id="fi"
              >
                FI
              </Button>
              
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => changeLanguage('en')}
                id="en"
              >
                EN
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

//export default Header
export default function App() {
  return (
    <Suspense fallback="loading">
      <Header />
    </Suspense>
  );
}