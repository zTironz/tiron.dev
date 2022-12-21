import React from 'react';

const getPagesArray = (totalPages) => {
    const result = [];
    for (let i = 0; i < totalPages; i++ ) {
        result.push(i + 1)
    }
    return result; 
}

const Pagination = ({totalPages, page, changePage}) => {
    console.log(totalPages)
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className='projects__page-wrapper'> {pagesArray.map(p => <span onClick={() => changePage(p)} key={p} className={page === p ? 'projects__page projects__page-current' : 'projects__page'}>{p}</span>)} </div>
    );
};

export default Pagination;