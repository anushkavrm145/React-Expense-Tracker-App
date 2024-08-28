import { background } from '@chakra-ui/react'
import { color } from 'framer-motion'
import Chart from 'react-apexcharts'

const options={
    labels:["Income","Expense"],
    colors:["#21bf73","#FD5E53"],
    chart:{
        width:"50px",
    },
    states:{
        hover:{
            filter:{
                type:"none",
            },
        },
    },
    legend:{
        show:false,
    },
    dataLabels:{
        enables:false,
    },
    hover: {mode:null},
    plotOptions:{
        donut:{
          expandOnClick: false,
          donit:{
            labels:{
                show: false,
            },
          }  ,
        },
    },
    fill:{
        colors: ["#21BF73","#FD5E53"],
    },
    tooltip:{
        enabled:true,
        theme:"dark",
        style:{
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
};

export default function TransactionChartSummary({income=100,expense=100}){
    return <Chart
    options={options}
    series={[income,expense]}
    type='pie'
    width={'100%'}
    height={'100%'}
    />
}