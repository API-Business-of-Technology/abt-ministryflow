"use client";
import { useState } from "react";
import "./LoginForm.css";
import Link from "next/link";
type LoginFormProps = {
  onSubmit: (data: {
    email: string;
    password: string;
    smsCode: string;
  }) => void;
  loading?: boolean;
};

export default function SecureLoginForm({ onSubmit, loading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !smsCode) {
      setError("Tanpri ranpli tout chan yo.");
      return;
    }

    // Validation senp email
    if (!email.includes("@")) {
      setError("Email la pa valab.");
      return;
    }

    setError(null);
    onSubmit({ email, password, smsCode });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="FormConnexion"
    >
      <h2>
        Espace de Connexion 
      </h2>

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      <div className="container1">
        <label>
          Adresse email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div className="container1">
        <label>
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </div>

      <div className="container1">
        <label>
          Code SMS (2FA)
        </label>
        <input
          type="text"
          value={smsCode}
          onChange={(e) => setSmsCode(e.target.value)}
          maxLength={6}
          inputMode="numeric"
          autoComplete="one-time-code"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Connexion en cours..." : "Se connecter"}
      </button>

      <Link href="" id="bouton">
           Créer un compte
      </Link>

    </form>
  );
}
