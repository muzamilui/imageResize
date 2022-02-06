function process() {
  const file = document.querySelector("#upload").files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    const imgElement = document.createElement("img");
    // console.log(e.target.result)
    imgElement.src = e.target.result;
    document.querySelector("#input").src = e.target.result;
    imgElement.onload = function (event) {
      const canvas = document.createElement("canvas");
      const max_width = 600;
      const scaleSize = max_width / event.target.width;
      canvas.width = max_width;
      canvas.height = event.target.height * scaleSize;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(event.target, 0, 0, canvas.width, canvas.height);
      //  console.log(event.target)
      const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
      document.querySelector("#output").src = srcEncoded;
    };
  };
  // console.log(file)
}
