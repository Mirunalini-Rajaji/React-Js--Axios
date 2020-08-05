import React from 'react';
import axios from "axios";
import Display from './display';
class Employee extends React.Component {
    constructor(props){
        super(props)
        this.state={
          
            allemployees:[]
        }
    }

    componentWillMount(){
        this.getEmployee()
        
    }

  
    getEmployee(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({allemployees: response.data.data})
                console.log(this.state.allemployees)
            }, (error)=>{
                console.log(error)
            })
    }
    displayEmployee=()=>{
        return(
            this.state.allemployees.map(employee=>{
                return(
                    <Display
                    key={employee.id}
                    id={employee.id}
                     name={employee.employee_name}
                     salary={employee.employee_salary}
                     age = {employee.employee_age}
                    profile = {employee.profile_image}>
                    </Display>
                )
            }
        
            )
        )
    }
    render() { 
        return (
            <div>
                <center>
               <table border="1" cellPadding="10px">
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                           <th>Salary</th>
                           <th>Age</th>
                           <th>Profile</th>
                       </tr>
                   </thead>
                   <tbody>
                        {this.displayEmployee()}
                   </tbody>
               </table>
               </center>
            </div>
          );
    }
}
 
export default Employee;