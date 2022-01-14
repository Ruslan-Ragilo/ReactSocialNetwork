import h from './News.module.css';
// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2021-12-28&' +
//           'sortBy=popularity&' +
//           'apiKey=ba4dbeb1da9f4a01a0f5536da635a878';

//     var req = new Request(url);

//     fetch(req)
//         .then(function(response) {
//             console.log(response.json());
//         });

// const API_KEY = 'ba4dbeb1da9f4a01a0f5536da635a878',
//       API_URL_POPULAR = `https://newsapi.org/v2/everything?q=Apple&from=2022-01-03&sortBy=popularity&apiKey=${API_KEY}`;

// getMuvies(API_URL_POPULAR);

// async function getMuvies (url) {
//     const resp = await fetch(url, {
//         headers: {
//             "Content-type": "application/json",
//             "X-API-KEY": API_KEY,
//         }
//     })
//     const respData = await resp.json();
//     console.log(respData)
//     // showMuvies(respData);
// }

// const API_KEY = '66bef919-8103-474b-95f8-d133153f6421',
//       API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

// getMuvies(API_URL_POPULAR);

// async function getMuvies (url) {
//     const resp = await fetch(url, {
//         headers: {
//             "Content-type": "application/json",
//             "X-API-KEY": API_KEY,
//         }
//     })
//     const respData = await resp.json();
//     console.log(respData);
// }

const News = (props, respData) => {
    
        
    return (
        <div className={h.news}>
            <div className='wrapperNews'>
                <div className='imgNews'>
                    
                </div>
            </div>
        </div>
    )
}

export default News;