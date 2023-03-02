import * as React from 'react';
import { useState, useEffect } from 'react';

import { Container, Grid, Typography, IconButton } from '@mui/material';

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
          <Grid item key={item.id}>
            <Typography variant='h4' component='title'>
              {item.title}
            </Typography>
            <Typography variant='body1' component='p'>
              {item.body}
            </Typography>
            <IconButton onClick={() => handleDeleteStory(item.id)}>
              <Close />
            </IconButton>
          </Grid>
        ))
      : null;

  // console.log(newsArray);
  // console.log('storyLimit : ' + storyLimit);

  return (
    <Container>
      <h1>News Page</h1>
      <p>Here are the latest news!</p>
      <div>
        {newsArray && storyLimit !== 0 ? (
          <>
            {' '}
            <Grid container>
              <StoryElementNews />
            </Grid>
            <button onClick={() => setStoryLimit(storyLimit + 5)}>
              Get More
            </button>
          </>
        ) : (
          <p>{loadingStatusMessage}</p>
        )}
      </div>
    </Container>
  );
};

export default News;
