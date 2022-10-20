import { Grid, Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Item } from '@mui/material';
import React from 'react';

const News = (props) => {
  const { title, urlToImage, publishedAt, content } = props.news;
  return (
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          title={title}
          subheader={publishedAt} />
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
  );
};

export default News;