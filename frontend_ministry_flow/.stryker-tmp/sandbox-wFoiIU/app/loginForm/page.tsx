// @ts-nocheck

"use client";
import Image from "next/image";
import SecureLoginForm from "../components/LoginForm";
import "./AfficherLogin.css";

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
    <div className="Login">
      <Image src="/icone_projectdocs.png" alt = "logo" width={150} height={150}/>
      <SecureLoginForm onSubmit={handleLogin} />
    </div>
  );
}
