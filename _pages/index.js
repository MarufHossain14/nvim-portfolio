import Terminal from "../components/Terminal";

import styles from "../app/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.titlebar}>
          <div className={styles.tabs}>
            <span className={`${styles.tab} ${styles.activeTab}`}>
              index.tsx
            </span>
            <span className={styles.tab}>projects.md</span>
            <span className={styles.tab}>resume.pdf</span>
          </div>
          <div className={styles.mode}>NORMAL</div>
        </div>

        <div className={styles.editor}>
          <div className={styles.header}>
            <h1>
              marufhossain@nvim:$<span className={styles.help}> :help</span>
            </h1>
            <a
              className={styles.subtleLink}
              href="https://www.hmaruf.com"
              target="_blank"
              rel="noreferrer"
            >
              Open main portfolio
            </a>
          </div>

          <Terminal />
        </div>

        <div className={styles.statusline}>
          <div className={styles.statusLeft}>
            nvim | Maruf Hossain | hmaruf.com
          </div>
          <div className={styles.statusRight}>UTF-8 · 100% · 01:1</div>
        </div>
      </div>
    </div>
  );
}
