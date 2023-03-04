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

// import { styled } from '@mui/material/styles';

// const StyledTypography = styled(Typography)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     color: 'orange',
//     paddingTop: '15px'
//   }
// }));

// const StyledGrid = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     color: 'orange',
//     spacing: 3
//   }
// }));

const Header = (props) => {
  const { user, t, changeLanguage, currentLng } = props;

  const [alignment, setAlignment] = React.useState(currentLng);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <AppBar position='static' sx={{ width: `100%` }} color={'secondary'}>
      <Toolbar
        sx={{
          p: { xs: 0.5, sm: 1 }
        }}
      >
        <Grid
          container
          sx={{
            spacing: { xs: 0, sm: 1, md: 2 }
          }}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item xs={6} sm={3}>
            <Typography variant='subtitle2' component='h1' p={1}>
              {t('welcome')}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
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

          <Grid
            item
            xs={8}
            sm={4.5}
            md={5}
            m={'auto'}
            mb={1}
            sx={{ order: { xs: -1, sm: 0 } }}
          >
            {user ? <LogoutForm t={t} /> : <LoginForm t={t} />}
          </Grid>

          <Grid
            item
            xs={4}
            sm={1.5}
            md={1}
            sx={{
              order: { xs: -2, sm: 0 }
            }}
          >
            <ToggleButtonGroup
              color='warning'
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label='language select'
              sx={{
                padding: { sm: 0 },
                margin: { xs: 1, sm: 'auto' }
              }}
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
