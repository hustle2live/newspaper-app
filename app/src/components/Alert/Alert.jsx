import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CustomizedSnackbars(props) {
   const { open, handleClose, loginMessage } = props;

   return (
      <Stack position={'absolute'} spacing={2} sx={{ width: '100%' }}>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={loginMessage || 'error'} sx={{ width: '100%' }}>
               {!loginMessage ? 'Invalid Username or Password!' : 'Wellcome to Profile!'}
            </Alert>
         </Snackbar>
      </Stack>
   );
}





// Alert viewers examples

/* <Alert severity="error">This is an error message!</Alert> */
/* <Alert severity="warning">This is a warning message!</Alert> */
/* <Alert severity="info">This is an information message!</Alert> */
/* <Alert severity="success">This is a success message!</Alert> */
