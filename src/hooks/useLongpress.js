import { useState, useRef } from "react";

export function useLongpress(containerRef) {
  const [positionX, setPositionX] = useState(0);

  const isLongpress = useRef(null);
  const timerRef = useRef(null);

  function startPressTimer(e) {
    isLongpress.current = false;
    timerRef.current = setTimeout(() => {
      isLongpress.current = true;
      setPositionX(e.clientX || e.touches[0].clientX); // old
    }, 100);
  }

  function handleOnMouseDown(e) {
    startPressTimer(e);
  }

  function handleOnMove(e) {
    if (isLongpress.current) return;

    const currentX = e.clientX || e.touches[0].clientX; // new
    const delta = positionX - currentX; // old - new

    containerRef.current.scrollLeft += delta; // حرکت لیست
    setPositionX(currentX); // آپدیت موقعیت
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current);
  }

  function handleOnTouchStart(e) {
    startPressTimer(e);
  }
  function handleOnTouchEnd() {
    // کلیر کن تایم اوت رو تا منابع هدر نره
    clearTimeout(timerRef.current);
  }

  return {
    positionX,
    setPositionX,
    handlers: {
      onMouseMove: handleOnMove,
      onMouseUp: handleOnMouseUp,
      onMouseDown: handleOnMouseDown,
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd,
      onTouchMove: handleOnMove,
    },
  };
}
