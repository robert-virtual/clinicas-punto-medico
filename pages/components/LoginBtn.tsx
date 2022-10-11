import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data } = useSession();
  if (!data) {
    return <button className="btn-primary" onClick={() => signIn()}>Iniciar Session</button>;
  }
  return <button className="btn-primary" onClick={() => signOut()}>Cerrar Session</button>;
}
