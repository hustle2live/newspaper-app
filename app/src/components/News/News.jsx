import * as React from 'react';
import { useState, useEffect } from 'react';

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
  const [newsArray, setNewsArray] = useState([]);
  const [storyLimit, setStoryLimit] = useState(5);
  const [loadingStatusMessage, setloadingStatusMessage] =
    useState('Loading ...');
  const [deleteStoriesArray, setDeleteStoriesArray] = useState([]);

  const getNews = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${storyLimit}`)
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then((json) =>
        deleteStoriesArray.length
          ? filteringNewsState(json)
          : setNewsArray(json)
      )
      .catch((error) => {
        console.log(error);
        setloadingStatusMessage(
          'Oops! Something goes wrong on Loading. We have Error...'
        );
      });
  };

  const filteringNewsState = (json = newsArray) => {
    if (deleteStoriesArray.length) {
      setNewsArray(
        json.filter(({ id }) =>
          deleteStoriesArray.every((deleteStoryId) => deleteStoryId !== id)
        )
      );
    }
  };

  const deleteNews = (postId) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    }).then(setDeleteStoriesArray([...deleteStoriesArray, postId]));

  const handleDeleteStory = (id) =>
    window.confirm('are you sure to delete this News story?')
      ? deleteNews(id)
      : null;

  useEffect(() => getNews(), [storyLimit]);

  useEffect(() => filteringNewsState(), [deleteStoriesArray]);

  const StoryElementNews = () =>
    newsArray
      ? newsArray.map((item) => (
          <Grid item key={item.id} xs={1}>
            <Card sx={{ minWidth: 245, height: '100%' }}>
              <CardActions>
                <IconButton
                  onClick={() => handleDeleteStory(item.id)}
                  sx={{
                    m: 0,
                    ml: 'auto',
                    // backgroundColor: 'primary.dark',
                    // color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      color: 'black',
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
        {newsArray && storyLimit !== 0 ? (
          <>
            {' '}
            <Grid
              container
              columns={{ xs: 1, sm: 2, md: 3 }}
              spacing={2}
              mt={1}
              mb={3}
            >
              <StoryElementNews />
            </Grid>
            <Button
              variant='outlined'
              onClick={() => setStoryLimit(storyLimit + 5)}
            >
              Get More
            </Button>
          </>
        ) : (
          <p>{loadingStatusMessage}</p>
        )}
      </Container>
    </Container>
  );
};

export default News;
