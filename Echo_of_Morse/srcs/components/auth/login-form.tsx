"use client";

import type { LoginFormData } from "@/types/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";
import styles from "./login-form.module.css";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof LoginFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function validateForm() {
    if (!formData.email.trim()) {
      return "Email is required.";
    }

    if (!formData.password) {
      return "Password is required.";
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

      await new Promise((resolve) => setTimeout(resolve, 600));

      setSuccess("Login form submitted successfully.");
      setFormData({
        email: "",
        password: "",
      });
    } catch (submitError) {
      console.error(submitError);
      setError("Something went wrong during login.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Login</h1>

      <p className={styles.description}>
        Sign in to continue to your account.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
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
        </div>

        {error ? <p className={styles.error}>{error}</p> : null}

        {success ? <p className={styles.success}>{success}</p> : null}

        <button
          className={`${styles.submitButton} ${
            isSubmitting ? styles.submitButtonDisabled : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Login"}
        </button>
      </form>

      <p className={styles.registerText}>
        Don&apos;t have an account?{" "}
        <Link className={styles.registerLink} href="/register">
          Register here
        </Link>
      </p>
    </section>
  );
}



//si on comfirme API :import { loginUser } from "@/lib/api/auth";
// "use client";

// import type { LoginFormData } from "@/components/types/auth";
// import { loginUser } from "@/lib/api/auth";
// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import styles from "./login-form.module.css";

// export default function LoginForm() {
//   const [formData, setFormData] = useState<LoginFormData>({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   function updateField(field: keyof LoginFormData, value: string) {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   }

//   function validateForm() {
//     if (!formData.email.trim()) {
//       return "Email is required.";
//     }

//     if (!formData.password) {
//       return "Password is required.";
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

//       await loginUser(formData);

//       setSuccess("Login form submitted successfully.");
//       setFormData({
//         email: "",
//         password: "",
//       });
//     } catch (submitError) {
//       console.error(submitError);
//       setError("Something went wrong during login.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <section className={styles.card}>
//       <h1 className={styles.title}>Login</h1>

//       <p className={styles.description}>
//         Sign in to continue to your account.
//       </p>

//       <form onSubmit={handleSubmit}>
//         <div className={styles.fields}>
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
//         </div>

//         {error ? <p className={styles.error}>{error}</p> : null}

//         {success ? <p className={styles.success}>{success}</p> : null}

//         <button
//           className={`${styles.submitButton} ${
//             isSubmitting ? styles.submitButtonDisabled : ""
//           }`}
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Submitting..." : "Login"}
//         </button>
//       </form>

//       <p className={styles.registerText}>
//         Don&apos;t have an account?{" "}
//         <Link className={styles.registerLink} href="/register">
//           Register here
//         </Link>
//       </p>
//     </section>
//   );
// }