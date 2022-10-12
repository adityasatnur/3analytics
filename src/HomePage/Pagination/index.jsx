import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import "./Pagination.scss";
const PaginationComponent = ({ items, itemsPerPage, pageNumber }) => {
  let [active, setActive] = useState(1);
  let [elements, setElements] = useState([]);
  useEffect(() => {
    let arr = [];
    let count = 0;
    items.forEach((item, index) => {
      if ((index + 1) % itemsPerPage == 0) {
        count += 1;
        arr.push(count);
      }
    });

    setElements(arr);
  }, [items]);

  const changePage = (e) => {
    setActive(Number(e.target.text));
    pageNumber(e.target.text);
  };

  return (
    <div>
      <Pagination>
        {elements.map((i) => {
          return (
            <Pagination.Item
              key={i}
              active={i === active ? true : false}
              onClick={(e) => changePage(e)}
            >
              {i}
            </Pagination.Item>
          );
        })}
      </Pagination>
      <br />
    </div>
  );
};

export default PaginationComponent;
