"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "@/app/ui/Dashboard/view/view.module.css";

const EmployeeDetails = () => {
  const { id } = useParams(); // Get employee_id from URL
  console.log("id:", id);
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();

        if (response.ok) {
          setEmployee(data);
        } else {
          console.error("Error fetching employee:", data.error);
        }
      } catch (error) {
        console.error("Request failed:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEmployeeDetails();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!employee) return <p>Employee not found.</p>;

  return (
    <div className={styles.container}>
      <h1>Employee Details</h1>
      <p>
        <strong>Name:</strong> {employee.first_name} {employee.last_name}
      </p>
      {/* <p>
        <strong>Employee ID:</strong> {employee.employee_id}
      </p>
      <p>
        <strong>Email:</strong> {employee.email}
      </p>
      <p>
        <strong>Department:</strong> {employee.department}
      </p>
      <p>
        <strong>Designation:</strong> {employee.designation}
      </p>
      <p>
        <strong>Type:</strong> {employee.employee_type}
      </p>
      <p>
        <strong>Address:</strong> {employee.address}, {employee.city},{" "}
        {employee.state}
      </p>
      <p>
        <strong>Joining Date:</strong> {employee.joining_day}
      </p>
      <p>
        <strong>Working Days:</strong> {employee.working_day}
      </p> */}
    </div>
  );
};

export default EmployeeDetails;
