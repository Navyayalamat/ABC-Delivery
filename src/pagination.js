import './pagination.css'; // Import your CSS file for styling

function  Pagination(props){
  const {onPageChange} = props;
  const pageValues = [50,100,150]
  const handlePrevPage = () => {
    if (props.currentPage > 1) {
      onPageChange(props.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (props.currentPage < props.totalPages) {
      onPageChange(props.currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumberLimit = 5; // Number of page buttons to display
    const minPageNumberLimit = 1;
    let startPage = Math.max(props.currentPage - maxPageNumberLimit, minPageNumberLimit);
    let endPage = Math.min(props.currentPage + maxPageNumberLimit, props.totalPages);
    // Adjust start and end page if near the boundaries
    if (props.currentPage <= maxPageNumberLimit) {
      endPage = Math.min(maxPageNumberLimit * 2, props.totalPages);
    }
    if (endPage - startPage < maxPageNumberLimit * 2) {
      startPage = Math.max(endPage - maxPageNumberLimit * 2, minPageNumberLimit);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={props.currentPage === i ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };
 
  return (
    <div className="pagination">
        <div className="pagination-list">
            <button onClick={handlePrevPage} disabled={props.currentPage === 1}>
                Previous
            </button>
            <ul className="page-numbers">
                {renderPageNumbers()}
            </ul>
            <button
                onClick={handleNextPage}
                disabled={props.currentPage === props.totalPages}
            >
                Next
            </button>
        </div>
        <div className="per-page">
            <div>
                <label>Per Page:</label>
                <select onChange={props.pageSizeHandler} className="per-page-dw">
                {pageValues.map((item)=>{
                    return <option value={item}>{item}</option>
                })}
                </select>
            </div>
            <div className="d-flex fs-14">
                <p className="m-0">Page {props.currentPage} of {props.totalPages}</p>
            </div>
        </div>
    </div>
  );
};

export default Pagination;