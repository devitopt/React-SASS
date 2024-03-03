import React from "react";
import { useEffect } from "react";
import styles from "./index-sass.module.scss";

const ContentBox = ({ svg, title, content, width, padding, border, color }) => {
  useEffect(() => {
    // const root = document.documentElement;
    // if (padding) root.style.setProperty("--padding", padding);
  }, []);

  return (
    <div
      className={styles.box}
      style={{
        padding,
        width,
        border,
        color,
        alignItems: title ? null : "center",
      }}
    >
      <div className={styles.titleBar}>
        {svg && <img src={svg} alt="svg" />}
        {title && <p className={styles.title}>{title}</p>}
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default ContentBox;
