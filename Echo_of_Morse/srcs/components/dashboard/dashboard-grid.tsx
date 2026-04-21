import Link from "next/link";

type DashboardCardProps = {
  title: string;
  description: string;
  href: string;
};

function DashboardCard({ title, description, href }: DashboardCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
        textDecoration: "none",
        color: "#111827",
      }}
    >
      <h2
        style={{
          margin: "0 0 10px 0",
          fontSize: "20px",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: 0,
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#4b5563",
        }}
      >
        {description}
      </p>
    </Link>
  );
}

//need to access the real data of the database
function TodayPracticeProgress() {
  const progress = {
    completedLessons: 3,
    targetLessons: 5,
    accuracy: 82,
    streak: 4,
  };
  //

  const percentage = Math.round(
    (progress.completedLessons / progress.targetLessons) * 100
  );

  return (
    <section
      style={{
        padding: "28px 24px",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        background: "#ffffff",
        marginBottom: "24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h2
        style={{
          margin: "0 0 12px 0",
          fontSize: "28px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        Today’s Practice Progress
      </h2>

      <p
        style={{
          margin: "0 0 20px 0",
          fontSize: "16px",
          lineHeight: 1.8,
          color: "#4b5563",
        }}
      >
        Keep training every day to improve your Morse decoding speed and consistency.
      </p>

      <div
        style={{
          width: "100%",
          height: "14px",
          borderRadius: "999px",
          background: "#e5e7eb",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "#111827",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 6px 0",
              fontSize: "14px",
              fontWeight: 600,
              color: "#6b7280",
            }}
          >
            Lessons
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {progress.completedLessons}/{progress.targetLessons}
          </p>
        </div>

        <div>
          <h3
            style={{
              margin: "0 0 6px 0",
              fontSize: "14px",
              fontWeight: 600,
              color: "#6b7280",
            }}
          >
            Accuracy
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {progress.accuracy}%
          </p>
        </div>

        <div>
          <h3
            style={{
              margin: "0 0 6px 0",
              fontSize: "14px",
              fontWeight: 600,
              color: "#6b7280",
            }}
          >
            Streak
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {progress.streak} days
          </p>
        </div>
      </div>
    </section>
  );
}

export default function DashboardGrid() {
  const cards = [
    {
      title: "Learning",
      description: "Practice Morse code and improve your decoding skills.",
      href: "/learning",
    },
    {
      title: "Chat",
      description: "Communicate with other users through real-time chat.",
      href: "/chat",
    },
    {
      title: "Competition",
      description: "Join challenges and compare your performance.",
      href: "/competition",
    },
  ];

  return (
    <section>
      <TodayPracticeProgress />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {cards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            description={card.description}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
}