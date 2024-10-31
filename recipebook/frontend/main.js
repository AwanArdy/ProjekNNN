// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

*/

async function loadPage(page) {
  try {
    const response = await fetch(`./pages/${page}/${page}.html`);
    if (!response.ok) throw new Error("Page not found");
    const content = await response.text();
    document.getElementById("content").innerHTML = content;

    const existingStylesheet = document.getElementById("page-stylesheet");
    if (existingStylesheet) existingStylesheet.remove();

    const newStylesheet = document.createElement("link");
    newStylesheet.rel = "stylesheet";
    newStylesheet.href = `./pages/${page}/${page}.css`;
    newStylesheet.id = "page-stylesheet";
    document.head.appendChild(newStylesheet);

    const { default: pageModule } = await import(`./pages/${page}/${page}.js`).catch(() => null);
    if (pageModule && typeof pageModule.init === 'function') {
      pageModule.init(); // Inisialisasi halaman jika ada fungsi init
    }
  } catch (error) {
    console.error("Error loading page:", error);
    document.getElementById("content").innerHTML = "<p>Page not found.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage("welcome");
});

