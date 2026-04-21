export default function OnlineCounter() {
  return (
    <section
      style={{
        padding: "28px 24px",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        background: "#ffffff",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 700,
          margin: "0 0 12px 0",
          color: "#111827",
        }}
      >
        Online now
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          margin: 0,
          color: "#4b5563",
        }}
      >
        n users connected
      </p>
    </section>
  )
}
//need to access the real data of the database