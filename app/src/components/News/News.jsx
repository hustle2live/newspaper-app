import React from 'react';
import { useState, useEffect } from 'react';

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

  const handleDeleteStory = (id) => {
    console.log(id);
    if (window.confirm('are you sure to delete this News story?')) {
      deleteNews(id);
    } else console.log('cancel delete ' + id);
  };

  useEffect(() => getNews(), [storyLimit]);

  useEffect(() => filteringNewsState(), [deleteStoriesArray]);

  const StoryElementNews = () =>
    newsArray
      ? newsArray.map((item) => (
          <li className='news-list' key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <div
              className='delete-icon'
              onClick={() => handleDeleteStory(item.id)}
            >
              X
            </div>
          </li>
        ))
      : null;

  // console.log(newsArray);
  // console.log('storyLimit : ' + storyLimit);

  return (
    <div>
      <h1>News Page</h1>
      <p>Here are the latest news!</p>
      <div>
        {newsArray && storyLimit !== 0 ? (
          <>
            {' '}
            <ul className='news-section'>
              <StoryElementNews />
            </ul>
            <button onClick={() => setStoryLimit(storyLimit + 5)}>
              Get More
            </button>
          </>
        ) : (
          <p>{loadingStatusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default News;
