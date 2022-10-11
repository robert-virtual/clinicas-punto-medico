import { FC, ReactNode } from "react";
import LoginButton from "./LoginBtn";
interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <LoginButton />
      <main>{children}</main>
    </>
  );
};
export default Layout;
