// "use client";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import styles from "@/app/ui/Dashboard/products/addProduct/addProduct.module.css";
// import Link from "next/link";
// import Button from "@/app/ui/Dashboard/button/button";
// import { useRouter } from "next/navigation";
// import Input from "@/app/ui/Dashboard/input/input";
// import "@/app/globals.css";
// import SelectBox from "@/app/ui/Dashboard/selectoption/select";

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   mobile: Yup.string()
//     .matches(/^\d{10}$/, "Invalid mobile number")
//     .required("Mobile Number is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   dob: Yup.date().required("Date of Birth is required"),
//   maritalStatus: Yup.string().required("Marital Status is required"),
//   gender: Yup.string().required("Gender is required"),
//   nationality: Yup.string().required("Nationality is required"),
//   address: Yup.string().required("Address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   zipCode: Yup.string().required("ZIP Code is required"),
// });

// const PersonalInfoForm = () => {
//   const router = useRouter();
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       mobile: "",
//       email: "",
//       dob: "",
//       maritalStatus: "",
//       gender: "",
//       nationality: "",
//       address: "",
//       city: "",
//       state: "",
//       zipCode: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log("values:", values);
//       // localStorage.setItem("personalData", JSON.stringify(values));
//       router.push("/dashboard/allEmployees/wrapper/ProfessionalInfoForm");
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
//       <div className="flex gap-5 mb-5">
//         <Input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           className="border w-full h-10 p-3 "
//           error={formik.errors.firstName}
//           {...formik.getFieldProps("firstName")}
//         />

//         <Input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           className="border w-full h-10"
//           error={formik.errors.lastName}
//           {...formik.getFieldProps("lastName")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <Input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           className="border w-full h-10"
//           error={formik.errors.mobile}
//           {...formik.getFieldProps("mobile")}
//         />

//         <Input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           className="border w-full h-10"
//           error={formik.errors.email}
//           {...formik.getFieldProps("email")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <Input
//           type="date"
//           name="dob"
//           className="border w-full h-10"
//           error={formik.errors.dob}
//           {...formik.getFieldProps("dob")}
//         />

//         <SelectBox
//           name="maritalStatus"
//           value={formik.values.maritalStatus}
//           className="border w-full h-10"
//           onChange={formik.handleChange}
//           options={[
//             { value: "Marital Status", label: "Marital Status" },
//             { value: "Single", label: "Single" },
//             { value: "Married", label: "Married" },
//           ]}
//           error={formik.errors.maritalStatus}
//           {...formik.getFieldProps("maritalStatus")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <SelectBox
//           name="gender"
//           value={formik.values.gender}
//           className="border w-full h-10"
//           onChange={formik.handleChange}
//           options={[
//             { value: "Gender", label: "Gender" },
//             { value: "Male", label: "Male" },
//             { value: "Female", label: "Female" },
//           ]}
//           error={formik.errors.gender}
//           {...formik.getFieldProps("gender")}
//         />
//         <Input
//           type="text"
//           name="nationality"
//           placeholder="Nationality"
//           className="border w-full h-10"
//           error={formik.errors.nationality}
//           {...formik.getFieldProps("nationality")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <Input
//           type="text"
//           name="address"
//           placeholder="Address"
//           className="border w-full h-10"
//           error={formik.errors.address}
//           {...formik.getFieldProps("address")}
//         />
//       </div>

//       <div className="flex gap-5 mb-5">
//         <Input
//           type="text"
//           name="city"
//           placeholder="City"
//           className="border w-full h-10"
//           error={formik.errors.city}
//           {...formik.getFieldProps("city")}
//         />

//         <Input
//           type="text"
//           name="state"
//           placeholder="State"
//           className="border w-full h-10"
//           error={formik.errors.state}
//           {...formik.getFieldProps("state")}
//         />

//         <Input
//           type="text"
//           name="zipCode"
//           placeholder="ZIP Code"
//           className="border w-full h-10 "
//           error={formik.errors.zipCode}
//           {...formik.getFieldProps("zipCode")}
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
// };

// export default PersonalInfoForm;

"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "@/app/ui/Dashboard/products/addProduct/addProduct.module.css";
import Link from "next/link";
import Button from "@/app/ui/Dashboard/button/button";
import { useRouter } from "next/navigation";
import Input from "@/app/ui/Dashboard/input/input";
import "@/app/globals.css";
import { useFormContext } from "@/app/context/FormContext";
import SelectBox from "@/app/ui/Dashboard/selectoption/select";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobile: Yup.string().required("Mobile Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dob: Yup.date().required("Date of Birth is required"),
  maritalStatus: Yup.string().required("Marital Status is required"),
  gender: Yup.string().required("Gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("ZIP Code is required"),
});

const PersonalInfoForm = () => {
  const router = useRouter();
  const { updateFormData, formData } = useFormContext();
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
      updateFormData(values);
      router.push(`/dashboard/allEmployees/wrapper/ProfessionalInfoForm`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <div className="flex gap-5 mb-5">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="border w-full h-10 p-3 "
          error={formik.errors.firstName}
          value={formik.values.firstName}
          {...formik.getFieldProps("firstName")}
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="border w-full h-10"
          error={formik.errors.lastName}
          value={formik.values.lastName}
          {...formik.getFieldProps("lastName")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <Input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="border w-full h-10"
          error={formik.errors.mobile}
          value={formik.values.mobile}
          {...formik.getFieldProps("mobile")}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border w-full h-10"
          error={formik.errors.email}
          value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <Input
          type="date"
          name="dob"
          className="border w-full h-10 text-gray-400"
          error={formik.errors.dob}
          value={formik.values.dob}
          {...formik.getFieldProps("dob")}
        />

        <SelectBox
          name="maritalStatus"
          value={formik.values.maritalStatus}
          className="border w-full h-10"
          onChange={formik.handleChange}
          options={[
            { value: "Marital Status", label: "Marital Status" },
            { value: "Single", label: "Single" },
            { value: "Married", label: "Married" },
          ]}
          error={formik.errors.maritalStatus}
          {...formik.getFieldProps("maritalStatus")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <SelectBox
          name="gender"
          value={formik.values.gender}
          className="border w-full h-10"
          onChange={formik.handleChange}
          options={[
            { value: "Gender", label: "Gender" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          error={formik.errors.gender}
          {...formik.getFieldProps("gender")}
        />
        <Input
          type="text"
          name="nationality"
          placeholder="Nationality"
          className="border w-full h-10"
          error={formik.errors.nationality}
          value={formik.values.nationality}
          {...formik.getFieldProps("nationality")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <Input
          type="text"
          name="address"
          placeholder="Address"
          className="border w-full h-10"
          error={formik.errors.address}
          value={formik.values.address}
          {...formik.getFieldProps("address")}
        />
      </div>

      <div className="flex gap-5 mb-5">
        <Input
          type="text"
          name="city"
          placeholder="City"
          className="border w-full h-10"
          error={formik.errors.city}
          value={formik.values.city}
          {...formik.getFieldProps("city")}
        />

        <Input
          type="text"
          name="state"
          placeholder="State"
          className="border w-full h-10"
          error={formik.errors.state}
          value={formik.values.state}
          {...formik.getFieldProps("state")}
        />

        <Input
          type="text"
          name="zipCode"
          placeholder="ZIP Code"
          className="border w-full h-10 "
          error={formik.errors.zipCode}
          value={formik.values.zipCode}
          {...formik.getFieldProps("zipCode")}
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
};

export default PersonalInfoForm;
