'use client'
import { RadialBarChart, Legend, ResponsiveContainer, RadialBar } from "recharts";
import Image from "next/image";

const data = [
	{
		name: 'total',
		count: 100,
		fill: 'white',
	},
	{
		name: 'boys',
		count: 55,
		fill: '#C3EBFA',
	},
	{
		name: 'girls',
		count: 45,
		fill: '#FAE27C',
	}
];


const RadialChart = () => {

	return (
		<div className='bg-white w-full h-full rounded-xl p-4 '>
			{/* btn */}
			<div className="flex items-center justify-between">
				<h1 className="text-lg font-semibold">Students</h1>
				<Image src='/moreDark.png' alt="" width={20} height={20} />
			</div>
			{/* chart */}
			<div className="w-full h-[75%] relative">
				<ResponsiveContainer >
					<RadialBarChart cx="50%" cy="50%" innerRadius="35%" outerRadius="100%" barSize={26} data={data}>
						<RadialBar
							background
							dataKey="count"
						/>
					</RadialBarChart>
				</ResponsiveContainer>
				<Image src='/maleFemale.png' alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
			</div>
			{/* bottom */}
			<div className="flex justify-center gap-16">
				<div className="flex flex-col gap-1 ">
					<div className="w-5 h-5 bg-lamaSky rounded-full"></div>
					<h1 className="font-bold">1.543</h1>
					<span className="text-sx text-gray-300">boys(55%)</span>
				</div>
				<div className="flex flex-col gap-1 ">
					<div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
					<h1 className="font-bold">1.342</h1>
					<span className="text-sx text-gray-300">girls(45%)</span>
				</div>
			</div>
		</div>
	)
}

export default RadialChart