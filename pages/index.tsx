import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>demo index</h1>
      <ul>
        <li>
          <Link href={"/demo1/A"}>demo1</Link>
        </li>
        <li>
          <Link href={"/demo2/A"}>demo2</Link>
        </li>
      </ul>
    </div>
  );
}
