import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';

import { PlaylistProps } from '../../app';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './carousel-arrow-buttons';
import { CarouselItem } from './carousel-item';

type CarouselProps = {
  playlist: PlaylistProps;
  options?: EmblaOptionsType;
};

export const Carousel: FC<CarouselProps> = ({ playlist, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {playlist.items.map(({ snippet }) => (
            <div className="embla__slide" key={snippet.resourceId.videoId}>
              <CarouselItem
                videoId={snippet.resourceId.videoId}
                thumbnail={snippet.thumbnails.default}
                title={snippet.title}
                ownerChannelTitle={snippet.videoOwnerChannelTitle}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};
