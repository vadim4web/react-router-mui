import { BarChart } from '@mui/x-charts/BarChart';
import { useContext, useState, useEffect } from "react";
import { AppContext } from '../AppContext';
import CircularLoader from '../components/CircularLoader';
import computeHeight from '../utils/computeHeight';
import './DummyComponent.css';

const valueFormatter = (value) => '$' + value;

const STORAGE_KEY = 'carts';

const DummyChart = () => {
  const storedData = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  const [data, setData] = useState(storedData || []);
  const [fetched, setFetched] = useState(false);
  const { showFrame, isLandscape } = useContext(AppContext);

  useEffect(() => {
    if (!fetched && (!storedData || storedData.length === 0)) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/carts');
          const result = await response.json();
          const carts = result.carts.map((c) => ({ id: c.id, total: c.total, discount: c.discountedTotal }));
          carts.unshift({
            id: 0,
            total: Math.round(carts.reduce((S, c) => S + c.total, 0) / carts.length),
            discount: Math.round(carts.reduce((S, c) => S + c.discount, 0) / carts.length),
          });

          setData(carts);
          setFetched(true);
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(carts));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [fetched, storedData]);

  if (data.length === 0) {
    return <CircularLoader />;
  } else {
    return (
      <section
        className='chart-container'
        style={ computeHeight(showFrame, isLandscape, '40.5dvh', '43.5dvh', '73.5dvh', '76.5dvh') }
      >
        <BarChart
          dataset={data}
          yAxis={[{ scaleType: 'band', dataKey: 'id' }]}
          series={[
            { dataKey: 'total', label: 'Cart total price', valueFormatter, color: '#0066cc' },
            { dataKey: 'discount', label: 'Cart discount', valueFormatter, color: '#ffcc00' },
          ]}
          layout="horizontal"
          xAxis={[{ label: 'Total checkout price, $' }]}
        />
      </section>
    );
  }
};

export default DummyChart;
