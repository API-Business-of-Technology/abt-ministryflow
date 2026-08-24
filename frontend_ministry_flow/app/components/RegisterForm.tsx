"use client";
import { useState } from "react";
import "./RegisterForm.css";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  onSubmit: (data: {
    nom: string;
    prenom: string;
    adresse: string;
    telephone: string;
    pays: string;
    email: string;
    password: string;
    confirmedPassword: string;
    smsCode: string;
  }) => void;
  loading?: boolean;
};

export default function RegisterForm1({ onSubmit, loading }: LoginFormProps) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [pays, setPays] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nom || !prenom || !adresse || !pays || !telephone || !email || !password || !confirmedPassword || !smsCode) {
      setError("Les champs sont obligatoires");
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email invalide");
      return;
    }

    // Validation téléphone
    const cleanedPhone = telephone.replace(/\D/g, "");
    if (cleanedPhone.length !== 10) {
      setError("Téléphone invalide");
      return;
    }

    // Validation mot de passe
    if (password !== confirmedPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setError(null);

    onSubmit({
      nom,
      prenom,
      adresse,
      telephone: cleanedPhone,
      pays,
      email,
      password,
      confirmedPassword,
      smsCode,
    });
  };

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleContinue(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsLoading(true);
  router.push("/RegisterForm2");
}

  return (
    <form onSubmit={handleSubmit} className="Form">
      <h2>
        Créer votre compte
      </h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* NOM */}
      <div className="bloc">
        <label>Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          autoComplete="name"
          required
          className="input"
        />
      </div>

      {/* PRENOM */}
      <div className="bloc">
        <label>Prénom</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          autoComplete="given-name"
          required
          className="input"
        />
      </div>

      {/* ADRESSE */}
      <div className="bloc">
        <label>Adresse</label>
        <input
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
          autoComplete="street-address"
          required
          className="input"
        />
      </div>

      {/* PAYS */}
      <div className="bloc">
        <label>Pays</label>
        <input
          type="text"
          value={pays}
          onChange={(e) => setPays(e.target.value)}
          required
          className="input"
        />
      </div>

      {/* TELEPHONE */}
      <div className="bloc">
        <label>Téléphone</label>
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          autoComplete="tel"
          required
          className="input"
        />
      </div>

      {/* EMAIL */}
      <div className="bloc">
        <label>Adresse email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          className="input"
        />
      </div>

      {/* PASSWORD */}
      <div className="bloc">
        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
          className="input"
        />
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="bloc">
        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          required
          className="input"
        />
      </div>

      <button type="submit" disabled={isLoading} id="button">
        {isLoading ? "Connexion en cours..." : "Continuer"}
      </button>

    </form>
  );
}