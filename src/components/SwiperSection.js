import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import urls from '../utils/urls';
import Container from './Container';
import Filters from './Filters';
import SwiperCard from './SwiperCard';
import apiFormatter from '../utils/apiFormatter';

// const CARDS = new Array(100).fill(0).map((_, index) => {
//   return index % 2 === 0 ? {
//     id: index,
//     metadata: 'Today · 5 minute read',
//     image: 'https://placebear.com/250/250',
//     title: 'China’s digital currency: A small leap forward',
//   } : {
//     id: index,
//     metadata: 'Today · 5 minute read',
//     image: 'https://placebear.com/250/251',
//     title: 'Top Trumps: Private banking and the US election',
//   };
// });

const SwiperSection = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    async function getCards() {
      try {
        const rawResponse = await fetch(urls.unmarkedArticles);
        const response = await rawResponse.json();
        setCards(apiFormatter(response));
      } catch(e) {
        console.error(e);
      }
    }
    getCards();
  }, []);

  function clearCard(index) {
    const newCards = [...cards];
    newCards[index].done = true;
    setCards([...newCards]);
  }

  function onClick(id) {
    navigate(`/article/${id}`);
  }

  async function onSwipeLeft(index, id) {
    clearCard(index);
    try {
      await fetch(urls.deleteArticle, {
        method: 'PUT',
        body: JSON.stringify({ id })
      });
    } catch(e) {
      console.error(e);
    }
  }

  async function onSwipeRight(index, id) {
    clearCard(index);
    try {
      await fetch(urls.saveArticle, {
        method: 'PUT',
        body: JSON.stringify({ id })
      });
    } catch(e) {
      console.error(e);
    }
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
                    key={card.Id}
                    style={{
                      position: isFirstActiveCard ? 'static' : 'absolute',
                      zIndex: `-${index}`,
                    }}
                  >
                    <SwiperCard
                      onClick={() => onClick(card.Id)}
                      onSwipeLeft={isFirstActiveCard ? () => onSwipeLeft(index, card.Id) : null}
                      onSwipeRight={isFirstActiveCard ? () => onSwipeRight(index, card.Id) : null}
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