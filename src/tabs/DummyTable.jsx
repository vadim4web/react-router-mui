import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import computeHeight from '../utils/computeHeight';
import './DummyComponent.css';

const STORAGE_KEY = 'quotes';

const DummyTable = () => {
  const storedData = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  const [data, setData] = useState(storedData || []);
  const [fetched, setFetched] = useState(false);
  const { showFrame, isLandscape } = useContext(AppContext);

  useEffect(() => {
    if (!fetched && (!storedData || storedData.length === 0)) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/quotes');
          const result = await response.json();
          setData(result.quotes);
          setFetched(true);
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result.quotes));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [fetched, storedData]);

  const handleCopy = (e, quote, author) => {
    navigator.clipboard.writeText(`"${quote}"\n${author}`);
    e.target.innerText = 'Copied!';
    setTimeout(() => {
      e.target.innerText = ' Copy ';
    }, 2000);
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 440 }} stickyHeader aria-label="simple table">
          <section className="table-head">
            <TableHead>
              <TableRow className="flex-row">
                <TableCell className="flex-grow"><b>Quote</b></TableCell>
                <TableCell align="right" className="flex-end"><b>Author</b></TableCell>
                <TableCell align="right" className="flex-end"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
          </section>
          <section
            style={
              computeHeight(
                showFrame,
                isLandscape,
                'calc(40.5dvh - 3.75rem + 1px)',
                'calc(43.5dvh - 3.75rem + 1px)',
                'calc(73.5dvh - 3.75rem + 1px)',
                'calc(76.5dvh - 3.75rem + 1px)',
              )
            }
            className="table-body"
          >
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <span className="table-quote">{row.quote}</span>
                  </TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">
                    <Button onClick={(e) => handleCopy(e, row.quote, row.author)} className="copy-button">
                      {' Copy '}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </section>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DummyTable;
