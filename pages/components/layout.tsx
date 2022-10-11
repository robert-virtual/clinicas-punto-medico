import LoginButton from "./LoginBtn";

export default function Layout({ children }) {
  return (
    <>
      <LoginButton />
      <main>{children}</main>
    </>
  );
}
