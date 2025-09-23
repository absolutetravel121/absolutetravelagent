 import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "../loading"; 
 const LoginForm = dynamic(() => import("@/components/loginForm/LoginForm"), {
  suspense: true,
});

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginForm />
    </Suspense>
  );
}
