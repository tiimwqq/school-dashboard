'use client'
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Jan',
		income: 4000,
		expense: 2400,
		amt: 2400,
	},
	{
		name: 'Feb',
		income: 3000,
		expense: 1398,
		amt: 2210,
	},
	{
		name: 'Mar',
		income: 2000,
		expense: 9800,
		amt: 2290,
	},
	{
		name: 'Apr',
		income: 2780,
		expense: 3908,
		amt: 2000,
	},
	{
		name: 'May',
		income: 1890,
		expense: 4800,
		amt: 2181,
	},
	{
		name: 'Jun',
		income: 2390,
		expense: 3800,
		amt: 2500,
	},
	{
		name: 'Jul',
		income: 3490,
		expense: 4300,
		amt: 2100,
	},
	{
		name: 'Aug',
		income: 3490,
		expense: 4300,
		amt: 2100,
	},
	{
		name: 'Sep',
		income: 3490,
		expense: 4300,
		amt: 2100,
	},
	{
		name: 'Oct',
		income: 3490,
		expense: 4300,
		amt: 2100,
	},
	{
		name: 'Nov',
		income: 3490,
		expense: 4300,
		amt: 2100,
	},
	{
		name: 'Dec',
		income: 3490,
		expense: 4300,
		amt: 2100,
	},
];

const FinanceChart = () => {
	return (
		<div className='bg-white w-full h-full rounded-xl p-4'>
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-lg font-semibold">Finance</h1>
				<Image src='/moreDark.png' alt="" width={20} height={20} />
			</div>
			<ResponsiveContainer width="100%" height="90%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" stroke='#ddd'  />
					<XAxis dataKey="name" tick={{ fill: '#ddd' }} axisLine={false} tickLine={false} tickMargin={10} />
					<YAxis tick={{ fill: '#ddd' }} axisLine={false} tickLine={false} tickMargin={15} />
					<Tooltip />
					<Legend align='center' verticalAlign='top' wrapperStyle={{ paddingBottom: '25px' }} />
					<Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
					<Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default FinanceChart