import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { PlaylistThumbnailProps } from '../../app';

type CarouselItemProps = {
  videoId: string;
  thumbnail: PlaylistThumbnailProps;
  title: string;
  ownerChannelTitle: string;
};

export const CarouselItem: FC<CarouselItemProps> = ({
  ownerChannelTitle,
  thumbnail,
  title,
  videoId,
}) => {
  return (
    <Card
      variant="outlined"
      component="a"
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      sx={{
        borderWidth: 0,
        textDecoration: 'none',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={thumbnail.height}
          width={thumbnail.width}
          image={thumbnail.url}
          alt=""
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {ownerChannelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
