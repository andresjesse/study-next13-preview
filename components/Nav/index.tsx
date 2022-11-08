import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
