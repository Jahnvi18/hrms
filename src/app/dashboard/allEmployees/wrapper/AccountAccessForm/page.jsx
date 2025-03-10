// "use client";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import styles from "@/app/ui/Dashboard/products/addProduct/form4.module.css";
// import Link from "next/link";
// import Button from "@/app/ui/Dashboard/button/button";
// import Input from "@/app/ui/Dashboard/input/input";
// import { useSearchParams, useRouter } from "next/navigation";

// const validationSchema = Yup.object({
//   pofessionalEmail: Yup.string()
//     // .pofessionalEmail("Invalid pofessionalEmail")
//     .required("Email is required"),
//   skype: Yup.string().required("skype is required"),
//   slack: Yup.string().required("slack is required"),
//   github: Yup.string().required("github is required"),
// });

// const AccountAccessForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const formik = useFormik({
//     initialValues: {
//       pofessionalEmail: "",
//       skype: "",
//       slack: "",
//       github: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       console.log("values:", values);
//       // const prevData = searchParams.toString();
//       // console.log("prevData:", prevData);
//       // const newQuery = new URLSearchParams({
//       //   ...Object.fromEntries(searchParams),
//       //   ...values,
//       // }).toString();
//       // console.log("values:", values);
//       // router.push("/dashboard/allEmployees");

//       const formData = Object.fromEntries(searchParams);

//       const response = await fetch("/api/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Form submitted successfully!");
//       } else {
//         alert("Error submitting form.");
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
//       <div className={styles.inputGrid}>
//         <Input
//           type="pofessionalEmail"
//           name="pofessionalEmail"
//           placeholder="Enter Email Address"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.pofessionalEmail}
//           {...formik.getFieldProps("pofessionalEmail")}
//         />
//         <Input
//           type="text"
//           name="slack"
//           placeholder="Enter Slack ID"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.slack}
//           {...formik.getFieldProps("slack")}
//         />
//         <Input
//           type="text"
//           name="skype"
//           placeholder="Enter Skype ID"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.skype}
//           {...formik.getFieldProps("skype")}
//         />
//         <Input
//           type="text"
//           name="github"
//           placeholder="Enter Github ID"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.github}
//           {...formik.getFieldProps("github")}
//         />
//       </div>

//       {/* Form Actions */}
//       <div className={styles.formActions}>
//         <Link href="/dashboard/allEmployees">
//           <Button className={`${styles.button} ${styles.secondary}`}>
//             Cancel
//           </Button>
//         </Link>
//         <Button
//           type="submit"
//           className={`${styles.button} ${styles.primary}`}
//           disabled={formik.isSubmitting}
//         >
//           Add
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default AccountAccessForm;

"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "@/app/ui/Dashboard/products/addProduct/form4.module.css";
import Link from "next/link";
import Button from "@/app/ui/Dashboard/button/button";
import Input from "@/app/ui/Dashboard/input/input";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

const validationSchema = Yup.object({
  pofessionalEmail: Yup.string().required("Email is required"),
  skype: Yup.string().required("Skype is required"),
  slack: Yup.string().required("Slack is required"),
  github: Yup.string().required("GitHub is required"),
});

const AccountAccessForm = () => {
  const router = useRouter();
  const { updateFormData, formData } = useFormContext();

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      updateFormData(values);
      router.push("/dashboard/allEmployees/wrapper/CompleteData");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <div className={styles.inputGrid}>
        <Input
          type="email"
          name="pofessionalEmail"
          placeholder="Enter Email Address"
          className="border w-full h-10 p-3"
          error={formik.errors.pofessionalEmail}
          {...formik.getFieldProps("pofessionalEmail")}
        />
        <Input
          type="text"
          name="slack"
          placeholder="Enter Slack ID"
          className="border w-full h-10 p-3"
          error={formik.errors.slack}
          {...formik.getFieldProps("slack")}
        />
        <Input
          type="text"
          name="skype"
          placeholder="Enter Skype ID"
          className="border w-full h-10 p-3"
          error={formik.errors.skype}
          {...formik.getFieldProps("skype")}
        />
        <Input
          type="text"
          name="github"
          placeholder="Enter GitHub ID"
          className="border w-full h-10 p-3"
          error={formik.errors.github}
          {...formik.getFieldProps("github")}
        />
      </div>

      {/* Form Actions */}
      <div className={styles.formActions}>
        <Link href="/dashboard/allEmployees">
          <Button className={`${styles.button} ${styles.secondary}`}>
            Cancel
          </Button>
        </Link>
        <Button
          type="submit"
          className={`${styles.button} ${styles.primary}`}
          disabled={formik.isSubmitting}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default AccountAccessForm;
