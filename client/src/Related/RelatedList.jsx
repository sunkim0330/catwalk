import React, {useEffect, useState} from 'react';
import Card from './CardComponent.jsx';
import axios from 'axios';


const RelatedList = (props) => {
  const [productIds, setUpdateIds] = useState([]);
  const [relatedObjects, setUpdateObjects] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [relatedMetaData, setRelatedMetaData] = useState([]);

  useEffect(() => {
    if (props.product.id) {
      axios.get(`/products/${props.product.id}/related`)
        .then((relatedIds) => {
          return setUpdateIds(relatedIds.data);
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
                defaultStyles.push({[productId]: style});
                thereIsNoDefault = false;
              }
            });
            if (thereIsNoDefault) {
              defaultStyles.push({[productId]: object.results[0]});
            }
          });

          setRelatedStyles(defaultStyles);
        });

      Promise.all(
        productIds.map((id) => {
          return axios.get('/reviews/meta', {params: { product_id: id }})
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


  return (
    <div>
      {relatedObjects.map((object, i) => { return <Card product={object} style={relatedStyles[i]} metaData={relatedMetaData[i]} key={object.id} setCurrentProduct={props.setCurrentProduct}/>; })}
    </div>
  );
};


export default RelatedList;