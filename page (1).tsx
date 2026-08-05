export default function TrustStrip() {
  const items = [
    "Universidad de Buenos Aires",
    "Hospital Nacional Posadas",
    "Sociedad Argentina de Dermatología",
    "Colegio Iberolatinoamericano de Dermatología"
  ];
  return (
    <div className="trust">
      <div className="wrap">
        {items.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
