import * as React from 'react';
import { Container, Typography } from '@mui/material';

const Profile = () => (
  <Container>
    <Typography variant='h2' component='h2'>
      Profile Page
    </Typography>
    <Typography variant='body1' component='p'>
      This is your profile!
    </Typography>
  </Container>
);

export default Profile;
