import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { Container, Button } from '@mui/material';
import styles from '../../styles/global.module.scss';

export const Calendar = () => {
   const today = new Date().toISOString().slice(0, 10);
   const [dateValue, setDateValue] = React.useState(dayjs(today));

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <Container className={styles.eventsCalendar} label='Events Calendar'>
            <Button className={styles.eventsCalendar__button_reset} onClick={() => setDateValue(dayjs(today))}>
               Reset
            </Button>
            <DateCalendar value={dateValue} onChange={(newValue) => setDateValue(newValue)} />
         </Container>
      </LocalizationProvider>
   );
};
