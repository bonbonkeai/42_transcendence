import PageShell from "@/components/layout/page-shell";

export default function ChatPage() {
  return (
    <main id="main-content">
      <PageShell>
        <section
          style={{
            padding: "32px 24px",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            background: "#ffffff",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 800,
              margin: "0 0 16px 0",
              color: "#111827",
            }}
          >
            Chat
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              margin: 0,
              color: "#4b5563",
            }}
          >
            This page will host real-time chat and communication features.
          </p>
        </section>
      </PageShell>
    </main>
  );
}