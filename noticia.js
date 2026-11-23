const API_KEY = "7e4c9f4a85c268f3de33b5edabdfd89f";

const params = new URLSearchParams({
  q: "AI",
  lang: "en",
  apikey: API_KEY,
});

const response = await fetch(`https://gnews.io/api/v4/search?${params}`);
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}

const { articles } = await response.json();
for (const article of articles) {
  console.log(article.title);
}