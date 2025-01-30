'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image'
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

//temporary
const events = [
	{
		id: 1,
		title: 'lorem ipsum dollar',
		time: '12:00 PM - 2:00 PM',
		description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident.'
	},
	{
		id: 2,
		title: 'lorem ipsum dollar',
		time: '12:00 PM - 2:00 PM',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident.'
	},
	{
		id: 3,
		title: 'lorem ipsum dollar',
		time: '12:00 PM - 2:00 PM',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident.'
	},

]

const EventCalendar = () => {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className='bg-white p-4 rounded-md'>
			<Calendar onChange={onChange} value={value} />
			<div className="flex items-center justify-between my-4">
				<h1 className="text-xl font-semibold">events</h1>
				<Image src='/moreDark.png' alt="" width={20} height={20} />
			</div>
			<div className="flex flex-col gap-4">
				{events.map(event => (
					<div className="p-5 rounded-md border-2 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
						<div className="flex items-center justify-between">
							<h1 className='font-semibold text-gray-600'>{event.title}</h1>
							<span className='text-xs text-gray-300'>{event.time}</span>
						</div>
						<p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default EventCalendar