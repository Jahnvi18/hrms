import React from "react";
import styles from "@/app/ui/Dashboard/users/users.module.css";
import Search from "@/app/ui/Dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/pagination";

function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add Button</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jahnvi
              </div>
            </td>
            <td>jahnvi@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  View
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jane
              </div>
            </td>
            <td>jahnvi@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  View
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default Users;
