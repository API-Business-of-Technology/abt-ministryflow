"use client";
import "./AfficherFormRegister.css";
import RegisterForm1 from "../components/RegisterForm";


type RegisterData = {
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  pays: string;
  email: string;
  password: string;
  confirmedPassword: string;
  smsCode: string;
};

export default function RegisterPage() {
  const handleRegister = async (data: RegisterData) => {
    console.log("Données reçues :", data);

    // Si ou vle, ou ka voye done yo nan backend la:
    // await fetch("/api/register", { method: "POST", body: JSON.stringify(data) });
  };

  return (
    <div className="Register">
      <RegisterForm1 onSubmit={handleRegister} />
    </div>
  );
}