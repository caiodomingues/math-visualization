window.onload = (e) => {
  console.clear();
  const WIDTH = 1080;
  const HEIGHT = 720;

  var numberLimit = document.getElementById("numbers");

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.width = WIDTH;
  ctx.height = HEIGHT;

  draw(ctx, numberLimit);

  numberLimit.onchange = () => {
    draw(ctx, numberLimit);
  };
};

function draw(ctx, numberLimit) {
  ctx.clearRect(0, 0, ctx.width, ctx.height);

  ctx.translate(ctx.width / 2, ctx.height / 2);

  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.fillRect(0, 0, ctx.width / 2, 1);
  ctx.fillRect(0, 0, (ctx.width / 2) * -1, 1);
  ctx.fillRect(0, 0, 1, ctx.height / 2);
  ctx.fillRect(0, 0, 1, (ctx.height / 2) * -1);

  ctx.beginPath();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.005)";

  for (let i = 0; i < ctx.width; i++) {
    ctx.arc(0, 0, i * 150, 0 * Math.PI, Math.PI * 2);
  }

  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";

  for (let i = 0; i < ctx.width; i++) {
    ctx.arc(0, 0, i * 25, 0 * Math.PI, Math.PI * 2);
  }
  ctx.stroke();

  ctx.strokeStyle = "#fff";
  ctx.fillStyle = "#fff";

  for (let i = 0; i < numberLimit.value; i++) {
    ctx.beginPath();
    cp = cartesian_to_polar({ x: i, y: i });
    pc = polar_to_cartesian({ r: i, theta: i });
    ctx.arc(pc.x * 5, pc.y * 5, 5, Math.PI * 0, Math.PI * 2);
    ctx.fillText(i.toString(), pc.x * 5 - 5, pc.y * 5 + 20);
    ctx.stroke();
  }

  ctx.translate(-ctx.width / 2, -ctx.height / 2);
}

function cartesian_to_polar({ x, y }) {
  return {
    r: Math.sqrt(x * x + y * y),
    theta: Math.atan2(y, x),
  };
}

function polar_to_cartesian({ r, theta }) {
  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta),
  };
}
