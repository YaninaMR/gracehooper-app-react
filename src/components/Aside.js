import React, { Component } from 'react';
import Grace_Hooper from '../img/Grace_Hopper.jpg';
import Rank from '../img/622px-US-O7_insignia.svg.png'
import Flag_EEUU from '../img/eeuu.png'
import Navy from '../img/Navy.png'
import './Aside.css';


class Aside extends Component {
  render() {
    return (
      <aside className="summary col-md-3">
        <table class="summary-table">
          <thead>
            <tr>
              <th colspan="2">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
           <tr>
            <td colspan="2">
              <img src={Grace_Hooper} alt="Grace Hopper" width="150px" high="150px" />
              <p>Rear Admiral Grace M. Hopper,1984</p>
              <hr></hr>
            </td>  
           </tr>
           <tr>
            <th>Nickname</th>
            <td>"Amazing Grace"</td>
           </tr>
           <tr>
            <th>Born</th>
            <td>December 9,1906 <br></br>New York City,U.S.</td>
           </tr>
           <tr>
            <th>Died</th>
            <td>January 1 , 1992(age 85)<br></br> Arlingthon , Virginia</td>
           </tr>
           <tr>
            <th>All</th>
           </tr>
           <tr>
            <th>Years of <br></br>service</th>
            <td>1943-1966,1967-1971,1972-1986</td>
           </tr>
           <tr>
            <th>Rank</th>
            <td><img src={Rank} alt="star"></img>Rear admiral (lower half)</td>
           </tr>
           <tr>
            <th>Allegiance</th>
            <td><img src={Flag_EEUU} alt="star"></img>United States of America</td>
           </tr>
           <tr>
            <th>Service/branch</th>
            <td><img src={Navy} alt="star"></img>United States Navy</td>
           </tr>
          </tbody>
        </table> 
        
       </aside>
  );
 }
}
export default Aside;
