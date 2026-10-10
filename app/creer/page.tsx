import Link from "next/link";

export default function Creer() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Nouveau questionnaire</h2>
          <p>Maquette : le formulaire n'enregistre pas encore vos questionnaires.</p>
        </div>
        <div>
          <p>
            <label htmlFor="titre">Titre</label>
            <br />
            <input id="titre" name="titre" type="text" />
          </p>
          <p>
            <label htmlFor="description">Description</label>
            <br />
            <textarea id="description" name="description" rows={4} />
          </p>
          <button type="button" className="btn btn-primary" disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
            Enregistrer
          </button>
        </div>
        <p>
          <Link href="/">← Retour à l'accueil</Link>
        </p>
      </div>
    </section>
  );
}
