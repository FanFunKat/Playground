import { Table } from "./Table";
import { useState } from "react";

export function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label)
    } else if (sortOrder === "asc") {
      setSortOrder("desc")
      setSortBy(label)
    } else if (sortOrder === "desc") {
      setSortOrder(null)
      setSortOrder(null)
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
    };
  });


  return (
    <>
      {sortOrder}-{sortBy}
      <Table {...props} config={updatedConfig} />
    </>
  )
}