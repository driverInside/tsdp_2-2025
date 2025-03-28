import styles from './page.module.scss';

export default function CreatePage() {
  return (
    <section id="my-form" className={styles.formulario}>
      <form>
        <div className="field">
          <label className="label">Calle</label>
          <div className="control">
            <input className="input" type="text" placeholder="p.ej : Av Siempre Viva" />
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
