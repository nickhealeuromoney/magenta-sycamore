import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Container from './Container';
import Filters from './Filters';
import SwiperCard from './SwiperCard';

const CARDS = new Array(100).fill(0).map((_, index) => {
  return index % 2 === 0 ? {
    metadata: 'Today · 5 minute read',
    image: 'https://placebear.com/250/250',
    title: 'China’s digital currency: A small leap forward',
  } : {
    metadata: 'Today · 5 minute read',
    image: 'https://placebear.com/250/251',
    title: 'Top Trumps: Private banking and the US election',
  };
});

const SwiperSection = () => {
  const [cards, setCards] = useState(CARDS);

  function clearCard(index) {
    const newCards = [...cards];
    newCards[index].done = true;
    setCards([...newCards]);
  }

  function onClick() {
    navigate('/article/article');
  }

  function onSwipeLeft(index) {
    console.log('reject');
    clearCard(index);
  }

  function onSwipeRight(index) {
    console.log('accept');
    clearCard(index);
  }

  return (
    <>
      <Filters />
      <Container className="swiper-section">
        {cards.map((card, index) => {
          if (card.done) return null;
          const isFirstActiveCard = !cards[index - 1] || cards[index - 1].done;
          return (
            <div
              className={`swiper-section__card-slot ${isFirstActiveCard ? 'swiper-section__card-slot--front' : 'swiper-section__card-slot--behind'}`}
              key={index}
              style={{
                position: isFirstActiveCard ? 'static' : 'absolute',
              }}
            >
              <SwiperCard
                onClick={onClick}
                onSwipeLeft={isFirstActiveCard ? () => onSwipeLeft(index) : null}
                onSwipeRight={isFirstActiveCard ? () => onSwipeRight(index) : null}
                {...card}
              />
            </div>
          )
        })}
      </Container>
    </>
  );
}

export default SwiperSection;