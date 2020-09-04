const data ={
          
    series: [{
      data: [800, 690, 1100, 1500, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['United Kingdom', 'Japan', 'United States', 'China', 'Germany'],
      }
    },
  
  
  };
  
export default data;