import React, {useState} from 'react';
import axios from 'axios';
import * as Styles from './Styles.js';


const Search = ({ questions }) => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Styles.SearchBarInput onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Have a question? Search for answers..."
      />
      {questions.filter((val) => {
        if (search === '' || search.length < 3 ) {
          return null;
        } else if (val.question_body.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            {val.question_body}
          </div>
        );
      })}
    </div>
  );
};


export default Search;
