'use client'
import Image from 'next/image'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Mon',
		present: 23,
		absent: 54,
	},
	{
		name: 'Tue',
		present: 56,
		absent: 41,
	},
	{
		name: 'Wed',
		present: 43,
		absent: 85,
	},
	{
		name: 'Thu',
		present: 65,
		absent: 13,
	},
	{
		name: 'Fri',
		present: 56,
		absent: 32,
	},

];

const AttendanceChart = () => {
	return (
		<div className='bg-white w-full h-full rounded-xl p-4 '>
			<div className="flex items-center justify-between">
				<h1 className="text-lg font-semibold">Attendance</h1>
				<Image src='/moreDark.png' alt="" width={20} height={20} />
			</div>
			<ResponsiveContainer width="100%" height="90%" >
				<BarChart
					width={500}
					height={300}
					data={data}
					barSize={20}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' /> //убираем вертикальные строки и ставим цвет
					<XAxis dataKey="name" axisLine={false} tick={{ fill: '#ddd' }} tickLine={false} /> //убираем полоску и ставим цвет
					<YAxis axisLine={false} tick={{ fill: '#ddd' }} tickLine={false} />//убираем полоску и ставим цвет
					<Tooltip contentStyle={{borderRadius: '10px', borderColor: 'lightgray'}}/>
					<Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '10px', paddingBottom: '25px' }} />
					<Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} /> //скругляем углы и делаем тип надписи - кружок
					<Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]} />//скругляем углы и делаем тип надписи - кружок
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default AttendanceChart