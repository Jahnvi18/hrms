import React from "react";
import styles from "../ui/Dashboard/dashboard.module.css";
import Card from "../ui/Dashboard/card/Card";
import Transactions from "../ui/Dashboard/transactions/Transactions";
import Rightbar from "../ui/Dashboard/rightBar/RightBar";
import Chart from "../ui/Dashboard/chart/Chart";

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
export default Dashboard;
