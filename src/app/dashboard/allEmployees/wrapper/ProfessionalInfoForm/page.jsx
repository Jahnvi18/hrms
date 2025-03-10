// "use client";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";
// import styles from "@/app/ui/Dashboard/products/addProduct/form.module.css";
// import Link from "next/link";
// import Button from "@/app/ui/Dashboard/button/button";
// import Input from "@/app/ui/Dashboard/input/input";
// import SelectBox from "@/app/ui/Dashboard/selectoption/select";
// import "@/app/globals.css";

// const validationSchema = Yup.object({
//   employeeId: Yup.string().required("employeeId is required"),
//   userName: Yup.string().required("userName is required"),
//   employeeType: Yup.string().required("employeeType is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   department: Yup.string().required("department is required"),
//   designation: Yup.string().required("designation is required"),
//   workingDays: Yup.string().required("workingDays is required"),
//   joiningDate: Yup.string().required("joiningDate is required"),
//   officeLocation: Yup.string().required("officeLocation is required"),
// });

// function ProfessionalInfoForm() {
//   const router = useRouter();
//   const formik = useFormik({
//     initialValues: {
//       employeeId: "",
//       userName: "",
//       employeeType: "",
//       email: "",
//       department: "",
//       designation: "",
//       workingDays: "",
//       joiningDate: "",
//       officeLocation: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log("values:", values);
//       console.log("hello");
//       router.push("/dashboard/allEmployees/wrapper/DocumentsForm");
//     },
//   });

//   return (
//     <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
//       <div className="flex gap-5 mb-5">
//         <Input
//           type="text"
//           placeholder="Employee ID"
//           name="employeeId"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.employeeId}
//           {...formik.getFieldProps("employeeId")}
//         />
//         <Input
//           type="text"
//           placeholder="User Name"
//           name="userName"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.userName}
//           {...formik.getFieldProps("userName")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <SelectBox
//           name="employeeType"
//           value={formik.values.employeeType}
//           className="border w-full h-10"
//           onChange={formik.handleChange}
//           options={[
//             { value: "Select Employee Type", label: "Select Employee Type" },
//             { value: "Full Time", label: "Full Time" },
//             { value: "Part Time", label: "Part Time" },
//           ]}
//           error={formik.errors.employeeType}
//           {...formik.getFieldProps("employeeType")}
//         />

//         <Input
//           type="email"
//           placeholder="Email Address"
//           name="email"
//           className="border w-full h-10 p-3"
//           error={formik.errors.email}
//           {...formik.getFieldProps("email")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <SelectBox
//           name="department"
//           value={formik.values.department}
//           className="border w-full h-10"
//           // onChange={formik.handleChange}
//           options={[
//             { value: "Select Department", label: "Select Department" },
//             { value: "HR", label: "HR" },
//             { value: "Finance", label: "Finance" },
//           ]}
//           error={formik.errors.department}
//           {...formik.getFieldProps("department")}
//         />
//         <Input
//           type="text"
//           name="designation"
//           placeholder="Enter Designation"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.designation}
//           {...formik.getFieldProps("designation")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <SelectBox
//           name="workingDays"
//           value={formik.values.workingDays}
//           className="border w-full h-10"
//           // onChange={formik.handleChange}
//           options={[
//             { value: "Select Working Days", label: "Select Working Days" },
//             { value: "5 Days", label: "5 Days" },
//             { value: "6 Days", label: "6 Days" },
//           ]}
//           error={formik.errors.workingDays}
//           {...formik.getFieldProps("workingDays")}
//         />
//         <Input
//           type="date"
//           name="joiningDate"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.joiningDate}
//           {...formik.getFieldProps("joiningDate")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <SelectBox
//           name="officeLocation"
//           value={formik.values.officeLocation}
//           className="border w-full h-10"
//           // onChange={formik.handleChange}
//           options={[
//             {
//               value: "Select Office Location",
//               label: "Select Office Location",
//             },
//             { value: "New York", label: "New York" },
//             { value: "London", label: "London" },
//           ]}
//           error={formik.errors.officeLocation}
//           {...formik.getFieldProps("officeLocation")}
//         />
//       </div>

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
//           Next
//         </Button>
//       </div>
//     </form>
//   );
// }
// export default ProfessionalInfoForm;

"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import styles from "@/app/ui/Dashboard/products/addProduct/form.module.css";
import Link from "next/link";
import Button from "@/app/ui/Dashboard/button/button";
import Input from "@/app/ui/Dashboard/input/input";
import SelectBox from "@/app/ui/Dashboard/selectoption/select";
import "@/app/globals.css";
import { useFormContext } from "@/app/context/FormContext";

const validationSchema = Yup.object({
  employeeId: Yup.string().required("employeeId is required"),
  userName: Yup.string().required("userName is required"),
  employeeType: Yup.string().required("employeeType is required"),
  professionalEmail: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  department: Yup.string().required("department is required"),
  designation: Yup.string().required("designation is required"),
  workingDays: Yup.string().required("workingDays is required"),
  joiningDate: Yup.string().required("joiningDate is required"),
  officeLocation: Yup.string().required("officeLocation is required"),
});

function ProfessionalInfoForm() {
  const router = useRouter();
  const { updateFormData, formData } = useFormContext();
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
      updateFormData(values);
      router.push(`/dashboard/allEmployees/wrapper/DocumentsForm`);
    },
  });

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <div className="flex gap-5 mb-5">
        <Input
          type="text"
          placeholder="Employee ID"
          name="employeeId"
          className="border w-full h-10 p-3 "
          error={formik.errors.employeeId}
          {...formik.getFieldProps("employeeId")}
        />
        <Input
          type="text"
          placeholder="User Name"
          name="userName"
          className="border w-full h-10 p-3 "
          error={formik.errors.userName}
          {...formik.getFieldProps("userName")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <SelectBox
          name="employeeType"
          value={formik.values.employeeType}
          className="border w-full h-10"
          onChange={formik.handleChange}
          options={[
            { value: "Select Employee Type", label: "Select Employee Type" },
            { value: "Full Time", label: "Full Time" },
            { value: "Part Time", label: "Part Time" },
          ]}
          error={formik.errors.employeeType}
          {...formik.getFieldProps("employeeType")}
        />

        <Input
          type="email"
          placeholder="Email Address"
          name="professionalEmail"
          className="border w-full h-10 p-3"
          error={formik.errors.email}
          {...formik.getFieldProps("professionalEmail")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <SelectBox
          name="department"
          value={formik.values.department}
          className="border w-full h-10"
          // onChange={formik.handleChange}
          options={[
            { value: "Select Department", label: "Select Department" },
            { value: "HR", label: "HR" },
            { value: "Finance", label: "Finance" },
          ]}
          error={formik.errors.department}
          {...formik.getFieldProps("department")}
        />
        <Input
          type="text"
          name="designation"
          placeholder="Enter Designation"
          className="border w-full h-10 p-3 "
          error={formik.errors.designation}
          {...formik.getFieldProps("designation")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <SelectBox
          name="workingDays"
          value={formik.values.workingDays}
          className="border w-full h-10"
          // onChange={formik.handleChange}
          options={[
            { value: "Select Working Days", label: "Select Working Days" },
            { value: "5 Days", label: "5 Days" },
            { value: "6 Days", label: "6 Days" },
          ]}
          error={formik.errors.workingDays}
          {...formik.getFieldProps("workingDays")}
        />
        <Input
          type="date"
          name="joiningDate"
          className="border w-full h-10 p-3 text-gray-400"
          error={formik.errors.joiningDate}
          {...formik.getFieldProps("joiningDate")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <SelectBox
          name="officeLocation"
          value={formik.values.officeLocation}
          className="border w-full h-10"
          // onChange={formik.handleChange}
          options={[
            {
              value: "Select Office Location",
              label: "Select Office Location",
            },
            { value: "New York", label: "New York" },
            { value: "London", label: "London" },
          ]}
          error={formik.errors.officeLocation}
          {...formik.getFieldProps("officeLocation")}
        />
      </div>

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
          Next
        </Button>
      </div>
    </form>
  );
}
export default ProfessionalInfoForm;
