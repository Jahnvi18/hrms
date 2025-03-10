// "use client";
// import { useFormContext } from "@/app/context/FormContext";

// export default function ConfirmPage() {
//   const { formData } = useFormContext();
//   try {
//     const response = fetch("/api/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       router.push("/dashboard/allEmployees");
//     } else {
//       alert("Error submitting form.");
//     }
//   } catch (error) {
//     console.error("Submission error:", error);
//     alert("An error occurred while submitting the form.");
//   }

//   return (
//     <div>
//       <h1>Confirm Your Information</h1>
//       {Object.entries(formData).map(([key, value]) => (
//         <p key={key}>
//           <strong>{key}:</strong> {value}
//         </p>
//       ))}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";
import Button from "@/app/ui/Dashboard/button/button";
import styles from "@/app/ui/Dashboard/completeData/completeData.module.css";
import Link from "next/link";

export default function ConfirmPage() {
  const { formData } = useFormContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        router.push("/dashboard/allEmployees");
      } else {
        console.log(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      console.log("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Confirm Your Information</h1>
      {Object.entries(formData).map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {String(value)}
        </p>
      ))}

      {/* <Button
        onClick={handleFinalSubmit}
        disabled={loading}
        className={`${styles.button}`}
        // style={{
        //   backgroundColor: loading ? "#ccc" : "#007bff",
        //   color: "#fff",
        //   padding: "10px 20px",
        //   border: "none",
        //   cursor: loading ? "not-allowed" : "pointer",
        //   marginTop: "20px",
        //   //   marginRight: "0px",
        // }}
      >
        {loading ? "Submitting..." : "Submit Form"}
      </Button> */}
      <div className={styles.formActions}>
        <Link href="/dashboard/allEmployees">
          <Button className={`${styles.button} ${styles.secondary}`}>
            Cancel
          </Button>
        </Link>
        <Button
          onClick={handleFinalSubmit}
          className={`${styles.button} ${styles.primary}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Form"}
        </Button>
      </div>
    </div>
  );
}
