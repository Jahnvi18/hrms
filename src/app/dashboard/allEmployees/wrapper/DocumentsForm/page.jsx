"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import styles from "@/app/ui/Dashboard/products/addProduct/form3.module.css";
import Link from "next/link";
import Button from "@/app/ui/Dashboard/button/button";
import Input from "@/app/ui/Dashboard/input/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

const FILE_SIZE_LIMIT = 2 * 1024 * 1024; // 2MB
const ALLOWED_FORMATS = ["image/jpeg", "application/pdf"];

const validationSchema = Yup.object({
  appointmentLetter: Yup.mixed()
    .required("Appointment Letter is required")
    .test("fileSize", "File too large (Max 2MB)", (value) =>
      value ? value.size <= FILE_SIZE_LIMIT : true
    )
    .test("fileFormat", "Invalid file format (Only JPEG, PDF)", (value) =>
      value ? ALLOWED_FORMATS.includes(value.type) : true
    ),
  salarySlips: Yup.mixed()
    .required("Salary Slips are required")
    .test("fileSize", "File too large (Max 2MB)", (value) =>
      value ? value.size <= FILE_SIZE_LIMIT : true
    )
    .test("fileFormat", "Invalid file format (Only JPEG, PDF)", (value) =>
      value ? ALLOWED_FORMATS.includes(value.type) : true
    ),
  relievingLetter: Yup.mixed()
    .required("Relieving Letter is required")
    .test("fileSize", "File too large (Max 2MB)", (value) =>
      value ? value.size <= FILE_SIZE_LIMIT : true
    )
    .test("fileFormat", "Invalid file format (Only JPEG, PDF)", (value) =>
      value ? ALLOWED_FORMATS.includes(value.type) : true
    ),
  experienceLetter: Yup.mixed()
    .required("Experience Letter is required")
    .test("fileSize", "File too large (Max 2MB)", (value) =>
      value ? value.size <= FILE_SIZE_LIMIT : true
    )
    .test("fileFormat", "Invalid file format (Only JPEG, PDF)", (value) =>
      value ? ALLOWED_FORMATS.includes(value.type) : true
    ),
});

const DocumentsForm = () => {
  const [fileNames, setFileNames] = useState({});

  const router = useRouter();
  const { updateFormData, formData } = useFormContext();
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
      updateFormData({
        appointmentLetter: formik.values.appointmentLetter.name,
        salarySlips: formik.values.salarySlips.name,
        relievingLetter: formik.values.appointmentLetter.name,
        experienceLetter: formik.values.experienceLetter.name,
      });
      router.push(`/dashboard/allEmployees/wrapper/AccountAccessForm`);
    },
  });

  const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    formik.setFieldValue(field, file);
    setFileNames((prev) => ({ ...prev, [field]: file ? file.name : "" }));
  };
  // const getFilePreview = (file) => (file ? URL.createObjectURL(file) : null);
  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <div className={styles.uploadSection}>
        <div className={styles.uploadBox}>
          <Input
            type="file"
            accept=".jpg,.jpeg,.pdf"
            onChange={(e) => handleFileChange(e, "appointmentLetter")}
            hidden
            id="appointmentLetter"
          />
          <label htmlFor="appointmentLetter">
            <p>
              Drag & Drop or{" "}
              <span style={{ color: "#673ab7", cursor: "pointer" }}>
                choose file
              </span>
            </p>
            <p>Supported formats: JPEG, PDF</p>
          </label>

          {fileNames.appointmentLetter && (
            <p className={styles.uploadedFile}>{fileNames.appointmentLetter}</p>
          )}
          {formik.errors.appointmentLetter && (
            <p className={styles.error}>{formik.errors.appointmentLetter}</p>
          )}
        </div>

        <div className={styles.uploadBox}>
          <Input
            type="file"
            accept=".jpg,.jpeg,.pdf"
            onChange={(e) => handleFileChange(e, "salarySlips")}
            hidden
            id="salarySlips"
          />
          <label htmlFor="salarySlips">
            <p>
              Drag & Drop or{" "}
              <span style={{ color: "#673ab7", cursor: "pointer" }}>
                choose file
              </span>
            </p>
            <p>Supported formats: JPEG, PDF</p>
          </label>
          {/* {formData.salarySlips
            ? formData.salarySlips.name
            : "No file uploaded"} */}
          {fileNames.salarySlips && (
            <p className={styles.uploadedFile}>{fileNames.salarySlips}</p>
          )}
          {formik.errors.salarySlips && (
            <p className={styles.error}>{formik.errors.salarySlips}</p>
          )}
        </div>

        <div className={styles.uploadBox}>
          <Input
            type="file"
            accept=".jpg,.jpeg,.pdf"
            onChange={(e) => handleFileChange(e, "relievingLetter")}
            hidden
            id="relievingLetter"
          />
          <label htmlFor="relievingLetter">
            <p>
              Drag & Drop or{" "}
              <span style={{ color: "#673ab7", cursor: "pointer" }}>
                choose file
              </span>
            </p>
            <p>Supported formats: JPEG, PDF</p>
          </label>
          {/* {formData.relievingLetter
            ? formData.relievingLetter.name
            : "No file uploaded"} */}
          {fileNames.relievingLetter && (
            <p className={styles.uploadedFile}>{fileNames.relievingLetter}</p>
          )}
          {formik.errors.relievingLetter && (
            <p className={styles.error}>{formik.errors.relievingLetter}</p>
          )}
        </div>

        <div className={styles.uploadBox}>
          <Input
            type="file"
            accept=".jpg,.jpeg,.pdf"
            onChange={(e) => handleFileChange(e, "experienceLetter")}
            hidden
            id="experienceLetter"
          />
          <label htmlFor="experienceLetter">
            <p>
              Drag & Drop or{" "}
              <span style={{ color: "#673ab7", cursor: "pointer" }}>
                choose file
              </span>
            </p>
            <p>Supported formats: JPEG, PDF</p>
          </label>
          {/* {formData.experienceLetter
            ? formData.experienceLetter.name
            : "No file uploaded"} */}
          {fileNames.experienceLetter && (
            <p className={styles.uploadedFile}>{fileNames.experienceLetter}</p>
          )}
          {formik.errors.experienceLetter && (
            <p className={styles.error}>{formik.errors.experienceLetter}</p>
          )}
        </div>
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

export default DocumentsForm;
