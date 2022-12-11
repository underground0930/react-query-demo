import React from "react";

// css
import styles from "../../styles/Home.module.css";

// components
import DemoWrapper from "../../components/DemoWrapper";
import Demo from "../../components/Demo";

const options = {
  cacheTime: 1000 * 20,
  staleTime: 1000 * 8,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>demo2</h3>
      <DemoWrapper>
        <Demo options={options} />
      </DemoWrapper>
    </div>
  );
}
