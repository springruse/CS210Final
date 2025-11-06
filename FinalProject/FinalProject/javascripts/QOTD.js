const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

async function qotd() {
    try {
        const response = await fetch(
            "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/today")
        );
        const wrapped = await response.json();
        const data = JSON.parse(wrapped.contents);
        document.getElementById("quote").textContent = `"${data[0].q}"`;
        document.getElementById("author").textContent = `— ${data[0].a}`;
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch QOTD:", error);
    }
}

getapi(api_url);
qotd();
