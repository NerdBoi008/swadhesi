import { LoginForm } from "@/components/common/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Swadhesi Login",
    description: "Login into swadhesi",
};

export default function LoginPage() {
  return (
      <section>
        <LoginForm/>  
      </section>
  )
}
