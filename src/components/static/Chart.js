import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
const Charts = () => {
    const chartRef = useRef()
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const labels = ["Red", "Blue", "Yellow", "Green","Green","Green","Green"];
            const data = {
                labels: labels,
                datasets: [{
                    data: [65, 59, 80, 81, 56, 55, 40],
                }]
            };
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: data,
              });
            }
    }, [])
    
  return (
    <>
        <div id="chart" className="mt-5 bg-purple-300 h-64">
            <canvas ref={chartRef} id="myChart" className='w-full h-full'></canvas>
        </div>
    </>
  )
}

export default Charts