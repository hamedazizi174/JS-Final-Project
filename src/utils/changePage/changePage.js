export default function changePage(page, data) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.append(page(data));
}
