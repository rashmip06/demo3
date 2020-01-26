package com.example.employee;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({ "/schedulelater" })
public class Controller {
    private final List<ParcelDetails> employees = createList();

    @RequestMapping(value = "/employees", method = RequestMethod.GET, produces = "application/json")
    public List<ParcelDetails> firstPage() {
        return employees;
    }

    private static List<ParcelDetails> createList() {
        /*
        final List<Employee> tempEmployees = new ArrayList<>();
        final Employee emp1 = new Employee();

        final Employee emp2 = new Employee();
        emp2.setEmpId("1234");
        emp2.setEmpMail("abc@gmail.com");
        emp2.setEmpName("ABC");
        emp2.setEmpPhone("123456789");

        tempEmployees.add(emp2);*/

        final List<ParcelDetails> tempEmployees = new ArrayList<>();
        
        try {
            final Connection con=DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/Login", "postgres", "tiger");
            if(con!=null)
            {
                System.out.println("Connection established");

                final String sel="select * from Parcel_Details where Parcel_Details.EmpID=Employee_Dashboard.EmpId";

                final Statement preparedStatement=con.createStatement();
                final ResultSet resultSet=preparedStatement.executeQuery(sel);
                System.out.println("Select executed");

                while(resultSet.next())
                {
                    final String empId=resultSet.getString("EmpID");
                    final String compname=resultSet.getString("Company_name");
                    final String pid=resultSet.getString("ParcelID");
                    final String r_time=resultSet.getString("Receive_Time");
                    final String r_date=resultSet.getString("Receive_Date");

                    final ParcelDetails p=new ParcelDetails();

                    p.setEmpId(empId);
                    p.setParcelID(pid);
                    p.setcname(compname);
                    p.setr_date(r_date);
                    p.setr_time(r_time);

                    tempEmployees.add(p);
                }
            }
            
        } catch (final Exception e) {
            //TODO: handle exception
        }
        


        return tempEmployees;
    }

    @PostMapping
    public ParcelDetails scheduleLater(@RequestBody final ParcelDetails entity) {
        // TODO: process POST request
        System.out.println("************************************************888*******");
        System.out.println("Date" + entity.getd_date());

        try {
            final Connection con = DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/Dashboard", "postgres",
                    "tiger");

            final Statement stmt = con.createStatement();

            stmt.executeQuery("Update Parcel_Details set Deliver_time= " + entity.getd_time() + " , Deliver_date="
                    + entity.getd_date() + "+ where EmpID=1246");

        } catch (final SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        
        return entity;
    }

    /*
    @PostMapping(value = "/dashboard")
    public Employee assignElse(@RequestBody Employee entity)
    {
        try {
            Connection con = DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/Dashboard", "postgres",
                    "tiger");
                    Statement stmt=con.createStatement();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return entity;
        
    }*/
    
    
    
}