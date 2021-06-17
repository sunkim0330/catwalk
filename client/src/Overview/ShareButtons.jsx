import React, { useState, useContext } from 'react';
import * as Styles from './styledComponents.js';
import { Theme } from '../App.jsx';

const ShareButtons = () => {

  const [url, setUrl] = useState(window.location.href);
  const theme = useContext(Theme);

  return (
    <Styles.Socials id="socials">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" target="_blank"><Styles.Button>Tweet Product</Styles.Button></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      <a className="w-inline-block social-share-btn pin" href="http://pinterest.com/pin/create/button/?url=&description=" target="_blank" title="Pin it" onClick={() => {
        window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' + encodeURIComponent(document.title)); return false;
      }}>
        <Styles.Button>Pin Product</Styles.Button>
      </a>

      <a className="w-inline-block social-share-btn fb" href={url} title="Share on Facebook" target="_blank" onClick={() => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(document.URL)); return false;
      }}>
        <Styles.Button>The Facebook</Styles.Button>
      </a>
    </Styles.Socials>
  );
};

export default ShareButtons;
