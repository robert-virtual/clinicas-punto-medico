import { FC, ReactNode } from "react";
import LoginButton from "./LoginBtn";
import styles from "../../styles/Home.module.css";
interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <LoginButton />
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default Layout;
