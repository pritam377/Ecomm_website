import { Paper, Table, TableCell, TableRow, TableContainer, TableHead, TableBody } from '@mui/material'
import React, { useEffect } from 'react'

const ProductsTable = () => {

  // useEffect(() =>{
  //   const data={
  //     instrmentName:null,
  //     category:null,
  //     colors:[],
  //     sizes:[],
  //     minPrice:null,
  //     maxPrice:null,
  //     minDiscount:0,
  //     sort: "price_low",
  //     pageNumber: 1,
  //     pageSize: 10,
  //     stock:""
  //   }
  //   dispatch(findProducts(data))
  // })
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductsTable