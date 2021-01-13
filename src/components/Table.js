import React from "react";

function Table(props) {
  return (
    <table className="employeeInfo">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>
  );
}

export default Table;