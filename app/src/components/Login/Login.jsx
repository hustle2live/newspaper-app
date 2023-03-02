import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../features/userSlice';
import { database as db } from '../../app/database';
import { validateUser } from '../../app/validate';
import { Button, TextField, Typography, Box, Stack } from '@mui/material';

import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'lightblue'
  },
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
});

export const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const t = props.t;

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: username,
      password: password
    };

    if (validateUser(db, userData)) {
      dispatch(login(userData));
      localStorage.setItem('user', JSON.stringify(userData));
      return navigate('/profile');
    }

    return alert(t('login-error'));
  };

  return (
    <Stack direction='row' spacing={1} justifyContent={'flex-end'}>
      <Box mb={0} mt={'auto'}>
        <Typography variant='body1' component='p' sx={{ p: 1 }}>
          {t('login')} {':'}
        </Typography>
      </Box>

      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '120' }
        }}
        noValidate
        autoComplete='off'
      >
        <CssTextField
          label={t('username')}
          type='name'
          id='userName'
          value={username}
          onChange={(e) => onChangeUsername(e)}
          variant='outlined'
          sx={{ width: 120 }}
          size='small'
        />

        <CssTextField
          label={t('password')}
          type='password'
          id='userPassword'
          value={password}
          onChange={(e) => onChangePassword(e)}
          variant='outlined'
          sx={{ width: 120 }}
          size='small'
        />
      </Box>

      <Box alignSelf={'flex-end'}>
        <Button
          id='submit-btn'
          size='small'
          variant='standart'
          onClick={(e) => handleSubmit(e)}
          sx={{ pb: 1 }}
        >
          {t('submit')}
        </Button>
      </Box>
    </Stack>
  );
};
