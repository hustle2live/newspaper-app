import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { Button, Typography, Box, Stack, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

export const LogoutForm = (props) => {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   const t = props.t;

   const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      localStorage.removeItem('user');
   };

   return (
      <Stack direction='row' spacing={1} justifyContent={'flex-end'} sx={{ p: 0, pt: 1, m: 0, mt: 1 }}>
         <Box>
            <Stack direction='row' spacing={2}>
               <Typography variant='p' copmonent='span' alignSelf='center'>
                  Привіт, {user.name}
               </Typography>
               <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
            </Stack>
         </Box>

         <Box sx={{ pb: 0 }}>
            <Button id='logout-btn' size='small' variant='standart' onClick={(e) => handleLogout(e)}>
               {t('logout')}
            </Button>
         </Box>
      </Stack>
   );
};
