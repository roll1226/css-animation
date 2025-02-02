import "./style.scss";

// クエリストリング取得
const url = new URL(window.location.href);
const params = url.searchParams;
const shouldShowBackground = params.get("background") === "true" || false;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="animation3">
    <div class="text__wrap">
      <div class="text">テ</div>
      <div class="text">テ</div>
      <div class="text">キ</div>
      <div class="text">キ</div>
      <div class="text">ス</div>
      <div class="text">ス</div>
      <div class="text">ト</div>
      <div class="text">ト</div>
    </div>

    ${
      shouldShowBackground
        ? `<div class="background"></div><div class="background"></div>`
        : ""
    }
  </div>
`;
