import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 }
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Food 1', 159, 6.0, 24, 4.0),
  createData('Food 2', 237, 9.0, 37, 4.3),
  createData('Food 3', 262, 16.0, 24, 6.0),
  createData('Food 4', 305, 3.7, 67, 4.3),
  createData('Food 5', 356, 16.0, 49, 3.9),
  createData('Food 6', 356, 16.0, 49, 3.9),
  createData('Food 7', 356, 16.0, 49, 3.9),
  createData('Food 8', 356, 16.0, 49, 3.9),
];

class App extends Component {
  render() {
    return (
      <div class="page-content">
        <div>
          <h2 class="title">Contemporary Issues in Software Development</h2>
        </div>

        <div class="grid">
          <h4 class="grid-title">Grid Items...</h4>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Item>
                <div class="grid-item">
                  <Typography gutterBottom variant="h5">The Maned Wolf</Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Maned Wolf resides in the grasslands of central-west, south and
                    southeastern Brazil. The Maned Wolf is a loner and splits its dining
                    between plants and meats.
                  </Typography>
                  <Button size="small">Learn More</Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div class="grid-item">
                  <Typography gutterBottom variant="h5">The "Blue Dragon"</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Glaucus Atlanticus floats upside down in the water, using its Blue
                    side to blend in. These animals feed on the infamous man o war and delivers
                    an effective sting you want nothing to do with.
                  </Typography>
                  <Button size="small">Learn More</Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div class="grid-item">
                  <Typography gutterBottom variant="h5">The Slow Loris</Typography>
                  <Typography variant="body2" color="text.secondary">
                  The slow loris has two — thats dos — tongues. The jagged tongues in 
                  play for cleaning teeth. The longer one sucks at flowers to get nectar.
                  Theyre capable of being silent to prevent discovery.
                  </Typography>
                  <Button size="small">Learn More</Button>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>

        <div class="grid">
        <h4 class="grid-title">Table...</h4>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>

        <div class="container">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Countries} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App