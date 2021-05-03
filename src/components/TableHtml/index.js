import React from "react";

function TableHtml(props) {
  let { format, headings, rows } = props;
  return (
    <table className={`table ${format || "table-striped"}`}>
    <thead>
      <tr>
        {headings.map(heading => <th scope="col" onClick={props.onClick}>{heading}</th>)}
      </tr>
    </thead>
    <tbody>   
      {rows.map(row => <tr>{row.map(item => <td>{item}</td>)}</tr>)}   
    </tbody>
  </table>
  );
}

export default TableHtml;