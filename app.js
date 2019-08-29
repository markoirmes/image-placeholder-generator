function generateImage() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;

  if (width > 1920 || height > 1080 || width <= 0 || height <= 0) {
    alert(
      "Max width 1920. Max height 1080. Zero and negative values not allowed."
    );
  } else {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.setAttribute("width", `${width}`);
    canvas.setAttribute("height", `${height}`);

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, `${width}`, `${height}`);
    ctx.font = "50px Open Sans";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(
      `${width}` + "x" + `${height}`,
      `${width}` / 2,
      `${height}` / 2,
      `${width}`
    );
  }
}
