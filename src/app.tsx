import { EmblaOptionsType } from 'embla-carousel';
import { FC, useEffect, useState } from 'react';

import { Carousel } from './components/carousel/carousel.component';

const options: EmblaOptionsType = { align: 'start', loop: true };

export type PlaylistThumbnailProps = {
  height: number;
  url: string;
  width: number;
};

type PlaylistItemProps = {
  snippet: {
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      default: PlaylistThumbnailProps;
      high: PlaylistThumbnailProps;
      maxres: PlaylistThumbnailProps;
      medium: PlaylistThumbnailProps;
      standard: PlaylistThumbnailProps;
    };
    title: string;
    videoOwnerChannelTitle: string;
  };
};

export type PlaylistProps = {
  items: PlaylistItemProps[];
};

export const App: FC = () => {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState({} as PlaylistProps);

  const fetchData = async () => {
    const key = 'key=';

    const playlistPart = 'part=snippet';
    const playlistId = 'playlistId=PL6gYku79w8KX_L-lf2xa6Qg9fdFUZOA-3';
    const playlistMaxResults = 'maxResults=50';

    const loadPlaylistRequestUrl =
      'https://www.googleapis.com/youtube/v3/playlistItems';

    try {
      const loadPlaylistRequest = await fetch(
        `${loadPlaylistRequestUrl}?${playlistPart}&${playlistId}&${playlistMaxResults}&${key}`,
      );

      const playlist: PlaylistProps = await loadPlaylistRequest.json();

      setLoading(false);
      setPlaylist(playlist);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    loading === false && <Carousel playlist={playlist} options={options} />
  );
};
