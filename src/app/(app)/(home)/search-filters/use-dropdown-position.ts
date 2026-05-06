import React, { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,
) => {
  const getDropdownPosition = () => {
    //ref.current is the DOM element, in our case its our button
    if (!ref.current) return { top: 0, left: 0 }; //If it’s not available yet, we just return a default position (0,0) to avoid errors.

    const rect = ref.current.getBoundingClientRect(); // getting the postion of element/button relative to view port
    const dropdownWidth = 240; //fixed width of dropdown (w-60 = 15rem = 240px)

    //calculate the initial position // since rect.left give position relative to view port, but drop is positioned relative to document, so we are adding scrollX/Y also to give final result.
    let left = rect.left + window.scrollX; //window.scrollX -> how much page is scrolled horizontally
    let top = rect.bottom + window.scrollY;

    // this way the dropdown will be below the button and aligned to the left side of button

    //check if the dropdown would go off the right edge of the viewport
    if (left + dropdownWidth > window.innerWidth) {
      //align to right edge of button instead (if drop down goes beyond the screen width)
      left = rect.right + window.scrollX - dropdownWidth; //Shift dropdown to align right

      //if still off-screen, align to the right edge of the view port with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // ENSURE dropdown doesn't go off left edge , absolute fallback esnure drop never stick to extreme edge
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
