import React from 'react';
import "./chart.css";
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";


const pdata = [
	{
		name: "May",
		student: 39,
		fees: 5,
	},
	{
		name: "June",
		student: 10,
		fees: 5,
	},
	{
		name: "July",
		student: 25,
		fees: 10,
	},
	{
		name: "August",
		student: 5,
		fees: 15,
	},
	{
		name: "September",
		student: 35,
		fees: 20,
	}
];

 export function LineChart1() {
	return (
		<>
			<h1 className="text-heading">Profit</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name" interval={"preserveStartEnd"} />
					<YAxis profit="fees"  interval={"preserveStartEnd"}></YAxis>
					<Legend />
					<Tooltip />
					 <Line
						dataKey="student"
						type="monotone"
						
					/> 
					{/* <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />  */}
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default LineChart1;




