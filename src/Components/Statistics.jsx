import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from "recharts";



const Statistics = () => {
    const data =[
        {
           id:1, name:"Assignment-1" ,value : 60
        },
        {
            id:2, name:"Assignment-2" ,value : 60
        },
        {
            id:3, name:"Assignment-3" ,value : 58
        },
        {
            id:4, name:"Assignment-4" ,value : 60
        },
        {
            id:5, name:"Assignment-5" ,value : 60
        },
        {
            id:6, name:"Assignment-6" ,value : 52
        },
        {
            id:7, name:"Assignment-7" ,value : 59
        },
    ]
    return (
        <div>
             <h1 className='bg-light text-center pb-5'>Statistics of Assginment Marks</h1>
             
        
             <PieChart className='mx-auto' width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
          
          <Tooltip />
    </PieChart>
     
        </div>
    );
};

export default Statistics;