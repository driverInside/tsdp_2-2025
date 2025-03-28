import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className="hero is-large">
          <div className="hero-body">
            <p className="title">Sistema de denuncias</p>
            <p className="subtitle">Ciudad de México</p>
          </div>
        </section>
      </main>
    </div>
  );
}
