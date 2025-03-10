import styles from "../ui/Dashboard/dashboard.module.css";
import Footer from "../ui/Dashboard/footer/Footer";
import Navbar from "../ui/Dashboard/navbar/NavBar";
import SideBar from "../ui/Dashboard/sidebar/SideBar";
import { FormProvider } from "../context/FormContext";

function layout({ children }) {
  return (
    <FormProvider>
      <div className={styles.container}>
        <div className={styles.menu}>
          <SideBar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </FormProvider>
  );
}

export default layout;
