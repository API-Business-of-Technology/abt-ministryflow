// ex: app/login/page.tsx oswa pages/login.tsx
import SecureLoginForm from "../components/LoginForm";

type LoginData = {
  email: string;
  password: string;
  smsCode: string;
};


export default function LoginPage() {
  const handleLogin = async ({ email, password, smsCode }) => {
    // API call trè sekirize
    // await fetch("/api/auth/login", { ... })
    console.log({ email, password, smsCode });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SecureLoginForm onSubmit={handleLogin} />
    </div>
  );
}
