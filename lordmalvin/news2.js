const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "buisness",
    desc: "Get the latest buisness news headlines.",
    category: "search",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
    const apiKey="aea4ce0e9a2d4ae382a59dbbe6f5de4a";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
        const articles = response.data.articles;
        if (!articles.length) return reply("No news articles found.");

        // Send each article as a separate message with image and title
        for (let i = 0; i < Math.min(articles.length, 5); i++) {
            const article = articles[i];
            let message = `
➣ 📰 ${article.title}

➣ ⚠️ ${article.description}

➣ 🔗 ${article.url}

  > 𝙼𝙰𝙻𝚅𝙸𝙽 ᴍᴅ ɴᴇᴡꜱ ᴡᴇʙ
            `;

            console.log('Article URL:', article.urlToImage); // Log image URL for debugging

            if (article.urlToImage) {
                // Send image with caption
                await conn.sendMessage(from, { image: { url: article.urlToImage }, caption: message });
            } else {
                // Send text message if no image is available
                await conn.sendMessage(from, { text: message });
            }
        };
    } catch (e) {
        console.error("Error fetching news:", e);
        reply("Could not fetch news. Please try again later.");
    }
});