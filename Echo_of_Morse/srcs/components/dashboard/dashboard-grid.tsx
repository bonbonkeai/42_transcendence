type DashboardCardProps = {
  title: string;
  description: string;
};

function DashboardCard({ title, description }: DashboardCardProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h2
        style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#4b5563",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function DashboardGrid() {
  const cards = [
    {
      title: "Learning Progress",
      description: "Track your Morse learning progress and recent practice sessions.",
    },
    {
      title: "Daily Practice",
      description: "Continue your daily training and improve your decoding speed.",
    },
    {
      title: "Chat",
      description: "Access chat features and interact with other users.",
    },
    {
      title: "Competition",
      description: "Join competitions and compare your performance with others.",
    },
  ];

  return (
    <section>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "28px",
          fontWeight: 700,
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {cards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}