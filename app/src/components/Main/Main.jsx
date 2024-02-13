import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Calendar } from './Calendar';
import styles from '../../styles/global.module.scss';

const Main = () => (
   <Container className={styles['container-main']} m={'120px'}>
      <Box mt={2} display="flex" justifyContent="space-between" >
         <Box>
            <Typography variant='h2' component='h2'>
               Main Page
            </Typography>
            <Typography variant='body1' component='p'>
               Welcome to the main page!
            </Typography>
         </Box>
         <Box>
            <Typography variant='p' component='p'>
               For checking authorization use the next data:
            </Typography>
            <Typography variant='h5' component='p'>
               login: admin
            </Typography>
            <Typography variant='h5' component='p'>
               password: 12345
            </Typography>
         </Box>
      </Box>
      <Box>
         <Calendar />
      </Box>
   </Container>
);

export default Main;
