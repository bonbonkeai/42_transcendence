export default function HistorySection() {
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
        History of Morse
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: 1.8,
          margin: "0 0 16px 0",
          color: "#4b5563",
        }}
      >
        Morse code was developed in the nineteenth century as a communication
        system closely linked to telegraphy and long-distance transmission.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: 1.8,
          margin: 0,
          color: "#4b5563",
        }}
      >
        It later played an important role in military, maritime, and emergency
        communication, and today it remains both a historical medium and a
        valuable learning tool.
      </p>
    </section>
  )
}