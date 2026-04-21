"use client";

import { FormEvent, useState } from "react";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof RegisterFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function validateForm() {
    if (!formData.username.trim()) {
      return "Username is required.";
    }

    if (!formData.email.trim()) {
      return "Email is required.";
    }

    if (!formData.password) {
      return "Password is required.";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match.";
    }

    return "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO:
      // Replace this mock request with your real register API route.
      // Example:
      // const response = await fetch("/api/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     email: formData.email,
      //     password: formData.password,
      //   }),
      // });

      await new Promise((resolve) => setTimeout(resolve, 600));

      setSuccess("Registration form submitted successfully.");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (submitError) {
      console.error(submitError);
      setError("Something went wrong during registration.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h1
        style={{
          margin: "0 0 8px 0",
          fontSize: "28px",
          fontWeight: 700,
        }}
      >
        Register
      </h1>

      <p
        style={{
          margin: "0 0 24px 0",
          color: "#4b5563",
          lineHeight: 1.6,
        }}
      >
        Create your account to access the platform.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gap: "16px" }}>
          <label style={{ display: "grid", gap: "8px" }}>
            <span>Username</span>
            <input
              type="text"
              value={formData.username}
              onChange={(event) => updateField("username", event.target.value)}
              placeholder="Enter your username"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px" }}>
            <span>Email</span>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Enter your email"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px" }}>
            <span>Password</span>
            <input
              type="password"
              value={formData.password}
              onChange={(event) => updateField("password", event.target.value)}
              placeholder="Enter your password"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px" }}>
            <span>Confirm Password</span>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(event) =>
                updateField("confirmPassword", event.target.value)
              }
              placeholder="Confirm your password"
              style={inputStyle}
            />
          </label>
        </div>

        {error ? (
          <p
            style={{
              marginTop: "16px",
              color: "#b91c1c",
              lineHeight: 1.5,
            }}
          >
            {error}
          </p>
        ) : null}

        {success ? (
          <p
            style={{
              marginTop: "16px",
              color: "#166534",
              lineHeight: 1.5,
            }}
          >
            {success}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px 16px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: isSubmitting ? "#9ca3af" : "#111827",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 600,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Submitting..." : "Create account"}
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  fontSize: "14px",
  outline: "none",
} as const;