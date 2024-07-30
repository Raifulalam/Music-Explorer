fetchNews();
const apiKey = 'C1YGT64YuCIK7NbcCbLUSyNcZRlKBkUK0pbEMstcTzTrsuoX';
const apiUrl = `https://api.currentsapi.services/v1/latest-news?category=music&apiKey=${apiKey}`;
const newsContainer = document.getElementById('news');

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayNews(data.news);
    } catch (error) {
        console.error('Error fetching the news:', error);
        newsContainer.innerHTML = '<p>Sorry, there was an error loading the news.</p>';
    }
}

function displayNews(articles) {
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news available.</p>';
        return;
    }

    newsContainer.innerHTML = articles.map(article => `
        <div class="news-item">
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p>${article.description || 'No description available.'}</p>
        </div>
    `).join('');
}

fetchNews();
