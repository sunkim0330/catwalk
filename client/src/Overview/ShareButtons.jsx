import React from 'react';
import * as Styles from './styledComponents.js';

const ShareButtons = () => {
  return (
    <Styles.Socials id="socials">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank"><button>Tweet Product</button></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </Styles.Socials>
  );
};

export default ShareButtons;
