import styles from "./App.module.css";

export const App = () => {
  return (
    <div>
      <h1 className={styles.title}>Minesweeper</h1>
      <main className={styles.window}>
        <section className={styles.pointsContainer}>
          <div className={styles.points}>000</div>
          <button>
            <img src="/tileset/face.png" alt="face" width={38} height={38} />
          </button>
          <div className={styles.points}>000</div>
        </section>
        <section className={styles.boardContainer}>
          {/* The game goes here */}
        </section>
      </main>
    </div>
  );
};
