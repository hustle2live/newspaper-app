import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNews, increasePostsLimit, fetchNews } from '../../app/redux/newsSlice';

import {
   Container,
   Grid,
   Card,
   Typography,
   IconButton,
   CardContent,
   CardActions,
   Divider,
   Button
} from '@mui/material';

import Close from '@mui/icons-material/Close';

const News = () => {
   const { status, error, newsArray, postsLimit } = useSelector((state) => state.news);

   const dispatch = useDispatch();

   const handleDeleteStory = (id) =>
      window.confirm('are you sure to delete this News story?') ? dispatch(deleteNews(id)) : null;

   useEffect(() => {
      dispatch(fetchNews(postsLimit));
   }, [dispatch, postsLimit]);

   const StoryElementNews = () =>
      newsArray.length
         ? newsArray.map((item) => (
              <Grid item key={item.id} xs={1}>
                 <Card sx={{ minWidth: 245, height: '100%' }}>
                    <CardActions>
                       <IconButton
                          onClick={() => handleDeleteStory(item.id)}
                          sx={{
                             m: 0,
                             ml: 'auto',
                             '&:hover': {
                                backgroundColor: 'secondary.dark',
                                color: 'white',
                                opacity: 0.9
                             }
                          }}
                       >
                          <Close />
                       </IconButton>
                    </CardActions>
                    <CardContent>
                       <Typography
                          variant='h6'
                          component='h4'
                          mt={-5}
                          width={'90%'}
                          sx={{ '&:first-letter': { textTransform: 'uppercase' } }}
                       >
                          {item.title}
                       </Typography>
                       <Divider sx={{ m: 1, ml: 0 }} />
                       <Typography
                          variant='body1'
                          component='p'
                          sx={{ '&:first-letter': { textTransform: 'uppercase' } }}
                       >
                          {item.body}
                       </Typography>
                    </CardContent>
                 </Card>
              </Grid>
           ))
         : null;

   return (
      <Container>
         <Typography variant='h2' component='h2'>
            News Page
         </Typography>
         <Typography variant='body1' component='p'>
            Here are the latest news!
         </Typography>
         <Container>
            {status === 'loading' && (
               <Typography variant='h4' component='p' sx={{ position: 'absolute', left: '500px' }}>
                  Loading...
               </Typography>
            )}
            {error && (
               <Typography variant='h4' component='p'>
                  An error occured : {error}
               </Typography>
            )}
            {newsArray ? (
               <>
                  {' '}
                  <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} mt={1} mb={3}>
                     <StoryElementNews />
                  </Grid>
                  <Button
                     variant='outlined'
                     onClick={() => dispatch(increasePostsLimit())}
                     color='secondary'
                     sx={{
                        '&:hover': {
                           backgroundColor: 'secondary.dark',
                           color: 'white',
                           opacity: 0.9
                        },
                        mb: '120px'
                     }}
                  >
                     Get More
                  </Button>
               </>
            ) : (
               <Typography variant='h5' component='p'>
                  {status}
               </Typography>
            )}
         </Container>
      </Container>
   );
};

export default News;
