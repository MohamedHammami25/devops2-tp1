const modeles = [
  { title: "Quiz de culture générale", text: "10 questions variées tous publics pour animer vos sessions." },
  { title: "Évaluation technique", text: "Questions ciblées sur le développement web, React et DevOps." },
  { title: "Tour de table / Icebreaker", text: "Questions rapides pour briser la glace en début de réunion." },
];

export default function Modeles() {
  return (
    <section id="modeles">
      <div className="container">
        <div className="section-head">
          <h2>Modèles de questionnaires</h2>
          <p>Partez d'un modèle prêt à l'emploi pour gagner du temps.</p>
        </div>
        <div className="cards">
          {modeles.map((m, i) => (
            <div className="card" key={m.title}>
              <div className="num">0{i + 1}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
