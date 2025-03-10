"use client";
import styles from "@/app/ui/Dashboard/products/addProduct/addProduct.module.css";
import { usePathname, useRouter } from "next/navigation";

function layout({ children }) {
  const pathname = usePathname();
  const active = pathname.split("/").pop();
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>
        <div
          className={`${styles.tab} ${
            active === "PersonalInfoForm" ? styles.active : ""
          }`}
          onClick={() => {
            // setActiveTab("personal");
            router.push("/dashboard/allEmployees/wrapper/PersonalInfoForm");
          }}
        >
          Personal Information
        </div>
        <div
          className={`${styles.tab} ${
            active === "ProfessionalInfoForm" ? styles.active : ""
          }`}
          onClick={() => {
            // setActiveTab("professional");
            router.push("/dashboard/allEmployees/wrapper/ProfessionalInfoForm");
          }}
        >
          Professional Information
        </div>
        <div
          className={`${styles.tab} ${
            active === "DocumentsForm" ? styles.active : ""
          }`}
          onClick={() => {
            // setActiveTab("documents");
            router.push("/dashboard/allEmployees/wrapper/DocumentsForm");
          }}
        >
          Documents
        </div>
        <div
          className={`${styles.tab} ${
            active === "AccountAccessForm" ? styles.active : ""
          }`}
          onClick={() => {
            // setActiveTab("account");
            router.push("/dashboard/allEmployees/wrapper/AccountAccessForm");
          }}
        >
          Account Access
        </div>
        <div
          className={`${styles.tab} ${
            active === "CompleteData" ? styles.active : ""
          }`}
          onClick={() => {
            // setActiveTab("account");
            router.push("/dashboard/allEmployees/wrapper/CompleteData");
          }}
        >
          Confirm Information
        </div>
      </div>
      {children}
    </div>
  );
}

export default layout;
