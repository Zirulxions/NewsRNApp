const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8c7a9a3e4f434c2596cdabcef3e3c8ca";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
