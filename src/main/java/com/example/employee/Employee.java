package com.example.employee;

public class Employee
{
    private String empId;
    private String empName;
    private String empPhone;
    private String empMail;

    /**
     * @return the empId
     */
    public String getEmpId() {
        return empId;
    }

    /**
     * @return the empMail
     */
    public String getEmpMail() {
        return empMail;
    }

    /**
     * @return the empName
     */
    public String getEmpName() {
        return empName;
    }

    /**
     * @return the empPhone
     */
    public String getEmpPhone() {
        return empPhone;
    }

    /**
     * @param empId the empId to set
     */
    public void setEmpId(String empId) {
        this.empId = empId;
    }

    /**
     * @param empMail the empMail to set
     */
    public void setEmpMail(String empMail) {
        this.empMail = empMail;
    }

    /**
     * @param empName the empName to set
     */
    public void setEmpName(String empName) {
        this.empName = empName;
    }

    /**
     * @param empPhone the empPhone to set
     */
    public void setEmpPhone(String empPhone) {
        this.empPhone = empPhone;
    }

    
}