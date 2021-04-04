const input = document.querySelector("#input");
const button = document.querySelector("#submit");

let query = "";

input.addEventListener("change", (e) => {
  query = e.target.value;
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  getBooks(query);
});

async function getBooks(query) {
  // make http call
  const url = `https://goodreads-server-express--dotdash.repl.co/search/${query}`;
  const result = await fetch(url).then((res) => res.json());

  /* remove everything in result container */
  const resultContainer = document.querySelector("#result");
  resultContainer.innerHTML = "";

  /* use template as component for the bonus point :) */
  if ("content" in document.createElement("template")) {
    // update the dom on the result
    result.list.forEach(({ title, authorName, imageUrl }) => {
      const template = document
        .querySelector("template")
        .content.cloneNode(true);
      const authorNode = template.querySelector(".author");
      const imgNode = template.querySelector(".img");
      const titleNode = template.querySelector(".title");

      authorNode.textContent = authorName;
      imgNode.setAttribute("src", imageUrl);
      titleNode.textContent = title;

      resultContainer.append(template);
    });
  } else {
    // implement polly fill for old browsers
  }
}
