import React from 'react';
import * as Styles from './styledComponents.js';

const ShareButtons = () => {
  return (
    <Styles.Socials id="socials">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank"><Styles.Twitter>Tweet Product</Styles.Twitter></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      <Styles.Pinterest>Pin Product</Styles.Pinterest>
      <Styles.Facebook>The Facebook</Styles.Facebook>
    </Styles.Socials>
  );
};

export default ShareButtons;
