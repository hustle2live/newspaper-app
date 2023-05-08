import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Calendar } from './Calendar';
import styles from '../../styles/global.module.scss';

const Main = () => (
   <Container className={styles['container-main']} m={'120px'}>
      <Box>
         <Typography variant='h2' component='h2'>
            Main Page
         </Typography>
         <Typography variant='body1' component='p'>
            Welcome to the main page!
         </Typography>
      </Box>
      <Box>
         <Calendar />
      </Box>
   </Container>
);

export default Main;
