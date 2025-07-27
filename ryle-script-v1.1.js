const allowedOrigins = [
  "https://RYLE-4.github.io"
];

if (!allowedOrigins.includes(location.origin)) {
    alert(`${location.origin} はホワイトリストに登録されていません。スクリプトを終了します。`);
    document.body.innerHTML = "";
    throw new Error("ホワイトリスト違反");
}

console.log("スクリプトが正しく実行されました。");
