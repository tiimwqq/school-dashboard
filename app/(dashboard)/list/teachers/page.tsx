import Pagination from "@/app/components/pagination"
import Table from "@/app/components/table"
import TableSearch from "@/app/components/tableSearch"
import Image from "next/image"
import Link from "next/link"

const columns = [
	{
		header: 'Info',
		accessor: 'info',
	},
	{
		header: 'TeacherID',
		accessor: 'teacherId',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Subjects',
		accessor: 'subjects',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Classes',
		accessor: 'classes',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Phone',
		accessor: 'phone',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Adress',
		accessor: 'adress',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},


]

const TeacherListPage = () => {

	const renderRow = (item: any) => {
		<tr>
			<th>
				<Image src={item.photo} alt="" className="rounded-full w-10 h-10 md:hidden xl:block object-cover" width={40} height={40} />
				<div className="flex flex-col gap-1">
					<h3 className="font-semibold">{item.name}</h3>
					<p className="text-xs text-gray-500">{item?.email}</p>
				</div>
			</th>
			<td className="hidden md:table-cell">{item.teacherId}</td>
			<td className="hidden md:table-cell">{item.classes.join(', ')}</td>
			<td className="hidden md:table-cell">{item.subjects.join(', ')}</td>
			<td className="hidden md:table-cell">{item.phone}</td>
			<td className="hidden md:table-cell">{item.adress}</td>
			<td>
				<div className="flex items-center gap-2">
					<Link href={`/list/teachers/${item.teacherId}`}>
						<button ></button>
					</Link>
				</div>
			</td>
		</tr >
	}

	return (
		<div className='bg-white rounded-md flex-1 m-4 p-4 mt-0'>
			{/* title */}
			<div className="flex items-center justify-between">
				<h1 className="hidden md:block font-semibold text-lg">All teachers</h1>
				<div className="flex flex-col md:flex-row w-full md:w-auto gap-4 items-center">
					<TableSearch />
					<div className="flex items-center gap-4 self-end">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
							<Image src='/filter.png' alt="" width={14} height={14} />
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
							<Image src='/sort.png' alt="" width={14} height={14} />
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
							<Image src='/plus.png' alt="" width={14} height={14} />
						</button>
					</div>
				</div>
			</div>
			{/* list */}
			<div className="">
				<Table columns={columns} />
			</div>
			{/* paginarion */}
			<Pagination />
		</div>
	)
}

export default TeacherListPage