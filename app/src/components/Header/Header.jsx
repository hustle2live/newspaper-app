import * as React from 'react';

import { NavLink } from 'react-router-dom';
import { LoginForm } from '../Login/Login';
import { LogoutForm } from '../Login/Logout';

import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  Grid,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Link
} from '@mui/material';

const Header = (props) => {
  const { user, t, changeLanguage, currentLng } = props;

  const [alignment, setAlignment] = React.useState(currentLng);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
            <Breadcrumbs aria-label='breadcrumb' color='#fff'>
              <NavLink to='/'>
                <Link href='#' component='span' color='#fff'>
                  {t('main-link')}
                </Link>
              </NavLink>

              <NavLink to='/news'>
                <Link href='#' component='span' color='#fff'>
                  {t('news-link')}
                </Link>
              </NavLink>

              <NavLink to='/profile'>
                <Link href='#' component='span' color='#fff'>
                  {t('profile-link')}
                </Link>
              </NavLink>
            </Breadcrumbs>
          </Grid>

          <Grid item sm={5} m={'auto'} mb={1}>
            {user ? <LogoutForm t={t} /> : <LoginForm t={t} />}
          </Grid>

          <Grid item sm={1}>
            <ToggleButtonGroup
              color='warning'
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label='text alignment'
            >
              <ToggleButton
                value='ua'
                aria-label='ua-language'
                onClick={() => changeLanguage('ua')}
              >
                ua
              </ToggleButton>
              <ToggleButton
                value='en'
                aria-label='en-language'
                onClick={() => changeLanguage('en')}
              >
                en
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
