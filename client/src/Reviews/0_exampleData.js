/* eslint-disable camelcase */

// GET /reviews product_id 19089
var example = {
  product: '19089',
  page: 0,
  count: 100,
  results: [
    {
      review_id: 288552,
      rating: 5,
      summary: 'PERFECT Camouflage!!',
      recommend: true,
      response: null,
      body: 'This camouflage onesie envelops my entire body and allows me to perfectly blend into the environment. My wife hasn\'t been able to find me for weeks!!!',
      date: '2021-03-09T00:00:00.000Z',
      reviewer_name: 'Tech_Debt',
      helpfulness: 20,
      photos: [
        {
          id: 496626,
          url: 'zsefvzuskehbfvzs'
        }
      ]
    }
  ]
};


// GET meta
var meta = {
  product_id: '19089',
  ratings: {
    1: '12',
    2: '5',
    3: '9',
    4: '10',
    5: '24'
  },
  recommended: {
    false: '21',
    true: '39'
  },
  characteristics: {
    Fit: {
      id: 64059,
      value: '2.3823529411764706'
    },
    Length: {
      id: 64060,
      value: '2.2647058823529412'
    },
    Comfort: {
      id: 64061,
      value: '2.9117647058823529'
    },
    Quality: {
      id: 64062,
      value: '2.5882352941176471'
    }
  }
};