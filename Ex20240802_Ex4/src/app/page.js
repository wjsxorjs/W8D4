import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let subtitle = "부제목";
  let sub = "sub_title";
  return (
    <div>
      <h1 className="title">연습 1</h1>
      <p className={sub}>{subtitle}</p>
    </div>
  );
}
