import Logo from "./Logo";
import AppNav from "./AppNav";

import styles from "./Sidebar.module.css";
import Footer from "./Footer";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default SideBar;
