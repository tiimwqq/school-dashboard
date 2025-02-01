const Pagination = () => {
  return (
	<div className='flex items-center justify-between p-4 text-gray-500'>
		<button  className="py-2 px-4 bg-slate-200 rounded-md text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">prev</button>
		<div className="flex items-center gap-2 text-sm">
			<button className="px-2 rounded-sm bg-lamaSky">1</button>
			<button className="px-2 rounded-sm">2</button>
			<button className="px-2 rounded-sm">3</button>
			...
			<button className="px-2 rounded-sm">10</button>
		</div>
		<button  className="py-2 px-4 bg-slate-200 rounded-md text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">next</button>
	</div>
  )
}

export default Pagination