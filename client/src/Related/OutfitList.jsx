import React, {useState, useEffect, useContext} from 'react';
import OutfitCard from './OutfitCardComponent';
import {RelatedListDiv, AddToOutfitButton, SecondaryTextTitle, PlusAnimation, ArrowWrapper, ArrowRightDiv, ArrowLeftDiv, ArrowIcon} from './styled.js';
import leftArrow from '../Overview/images/chevron-left.png';
import rightArrow from '../Overview/images/chevron-right.png';
import {Theme} from '../App.jsx';


const OutfitList = (props) => {
  let theme = useContext(Theme);

  let newStorage = window.localStorage;

  const [closet, setCloset] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (newStorage.getItem('closet')) {
      let localCloset = newStorage.getItem('closet');
      setCloset(JSON.parse(localCloset));
    } else {
      setCloset([]);
    }

  }, []);

  // Add Outfit card to Local Storage and update List

  const handleAdd = () => {
    // structure data for card
    let productCard = {};
    productCard.product = props.product;
    productCard.style = props.style;
    productCard.rating = props.rating;


    // if closet exists, add to the front of it. Otherwise, create the list
    if (newStorage.getItem('closet')) {
      let localCloset = JSON.parse(newStorage.getItem('closet'));

      // Checking for repeated items
      let alreadyExists = false;
      localCloset.forEach(item => {
        if (item.product.name === props.product.name) {
          alreadyExists = true;
        }
      });

      if (!alreadyExists) {
        localCloset.unshift(productCard);
        newStorage.setItem('closet', JSON.stringify(localCloset));
        updateCloset();
      } else {
        console.log('Already in the Outfit');
      }

    } else {
      let newCloset = [];
      newCloset.push(productCard);
      newStorage.setItem('closet', JSON.stringify(newCloset));
      updateCloset();
    }
  };

  const updateCloset = () => {
    let updatedCloset = newStorage.getItem('closet');
    setCloset(JSON.parse(updatedCloset));
    console.log(closet.length);
  };

  // Scroll functionality

  useEffect(() => {
    if (document.getElementById('OutfitList')) {
      setScrollWidth(document.getElementById('OutfitList').scrollWidth);
    }
    setScrollPosition(0);
  }, [closet]);


  useEffect(() => {
    if (document.getElementById('leftArrowOutfit') && document.getElementById('rightArrowOutfit')) {
      const list = document.getElementById('OutfitList');
      const leftArrow = document.getElementById('leftArrowOutfit');
      const rightArrow = document.getElementById('rightArrowOutfit');
      let end = scrollWidth - 1262;

      scrollPosition <= 0 ? leftArrow.setAttribute('style', 'visibility: hidden') : leftArrow.setAttribute('style', 'visibility: visible');
      scrollPosition >= end ? rightArrow.setAttribute('style', 'visibility: hidden') : rightArrow.setAttribute('style', 'visibility: visible');
    }

  }, [scrollPosition, scrollWidth]);


  const scrollBack = () => {
    const list = document.getElementById('OutfitList');
    list.scrollLeft -= 630;
    setScrollPosition(list.scrollLeft - 630);
  };

  const scrollForward = () => {
    const list = document.getElementById('OutfitList');
    list.scrollLeft += 630;
    setScrollPosition(list.scrollLeft + 630);
  };


  if (closet !== null) {
    return (
      <div>
        <SecondaryTextTitle color={theme.font}>YOUR OUTFIT</SecondaryTextTitle>

        <ArrowWrapper>

          <ArrowLeftDiv onClick={scrollBack} id='leftArrowOutfit'>
            <ArrowIcon className="fas fa-chevron-left fa-2x" color={theme.color}></ArrowIcon>
          </ArrowLeftDiv>

          <RelatedListDiv listLength={closet.length + 1} id="OutfitList" font={theme.header2}>
            <AddToOutfitButton onClick={handleAdd} color={theme.color} background={theme.background} font={theme.header1} shadow={theme.shadow}>
              <PlusAnimation background={theme.background} color={theme.color} >Add To Outfit</PlusAnimation>
            </AddToOutfitButton>
            {closet ? closet.map((piece, i) => { return <OutfitCard piece={piece} key={i} grid={i + 1} updateCloset={updateCloset} setCurrentProduct={props.setCurrentProduct}/>; }) : null}
          </RelatedListDiv>

          <ArrowRightDiv onClick={scrollForward} id='rightArrowOutfit'>
            <ArrowIcon className="fas fa-chevron-right fa-2x" color={theme.color}></ArrowIcon>
          </ArrowRightDiv>

        </ArrowWrapper>

      </div>
    );
  } else {
    return null;
  }
};

export default OutfitList;
