const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

async function qotd(){
  const response = await fetch("https://zenquotes.io/api/today");
  const data = await response.json();
  document.getElementById("quote").textContent = `"${data[0].q}"`;
  document.getElementById("author").textContent = `— ${data[0].a}`;
}


getapi(api_url);
qotd();
