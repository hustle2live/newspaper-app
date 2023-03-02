import * as React from 'react';

import { NavLink } from 'react-router-dom';
import { LoginForm } from '../Login/Login';
import { LogoutForm } from '../Login/Logout';

import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  Button,
  Grid,
  Typography,
  Box,
  Link
} from '@mui/material';

const Header = (props) => {
  const user = props.login;
  const t = props.t;
  const changeLanguage = props.changeLanguage;

  return (
    <AppBar position='static' sx={{ width: `100%` }}>
      <Toolbar>
        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item sm={3}>
            <Typography variant='subtitle2' component='h1'>
              {t('welcome')}
            </Typography>
          </Grid>

          <Grid item sm={3}>
            <Breadcrumbs aria-label='breadcrumb'>
              <NavLink to='/'>{t('main-link')}</NavLink>

              <NavLink to='/news' underline='hover'>
                {t('news-link')}
              </NavLink>

              <NavLink to='/profile' underline='hover'>
                {t('profile-link')}
              </NavLink>
            </Breadcrumbs>
          </Grid>

          <Grid item sm={5} m={'auto'} mb={1}>
            {user ? <LogoutForm t={t} /> : <LoginForm t={t} />}
          </Grid>

          <Grid item sm={1}>
            <Box sx={({ m: 0 }, { p: 0 })}>
              <Button
                id='lng-ua'
                onClick={() => changeLanguage('ua')}
                variant='standart'
              >
                ua
              </Button>

              <Button
                id='lng-en'
                onClick={() => changeLanguage('en')}
                variant='standart'
              >
                en
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
