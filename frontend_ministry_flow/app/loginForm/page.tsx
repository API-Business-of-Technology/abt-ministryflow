"use client";
import Image from "next/image";
// ex: app/login/page.tsx oswa pages/login.tsx
import SecureLoginForm from "../components/LoginForm";
import "./AfficherForm.css";


type LoginData = {
  email: string;
  password: string;
  smsCode: string;
};


export default function LoginPage() {
  const handleLogin = async ({ email, password, smsCode }: LoginData) => {
  console.log({ email, password, smsCode });
};


  return (
    <div className="containerLogin">
      <Image src="/logo.png" alt="Logo de Ministry Flow" width={200} height={200}/>
      <SecureLoginForm onSubmit={handleLogin} />
    </div>
  );
}
