import React from 'react';
import * as Styles from './styledComponents.js';

const ShareButtons = () => {
  return (
    <Styles.Socials id="socials">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank"><Styles.Twitter>Tweet Product</Styles.Twitter></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      <a className="w-inline-block social-share-btn pin" href="http://pinterest.com/pin/create/button/?url=&description=" target="_blank" title="Pin it" onClick={() => {
        window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' + encodeURIComponent(document.title)); return false;
      }}>
        <Styles.Pinterest>Pin Product</Styles.Pinterest>
      </a>

      <a className="w-inline-block social-share-btn fb" href={window.location.href} title="Share on Facebook" target="_blank" onClick={() => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;
      }}>
        <Styles.Facebook>The Facebook</Styles.Facebook>
      </a>
    </Styles.Socials>
  );
};

export default ShareButtons;
