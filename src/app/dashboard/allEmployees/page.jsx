"use client";
import Pagination from "@/app/ui/Dashboard/pagination/pagination";
import Search from "@/app/ui/Dashboard/search/search";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/ui/Dashboard/products/products.module.css";
import Button from "@/app/ui/Dashboard/button/button";

function AllEmployees() {
  const [users, setUser] = useState([]);
  const handleDelete = async (employee_id) => {
    if (!window.confirm("Are you sure you want to delete this employee?"))
      return;

    try {
      const response = await fetch("/api/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employee_id }),
      });

      const data = await response.json();
      if (response.ok) {
        // console.log("Employee deleted successfully!");
        setUser(users.filter((user) => user.employee_id !== employee_id)); // Remove from UI
      } else {
        console.log("error occured!");
      }
    } catch (error) {
      console.error("Delete request failed:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product.." />
        <Link href="/dashboard/allEmployees/wrapper/PersonalInfoForm">
          <Button className={styles.addButton}>Add User</Button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRaw}>
            <td className={styles.tableData}>Image</td>
            <td className={styles.tableData}>Employee Name</td>
            <td className={styles.tableData}>Employee Id</td>
            <td className={styles.tableData}>Department</td>
            <td className={styles.tableData}>Designation</td>
            <td className={styles.tableData}>Type</td>
            <td className={styles.tableData}>Status</td>
            <td className={styles.tableData}>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td className={styles.tableData}>
                  <div className={styles.user}>
                    <Image
                      src={user.image ? user.image : "/no-product.png"}
                      alt=""
                      width={30}
                      height={30}
                      className={styles.userImage}
                      unoptimized
                    />
                  </div>
                </td>
                <td className={styles.tableData}>{user.username}</td>
                <td className={styles.tableData}>{user.employee_id}</td>
                <td className={styles.tableData}>{user.department}</td>
                <td className={styles.tableData}>{user.designation}</td>
                <td className={styles.tableData}>{user.employee_type}</td>
                <td className={styles.tableData}> Permanent</td>

                <td className={styles.tableData}>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/allEmployees/${user.employee_id}`}>
                      <Button className={`${styles.button} ${styles.view}`}>
                        View
                      </Button>
                    </Link>
                    <Button className={`${styles.button} ${styles.edit}`}>
                      Edit
                    </Button>
                    <Button
                      className={`${styles.button} ${styles.delete}`}
                      onClick={() => handleDelete(user.employee_id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noData}>
                No user found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default AllEmployees;
