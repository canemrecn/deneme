import React, { useState, useEffect } from 'react';
import DemoPie from './demopie'; // Varsayılan olarak DemoPie bileşeninizin import edildiği varsayılır
import DemoLine from './demoline'; // DemoLine bileşeniniz varsa

const Home = () => {
  const [pieData1, setPieData1] = useState([]);
  const [pieData2, setPieData2] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    // Pie verilerini ve Line verilerini fetch etme
    const fetchPieData1 = async () => {
      // İlk pie grafiği için veri fetch işlemi
      const response = await fetch('PIE_DATA_URL_1');
      const data = await response.json();
      setPieData1(data);
    };

    const fetchPieData2 = async () => {
      // İkinci pie grafiği için veri fetch işlemi
      const response = await fetch('PIE_DATA_URL_2');
      const data = await response.json();
      setPieData2(data);
    };

    const fetchLineData = async () => {
      // Line grafiği için veri fetch işlemi
      const response = await fetch('LINE_DATA_URL');
      const data = await response.json();
      setLineData(data);
    };

    fetchPieData1();
    fetchPieData2();
    fetchLineData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {/* İki DemoPie bileşeni için farklı ID'ler kullanarak render edilir */}
        <div id="demopie-container-1"><DemoPie /></div>
        <div id="demopie-container-2"><DemoPie /></div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <DemoLine data={lineData} /> {/* Eğer varsa */}
      </div>
    </div>
  );
};

export default Home;
