const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const params = {
  query : '해리포터',
  size: '2'
}

const queryString = new URLSearchParams(params).toString();
(async () => {
  const response = await fetch(API_URL + queryString, {
    headers: {Authorization: 'KakaoAK cd071edfdaa8bae521ef800793875782'}
  });

  const data = await response.json();
  const {
    documents:[{title}]
  } = data;

  console.log(title);
})();