import React, {useEffect, useState, useContext} from 'react';
import Card from './CardComponent.jsx';
import {RelatedListDiv, SecondaryTextTitle, ArrowWrapper, ArrowRightDiv, ArrowLeftDiv, ArrowIcon} from './styled.js';
import axios from 'axios';
import leftArrow from '../Overview/images/chevron-left.png';
import rightArrow from '../Overview/images/chevron-right.png';
import {Theme} from '../App.jsx';



const RelatedList = (props) => {
  let theme = useContext(Theme);

  const [isLoading, setIsLoading] = useState([true]);
  const [productIds, setUpdateIds] = useState([]);
  const [relatedObjects, setUpdateObjects] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [relatedMetaData, setRelatedMetaData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (props.product.id) {
      axios.get(`/products/${props.product.id}/related`)
        .then((relatedIds) => {
          let uniqueIds = [...new Set(relatedIds.data)];
          return setUpdateIds(uniqueIds);
        });

    }
  }, [props.product.id]);

  useEffect(() => {
    if (productIds) {


      Promise.all(
        productIds.map((id) => {
          return axios.get(`/products/${id}`)
            .then((response) => {
              return response.data;
            });
        })
      )
        .then((objects) => {
          setUpdateObjects(objects);
        });



      Promise.all(
        productIds.map((id) => {
          return axios.get(`/products/${id}/styles`)
            .then((response) => {
              return response.data;
            });
        })
      )
        .then((objectsStyles) => {
          let defaultStyles = [];
          objectsStyles.forEach((object) => {
            let productId = object.product_id;
            let thereIsNoDefault = true;
            object.results.forEach(style => {
              if (style['default?']) {
                defaultStyles.push(style);
                thereIsNoDefault = false;
              }
            });
            if (thereIsNoDefault) {
              defaultStyles.push(object.results[0]);
            }
          });

          setRelatedStyles(defaultStyles);
        });



      Promise.all(
        productIds.map((id) => {
          return axios.get('/reviews/meta', {params: { 'product_id': id }})
            .then((response) => {
              return response.data;
            });
        })
      )
        .then((objects) => {
          setRelatedMetaData(objects);
        });


    }
  }, [productIds]);


  useEffect(() => {
    const list = document.getElementById('RelatedList');
    const leftArrow = document.getElementById('leftArrowRelated');
    const rightArrow = document.getElementById('rightArrowRelated');


    if (scrollPosition === 0) {
      leftArrow.setAttribute('style', 'visibility: hidden');
    } else {
      leftArrow.setAttribute('style', 'visibility: visible');
    }

    if (scrollPosition === list.scrollWidth) {
      rightArrow.setAttribute('style', 'visibility: hidden');
    } else {
      rightArrow.setAttribute('style', 'visibility: visible');
    }


  }, [scrollPosition]);


  const scrollBack = () => {
    const list = document.getElementById('RelatedList');
    console.log(list.scrollLeft);
    list.scrollLeft -= 630;
    setScrollPosition(list.scrollLeft);
    console.log(list.scrollLeft);
  };

  const scrollForward = () => {
    const list = document.getElementById('RelatedList');
    console.log(list.scrollLeft);
    list.scrollLeft += 630;
    setScrollPosition(list.scrollLeft);
    console.log(list.scrollLeft);
  };







  return (
    <div>
      <SecondaryTextTitle color={theme.font}>RELATED PRODUCTS</SecondaryTextTitle>

      <ArrowWrapper>

        <ArrowLeftDiv onClick={scrollBack} id="leftArrowRelated">
          <ArrowIcon className="fas fa-chevron-left fa-2x" color={theme.color} ></ArrowIcon>
        </ArrowLeftDiv>

        <RelatedListDiv listLength={productIds.length} id="RelatedList">
          {relatedObjects.map((object, i) => { return <Card product={object} style={relatedStyles[i]} metaData={relatedMetaData[i]} key={object.id} setCurrentProduct={props.setCurrentProduct} currentName={props.product.name} currentChar={props.currentChar} grid={i}/>; })}
        </RelatedListDiv>

        <ArrowRightDiv onClick={scrollForward} id="rightArrowRelated">
          <ArrowIcon className="fas fa-chevron-right fa-2x" color={theme.color}></ArrowIcon>
        </ArrowRightDiv>

      </ArrowWrapper>
    </div>
  );

};




export default RelatedList;
