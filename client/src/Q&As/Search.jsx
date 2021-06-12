import React, {useState} from 'react';
import axios from 'axios';


const Search = ({ questions }) => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Have a question? Search for answers..."
      />
      {questions.filter((val) => {
        if (search === '' ) {
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
