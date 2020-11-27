import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import Container from './Container';
import Filters from './Filters';
import SwiperCard from './SwiperCard';

const SwiperSection = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    async function getArticles() {
      const rawResponse = await fetch('http://localhost:3001/api/getUnmarkedArticles');
      const response = await rawResponse.json();
      setCards(response);
    }
    getArticles();
  }, []);

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
        <div className="swiper-section__inner">
          {!cards ? (
            <p>Loading...</p>
          ) : (
            <>
              {cards.map((card, index) => {
                if (card.done) return null;
                const isFirstActiveCard = !cards[index - 1] || cards[index - 1].done;
                return (
                  <div
                    className={`swiper-section__card-slot ${isFirstActiveCard ? 'swiper-section__card-slot--front' : 'swiper-section__card-slot--behind'}`}
                    key={index}
                    style={{
                      position: isFirstActiveCard ? 'static' : 'absolute',
                      zIndex: `-${index}`,
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
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default SwiperSection;