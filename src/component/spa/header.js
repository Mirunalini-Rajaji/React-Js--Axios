import React from 'react';
import { Link} from "react-router-dom";
class Header extends React.Component {
   
    render() { 
        return (  
            <div>
                <center>
                 <h2>Employee List</h2>
               
                    <h4><Link to="/employee" style={{ textDecoration:'none'}}>Employee</Link></h4>
                    </center>
            </div>
        );
    }
}
 
export default Header;