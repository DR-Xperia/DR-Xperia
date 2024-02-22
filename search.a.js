// Define search engines
const searchEngines = [
  { name: "Google (US)", url: "https://www.google.com/search?q=" },
  { name: "Bing (US)", url: "https://www.bing.com/search?q=" },
  { name: "Brave (US)", url: "https://search.brave.com/search?q=" },
  { name: "StartPage (US)", url: "https://www.startpage.com/search?q=" },
  { name: "DuckDuckGo (US)", url: "https://duckduckgo.com/?q=" },
  { name: "Yahoo (US)", url: "https://search.yahoo.com/search?p=" },
  { name: "Ecosia (DE)", url: "https://www.ecosia.org/search?q=" }, // Germany
  { name: "Yandex (RU)", url: "https://www.yandex.ru/search/?text=" }, // Russia
  { name: "Baidu (CN)", url: "https://www.baidu.com/s?wd=" }, // China
  { name: "Naver (KR)", url: "https://search.naver.com/search.naver?query=" }, // South Korea
  { name: "Daum (KR)", url: "https://search.daum.net/search?q=" }, // South Korea
  { name: "Yandex (TR)", url: "https://yandex.com.tr/search/?text=" }, // Turkey
  { name: "Yandex (UA)", url: "https://yandex.com.ua/search/?text=" }, // Ukraine
  { name: "Yandex (KZ)", url: "https://yandex.kz/search/?text=" }, // Kazakhstan
  { name: "Yandex (BY)", url: "https://yandex.by/search/?text=" }, // Belarus
  { name: "Yandex (UZ)", url: "https://yandex.uz/search/?text=" } // Uzbekistan
  // Add more search engines as needed
];

// Create select element and options
const select = document.createElement("select");
select.id = "searchEngine";
searchEngines.forEach(engine => {
  const option = document.createElement("option");
  option.value = engine.url;
  option.textContent = engine.name;
  select.appendChild(option);
});

// Add event listener to search button
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchBTN");
  
  // Event listener for the search button
  searchButton.addEventListener("click", function() {
    const selectedEngine = select.value;
    const searchQuery = encodeURIComponent(searchInput.value);
    const searchURL = selectedEngine + searchQuery;
    // Redirect to the search engine's URL with the search query
    window.location.href = searchURL;
  });
});

// CREDITS BY DR XPERIA

// YOU CAN ADD CODES AS YOU WANT :)

// SEARCH.A.JS
