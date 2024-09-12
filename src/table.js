import React, { useState } from 'react';
import './table.css';
import Pagination from './pagination';

 const date_diff_indays = function (date1) {
    const dt1 = new Date(date1);
    const dt2 = new Date();
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

function Table(props) {
    function statusConvertion(status, index){
        const str = status.replace(/_/g,' ')

        if(status === 'in_transit'){
            var diff  =  date_diff_indays(props.data[index].start)
            console.log("diff", diff , props.data[index] )
            if(diff <= 8){
                return str.charAt(0).toUpperCase() + str.slice(1)
            } else{
                return `Delayed by ${diff-8} days`
            }
        } else{
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerpage] = useState(50);
    const totalPages = Math.round(props.data.length / perPage);
    const filteredTableData = (() => {
        return JSON.parse(JSON.stringify(props.data)).splice((currentPage - 1) * perPage, perPage)
    })();
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchData(pageNumber);
   };
    const fetchData = (page) => {
        // Fetch data for the specified page
        console.log(`Fetching data for page ${page}`);
    };
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {props.columnNames.map(item => {
                            return <th>{item}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {filteredTableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.customer.name}</td>
                            <td>{item.customer.address}</td>
                            <td>{item.customer.city}</td>
                            <td>{item.customer.country}</td>
                            <td class="text-capitalize">{statusConvertion(item.status, index)}</td>
                            <td class="text-capitalize">{statusConvertion(item.carrier, index)}</td>
                        </tr>
                    ))}
                </tbody>
              </table>
           {props.data.length > 50 && <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                pageSizeHandler={(event) => {
                    console.log(event.target.value)
                    setCurrentPage(1)
                    setPerpage(event.target.value);
                }} />}
        </div>
    )
}

export default Table;