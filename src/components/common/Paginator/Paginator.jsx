import React, {useState} from "react";
import styles from "../Paginator/Paginator.module.css";

let Paginator = ({ currentPage, onPageChanged, totalCount, pageSize, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let arrPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    arrPages.push(i);
  }

  let portionCount = Math.ceil(pagesCount/portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber-1)*portionSize+1
  let rightPortionPageNumber = portionNumber*portionSize

  console.log(portionCount,
    portionNumber,
    leftPortionPageNumber,
    rightPortionPageNumber)
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 &&
        <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>
      }
      {arrPages.filter((el)=> el >= leftPortionPageNumber && el <= rightPortionPageNumber)
      .map((el) => {
        return (
          <span
            key={el}
            className={currentPage === el ? styles.selected : null}
            onClick={() => {
              onPageChanged(el);
            }}
          >
            {el}
          </span>
        );
      })}
      {portionCount > portionNumber && 
       <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>
      }
    </div>
  );
};

export default Paginator;
