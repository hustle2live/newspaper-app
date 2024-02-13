import * as React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Box } from '@mui/material';

import { selectUser } from '../../app/redux/userSlice';
import UserPicture from '../../app/images/img_2.jpg';
import styles from '../../styles/global.module.scss';

const Profile = () => {
   const user = useSelector(selectUser);

   return (
      <Container>
         <Typography mt={2} variant='h2' component='h2'>
            Profile Page
         </Typography>
         <Typography variant='body1' component='p'>
            This is your profile!
         </Typography>
         <Box marginTop={'40px'}>
            <Typography className={styles.profile__userName}>
               Hello, {user.name[0].toUpperCase()}
               {user.name.slice(1)}
            </Typography>

            <div className={styles.profile__userPicture}>
               <img src={UserPicture} alt='user' />
            </div>
            <div className={styles.profile__userDescription}>
               <Typography className={styles.profile__userDescription_title}>Senior Front-End Developer</Typography>
               <Typography className={styles.profile__userDescription_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
               </Typography>
            </div>
         </Box>
      </Container>
   );
};

export default Profile;
