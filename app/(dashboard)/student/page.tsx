import Announcements from "@/app/components/announcements"
import BigCalendar from "@/app/components/bigCalendar"
import EventCalendar from "@/app/components/eventCalendar"

const StudentPage = () => {
	return (
		<div className='p-4 flex flex-col xl:flex-row gap-4'>
			{/* left */}
			<div className="w-full xl:w-2/3">
				<div className="h-full bg-white p-4 rounded-md">
					<h1 className="font-semibold text-xl mb-4">Класс - (4А)</h1>
					<BigCalendar />
				</div>
			</div>
			{/* right */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	)
}

export default StudentPage