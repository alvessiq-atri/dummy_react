import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function ReactTable() {
  //   const [menuTest, setMenuTest] = useState("");

  //   const fetchData = () => {
  //     axios.get("http://localhost:8000/menu").then((response) => {
  //       console.log(response.data);
  //       setMenuTest(response.data);
  //     });
  //   };

  //   useEffect(() => {
  //     (async () => {
  //       fetchData();
  //     })();
  //   }, []);

  const columns = [
    {
      Header: "Best Combination",
      columns: [
        {
          Header: "ID",
          accessor: (row) => <Link to={"/cart/" + row.id}>{row.id}</Link>,
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Vovos Fav",
          accessor: "vovofav",
        },
        {
          Header: "Ingredients",
          accessor: (row) => row.ingredients + " ",
          // {console.log(row.ingredients)},
        },
        {
          Header: "Button",
          accessor: (row) => (
            <Button href={"/" + row.id} color="warning">
              Edit {row.name}
            </Button>
          ),
        },
        // {
        //   Header: "Image",
        //   accessor: "image",
        //   Cell: (props) => (
        //     <img src={props.row.original.image} width={100} alt="Food" />
        //   ),
        // },
      ],
    },
  ];

  //   const data = useMemo(() => menuTest, [menuTest]);
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8000/menu");
      setData(result.data);
    })();
  }, []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default ReactTable;
