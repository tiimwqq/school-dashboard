import Announcements from "@/app/components/announcements"
import AttendanceChart from "@/app/components/charts/attendanceChart"
import FinanceChart from "@/app/components/charts/financeChart"
import RadialChart from "@/app/components/charts/radialChart"
import EventCalendar from "@/app/components/eventCalendar"
import UserCard from "@/app/components/userCard"

const Page = () => {
	return (
		<div className='p-4 flex flex-col md:flex-row gap-4'>
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* usercard */}
				<div className="flex justify-between gap-4 flex-wrap">
					<UserCard type='student' />
					<UserCard type='parent' />
					<UserCard type='teacher' />
					<UserCard type='staff' />
				</div>
				{/* middle charts */}
				<div className="flex gap-4 flex-col lg:flex-row">
					{/* radial chart */}
					<div className="w-full lg:w-1/3 h-[450px]">
						<RadialChart />
					</div>
					{/* aattendace chart */}
					<div className="w-full lg:w-2/3 h-[450px]">
						<AttendanceChart />
					</div>
				</div>
				{/* bottom chart */}
				<div className="w-full h-[500px]">
					<FinanceChart />
				</div>
			</div>
			<div className="w-full lg:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements/>
			</div>
		</div>
	)
}

export default Page