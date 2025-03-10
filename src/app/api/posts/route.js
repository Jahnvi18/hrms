
import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";
export async function GET(req) {
    try {
        const db = await createConnection();

        // Extract `employee_id` from request URL
        const { searchParams } = new URL(req.url);
        const employeeId = searchParams.get("employee_id");

        let sql;
        let values = [];

        if (employeeId) {
            // Fetch single employee by `employee_id`
            sql = "SELECT * FROM employees WHERE employee_id = ?";
            values = [employeeId];
        } else {
            // Fetch all employees
            sql = "SELECT * FROM employees";
        }

        const [employees] = await db.query(sql, values);
        return NextResponse.json(employees);
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function POST(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }



    try {

        const db = await createConnection()
        const body = await req.json()
        const {
            firstName,
            lastName,
            mobile,
            email,
            dob,
            maritalStatus,
            gender,
            nationality,
            address,
            city,
            state,
            zipCode,
            employeeId,
            userName,
            employeeType,
            professionalEmail,
            department,
            designation,
            workingDays,
            joiningDate,
            officeLocation,
            appointmentLetter,
            salarySlips,
            relievingLetter,
            experienceLetter,
            skype,
            slack,
            github,
        } = body;
        console.log('req.body:', body)


        const query = `
                           INSERT INTO employees 
    (first_name, last_name, mobile_no, email, date_of_birth, marital_status, gender, nationality, 
     address, city, state, zip_code,employee_id, username, employee_type, professional_email_address, department, designation, 
     working_day, joining_day, office_location, appointment_letter, salary_slip, reliving_letter, experience_letter, email_address, slack_id, github_name) 
VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?)

                    `;
        const values = [
            firstName,
            lastName,
            mobile,
            email,
            dob,
            maritalStatus,
            gender,
            nationality,
            address,
            city,
            state,
            zipCode,
            employeeId,
            userName,
            employeeType,
            professionalEmail,
            department,
            designation,
            workingDays,
            joiningDate,
            officeLocation,
            appointmentLetter,
            salarySlips,
            relievingLetter,
            experienceLetter,
            skype,
            slack,
            github,

        ];

        console.log('values:', values)
        await db.query(query, values)

        return NextResponse.json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ message: "Database error", error: error.message });
    }
}




export async function DELETE(req) {
    try {
        const db = await createConnection();

        // Extract `employee_id` from request body
        const { employee_id } = await req.json();

        if (!employee_id) {
            return NextResponse.json({ error: "Employee ID is required" }, { status: 400 });
        }

        // DELETE Query
        const sql = "DELETE FROM employees WHERE employee_id = ?";
        const [result] = await db.query(sql, [employee_id]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: "Employee not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Employee deleted successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
