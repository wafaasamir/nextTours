import Image from "next/image";
import styles from "./page.module.css";
import { Home } from "@/src/components";
export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <Home />
    </div>
  );
}
