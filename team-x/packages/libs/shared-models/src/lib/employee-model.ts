export class EmployeeModel {
    name: string;
    email: string;
    position: string;
    department: string;
    hireDate: Date;
    phone?: string;

    constructor(
        name: string,
        email: string,
        position: string,
        department: string,
        hireDate: Date,
        phone?: string,
    ) {
        this.name = name;
        this.email = email;
        this.position = position;
        this.department = department;
        this.hireDate = hireDate;
        this.phone = phone;
    }
}
