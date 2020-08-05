import React from 'react';

class Display extends React.Component {
  
    render() { 
       
        return (  
           
               
             
                 
                     
                  
                 
                      <tr>
                          <td>{this.props.id}</td>
                          <td>{this.props.name}</td>
                          <td>{this.props.salary}</td>
                          <td>{this.props.age}</td>
                          <td>{this.props.image}</td>
                      </tr>
                 
                  
                 
                 
           
        );
    }
}
 
export default Display;