import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Button({
  variant = "default",
  title,
  size = 20,
  theme: _,
  ...restProps
}) {
  const style = { textTransform: "uppercase" };

  if (["rounded", "icon"].includes(variant)) {
    style.borderRadius = "50%";
  }

  if (variant === "icon") {
    style.width = size;
    style.height = style.width;
    style.maxHeight = style.width;
    style.maxWith = style.width;
    style.minHeight = style.width;
    style.minWith = style.width;
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <button
            style={{
              ...style,
              color: theme === "dark" ? "white" : "black",
              backgroundColor: theme !== "dark" ? "white" : "black",
            }}
            {...restProps}
          >
            {title}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Button;
