import React from "react";

// css
import styles from "../../styles/Home.module.css";

// components
import DemoWrapper from "../../components/DemoWrapper";
import Demo from "../../components/Demo";

const options = {
  cacheTime: 1000 * 5,
  staleTime: 1000 * 5,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>demo2</h1>
      <DemoWrapper>
        <Demo options={options} />
      </DemoWrapper>
    </div>
  );
}
