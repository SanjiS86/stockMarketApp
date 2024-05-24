function fetchData() {
  const apiKey = "";
  const symbolInput = document
    .getElementById("tickerInput")
    .value.toUpperCase();
  const symbol = symbolInput.trim();

  fetch(
    `https://financialmodelingprep.com/api/v4/price-target-consensus?symbol=${symbol}&apikey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const targetPrice = data[0].targetHigh;
      const targetPriceElement = document.getElementById("targetPrice");
      targetPriceElement.innerText = `Target Price: $${targetPrice}`;
    })
    .catch((error) => {
      console.error("Error fetching target price data:", error);
      const targetPriceElement = document.getElementById("targetPrice");
      targetPriceElement.innerText =
        "Failed to fetch target price. Please try again later.";
    });

  fetch(
    `https://financialmodelingprep.com/api/v4/historical/social-sentiment?symbol=${symbol}&page=0&apikey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      const twitterSentiment = data[0].twitterSentiment;
      const twitterComments = data[0].twitterComments;
      const twitterLikes = data[0].twitterLikes;
      const twitterPosts = data[0].twitterPosts;

      const stocktwitsSentiment = data[0].stocktwitsSentiment;
      const stocktwitsComments = data[0].stocktwitsComments;
      const stocktwitsLikes = data[0].stocktwitsLikes;
      const stocktwitsPosts = data[0].stocktwitsPosts;

      const sentimentElement = document.getElementById("socialSentiment");
      const commentsElement = document.getElementById("comments");
      const likesElement = document.getElementById("likes");
      const postsElement = document.getElementById("posts");

      const stocktwitsSentimentElement = document.getElementById(
        "stocktweetsSentiment"
      );
      const stocktwitsCommentsElement = document.getElementById("stComments");
      const stocktwitsLikesElement = document.getElementById("stLikes");
      const stocktwitsPostsElement = document.getElementById("stPosts");

      if (typeof twitterSentiment !== "undefined") {
        sentimentElement.innerText = `twitter Sentiment: ${twitterSentiment}`;
        commentsElement.innerText = `twitter Comments: ${twitterComments}`;
        likesElement.innerText = `twitter Likes: ${twitterLikes}`;
        postsElement.innerText = `twitter Posts: ${twitterPosts}`;

        stocktwitsSentimentElement.innerText = `stocktwits Sentiment: ${stocktwitsSentiment}`;
        stocktwitsCommentsElement.innerText = `stocktwits Comments: ${stocktwitsComments}`;
        stocktwitsLikesElement.innerText = `stocktwits Likes: ${stocktwitsLikes}`;
        stocktwitsPostsElement.innerText = `stocktwits Posts: ${stocktwitsPosts}`;
      } else {
        sentimentElement.innerText = "Social Sentiment data not available.";
      }
    })
    .catch((error) => {
      console.error("Error fetching social sentiment data:", error);
      const sentimentElement = document.getElementById("socialSentiment");
      sentimentElement.innerText =
        "Failed to fetch social sentiment. Please try again later.";
    });
  fetch(
    `https://financialmodelingprep.com/api/v3/historical/earning_calendar/${symbol}?apikey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const estimateNextQ = data[3].epsEstimated;
      const estimatelastQ = data[4].epsEstimated;
      const estimatethreeMonthAgo = data[5].epsEstimated;
      const epsNextQ = data[3].eps;
      const epsLastQ = data[4].eps;
      const epsthreeMonthAgo = data[5].eps;
      const dateNextQ = data[3].date;
      const dateLastQ = data[4].date;
      const datethreeMonthAgo = data[5].date;

      const nextDate = document.getElementById("nextQDate");
      const lastDate = document.getElementById("lastQDate");
      const threeMonthAgo = document.getElementById("threeMagoDate");
      const epsNext = document.getElementById("epsNextQ");
      const epsLast = document.getElementById("epsLastQ");
      const epsthreeMonth = document.getElementById("epsthreeMAgo");
      const estimateNext = document.getElementById("estimateNextQ");
      const estimateLast = document.getElementById("estimateLastQ");
      const estimatethreeM = document.getElementById("estimatethreeMAgo");

      if (typeof data[2].epsEstimated !== "undefined") {
        nextDate.innerText = `Next date: ${dateNextQ}`;
        lastDate.innerText = `Last date: ${dateLastQ}`;
        threeMonthAgo.innerText = `Three mongh ago: ${datethreeMonthAgo}`;
        epsNext.innerText = `EPS next: ${epsNextQ}`;
        epsLast.innerText = `EPS last: ${epsLastQ}`;
        epsthreeMonth.innerText = `EPS 3 month ago: ${epsthreeMonthAgo}`;
        estimateNext.innerText = `EPS estimate Next: ${estimateNextQ}`;
        estimateLast.innerText = `EPS estimate Last: ${estimatelastQ}`;
        estimatethreeM.innerText = `EPS estimate 3 month ago: ${estimatethreeMonthAgo}`;
      } else {
        nextDate.innerText = "data not available.";
      }
    })
    .catch((error) => {
      console.error("Error fetching target price data:", error);
      const nextDate = document.getElementById("nextQDate");
      nextDate.innerText = "Failed to fetch data";
    });
}
