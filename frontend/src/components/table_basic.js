import React, {useEffect, useMemo, useState} from "react"
import {useTable} from "react-table"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {defaultApiUrl} from "../apiUrl";
const BasicTable = ({endPoint}) => {
    const urlEndPoint = `${defaultApiUrl}/${endPoint}`;
    // const urlEndPoint = `https://macro-splitter-api.herokuapp.com/api/v1/${endPoint}`;
    console.log("Endpoint:" , urlEndPoint)
    const showMoreButtonStyle = " rounded-lg bg-green-200 hover:bg-green-300 hover:text-white p-1.5 w-5/12 font-bold"
    // const deleteButtonStyle = " rounded-lg bg-red-800 p-1.5 w-9/12 text-white"
    const [data, setData] = useState([]);
    let navigate = useNavigate()

    function fetchProcessedData() {
        axios.get(urlEndPoint)
            .then(res => {
                if (endPoint === "users_processed_data") {
                    setData(res.data.users);
                }
                else if (endPoint==="foods"){
                    setData(res.data.foods);
                }

            })
            .catch(err => {
                console.log(err);
            });
    }

    const COLUMNS = [
        {Header: "Id", accessor: "id",},
        {Header: "Name", accessor: "name"},
        {
            Header: " ",
            Cell: accessor =>
                <button
                    className={showMoreButtonStyle}
                    onClick={() => {
                        console.log("clicked")
                        if (endPoint === "users_processed_data"){
                            // console.log(accessor.row.original.id)
                            navigate(`/user/${accessor.row.original.id}`)
                        }
                        else if (endPoint === "foods"){
                            navigate(`/food/${accessor.row.original.id}`)
                        }
                    }}>
                    Show More
                </button>
        },
    ];
    const columns = useMemo(() => COLUMNS, [])
    useEffect(() => {
        fetchProcessedData()
    }, []);
    const tableInstance = useTable({
        columns,
        data,
    })
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        tableInstance
    return (
        <div>
            <div>
                <table {...getTableProps()} className="w-screen">
                    <thead className="bg-neutral-800 text-white border-t-2 border-neutral-600/50">
                    {headerGroups.map((headerGroups_) => (
                        <tr {...headerGroups_.getHeaderGroupProps()}>
                            {headerGroups_.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="p-2 text-sm font-semibold tracking-wide text-center"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr className="hover:font-bold hover:shadow-md text-sm capitalize hover:bg-neutral-100" {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="p-2 text-center border-b-2 border-gray-100 "
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {/*<div className="mt-5">*/}
                {/*    <button className={bigButton} onClick={() =>*/}
                {/*        navigate("/")}>*/}
                {/*        Go Home*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default BasicTable
