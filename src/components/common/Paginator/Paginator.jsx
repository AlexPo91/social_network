import React from "react";
import styles from "../Paginator/Paginator.module.css";

const Paginator = ({ currentPage, onPageChanged, totalCount, pageSize }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let arrPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    arrPages.push(i);
  }
  return (
    <div>
      {arrPages.map((el) => {
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
    </div>
  );
};

export default Paginator;
