"use client";

import { FormEvent, useState } from "react";
import styles from "./register-form.module.css";
import type { RegisterFormData } from "@/types/auth";

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
    <section className={styles.card}>
      <h1 className={styles.title}>Register</h1>

      <p className={styles.description}>
        Create your account to access the platform.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <label className={styles.field}>
            <span>Username</span>
            <input
              className={styles.input}
              type="text"
              value={formData.username}
              onChange={(event) => updateField("username", event.target.value)}
              placeholder="Enter your username"
            />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              className={styles.input}
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Enter your email"
            />
          </label>

          <label className={styles.field}>
            <span>Password</span>
            <input
              className={styles.input}
              type="password"
              value={formData.password}
              onChange={(event) => updateField("password", event.target.value)}
              placeholder="Enter your password"
            />
          </label>

          <label className={styles.field}>
            <span>Confirm Password</span>
            <input
              className={styles.input}
              type="password"
              value={formData.confirmPassword}
              onChange={(event) =>
                updateField("confirmPassword", event.target.value)
              }
              placeholder="Confirm your password"
            />
          </label>
        </div>

        {error ? <p className={styles.error}>{error}</p> : null}

        {success ? <p className={styles.success}>{success}</p> : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`${styles.submitButton} ${
            isSubmitting ? styles.submitButtonDisabled : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Create account"}
        </button>
      </form>
    </section>
  );
}

//si on comfirme API:
// "use client";

// import type { RegisterFormData } from "@/components/types/auth";
// import { registerUser } from "@/lib/api/auth";
// import { FormEvent, useState } from "react";
// import styles from "./register-form.module.css";

// export default function RegisterForm() {
//   const [formData, setFormData] = useState<RegisterFormData>({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   function updateField(field: keyof RegisterFormData, value: string) {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   }

//   function validateForm() {
//     if (!formData.username.trim()) {
//       return "Username is required.";
//     }

//     if (!formData.email.trim()) {
//       return "Email is required.";
//     }

//     if (!formData.password) {
//       return "Password is required.";
//     }

//     if (formData.password.length < 6) {
//       return "Password must be at least 6 characters long.";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       return "Passwords do not match.";
//     }

//     return "";
//   }

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setError("");
//     setSuccess("");

//     const validationError = validateForm();

//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       await registerUser(formData);

//       setSuccess("Registration form submitted successfully.");
//       setFormData({
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (submitError) {
//       console.error(submitError);
//       setError("Something went wrong during registration.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <section className={styles.card}>
//       <h1 className={styles.title}>Register</h1>

//       <p className={styles.description}>
//         Create your account to access the platform.
//       </p>

//       <form onSubmit={handleSubmit}>
//         <div className={styles.fields}>
//           <label className={styles.field}>
//             <span>Username</span>
//             <input
//               className={styles.input}
//               type="text"
//               value={formData.username}
//               onChange={(event) => updateField("username", event.target.value)}
//               placeholder="Enter your username"
//             />
//           </label>

//           <label className={styles.field}>
//             <span>Email</span>
//             <input
//               className={styles.input}
//               type="email"
//               value={formData.email}
//               onChange={(event) => updateField("email", event.target.value)}
//               placeholder="Enter your email"
//             />
//           </label>

//           <label className={styles.field}>
//             <span>Password</span>
//             <input
//               className={styles.input}
//               type="password"
//               value={formData.password}
//               onChange={(event) => updateField("password", event.target.value)}
//               placeholder="Enter your password"
//             />
//           </label>

//           <label className={styles.field}>
//             <span>Confirm Password</span>
//             <input
//               className={styles.input}
//               type="password"
//               value={formData.confirmPassword}
//               onChange={(event) =>
//                 updateField("confirmPassword", event.target.value)
//               }
//               placeholder="Confirm your password"
//             />
//           </label>
//         </div>

//         {error ? <p className={styles.error}>{error}</p> : null}

//         {success ? <p className={styles.success}>{success}</p> : null}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`${styles.submitButton} ${
//             isSubmitting ? styles.submitButtonDisabled : ""
//           }`}
//         >
//           {isSubmitting ? "Submitting..." : "Create account"}
//         </button>
//       </form>
//     </section>
//   );
// }