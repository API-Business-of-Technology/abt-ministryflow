"use client";
import { useState } from "react";
import "./RegisterForm2.css";

type VerifyFormProps = {
  pendingUserId: string; // ID ki soti nan étape 1
  onSuccess: () => void; // si inscription pase
};

export default function VerifyForm({ pendingUserId, onSuccess }: VerifyFormProps) {
  const [smsCode, setSmsCode] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const res = await fetch("/api/verify-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pendingUserId,
        smsCode,
        emailCode,
        totpCode,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok || !data.valid) {
      setError(data.error || "Vérification échouée. Codes invalides.");
      return;
    }

    setSuccess("Inscription réussie ! Votre compte est maintenant actif.");
    onSuccess();
  };

  return (
    <form onSubmit={handleVerify} className="Form">
      <h2>
        Vérification de votre compte
      </h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && <p className="text-green-600 text-sm text-center">{success}</p>}

      {/* CODE SMS */}
      <div className="bloc">
        <label>Code SMS</label>
        <input
          type="text"
          value={smsCode}
          onChange={(e) => setSmsCode(e.target.value)}
          maxLength={6}
          required
          className="input"
        />
      </div>

      {/* CODE EMAIL */}
      <div className="bloc">
        <label>Code Email</label>
        <input
          type="text"
          value={emailCode}
          onChange={(e) => setEmailCode(e.target.value)}
          maxLength={6}
          required
          className="input"
        />
      </div>

      {/* CODE AUTHENTICATOR (OPTIONNEL) */}
      <div className="bloc">
        <label>
          Code Authenticator (optionnel)
        </label>
        <input
          type="text"
          value={totpCode}
          onChange={(e) => setTotpCode(e.target.value)}
          maxLength={6}
          className="input"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        id="button"
      >
        {loading ? "Vérification..." : "Confirmer"}
      </button>
    </form>
  );
}