const currentMousePos = {
  x: 0,
  y: 0,
};

let isMoving = false;

export const attachMouseDownHandler = (el) => {
  el?.addEventListener('mousedown', (e) => {
    isMoving = true;
    // 记录当前鼠标位置
    currentMousePos.x = e.clientX;
    currentMousePos.y = e.clientY;
  }, true);
};

export const attachMouseMoveHandler = (cb) => {
  document?.documentElement?.addEventListener("mousemove", (e) => {
    if(!isMoving) {
      return;
    }
    const diffPos = {
      x: e.clientX - currentMousePos.x,
      y: e.clientY - currentMousePos.y
    };
    currentMousePos.x = e.clientX;
    currentMousePos.y = e.clientY;
    cb(diffPos);
  }, true);
};

export const attachMouseUpHandler = (el) => {
  el?.addEventListener("mouseup", () => {
    isMoving = false;
  }, true);
}
