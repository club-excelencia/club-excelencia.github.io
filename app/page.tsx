import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.cover}>
        <article className='bg-blue-300 flex flex-col items-center justify-center h-screen text-center'>
          <h1 className='uppercase font-bold'>
            Toastmasters 
            <br/>
            Excelencia
          </h1>
          <ul>
            <li>
              <a href="https://maps.app.goo.gl/GanA4zNpVjAFvRtQ7"
                target="_blank"
                >📍 Visita gratuita&rarr;
              </a>
            </li>
            <li>
              <a href="https://wa.me/523121174067?text=Hola%20me%20gustaría%20inscribirme%20al%20club%20Toastmasters%20Excelencia"
                target="_blank"
                >🎟️ Inscripción &rarr;
              </a>
            </li>
          </ul>
        </article>
      </main>
      <footer>Toastmasters Internacional</footer>
    </>
  );
}
