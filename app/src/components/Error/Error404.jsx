import * as React from 'react';
import { Container, Typography } from '@mui/material';

const Error404 = () => (
  <Container>
    <Typography variant='h3' component='p' m={'30px 0'}>
      Oops !
    </Typography>
    <Typography variant='h3' component='h3' color={'error'}>
      404 ERROR...
    </Typography>
    <Typography variant='body1' component='p'>
      This page you've asked is not defined
    </Typography>
  </Container>
);

export default Error404;
