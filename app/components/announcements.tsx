const Announcements = () => {
	return (
		<div className='bg-white p-4 rounded-md'>
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-xl font-semibold">Announcements</h1>
				<span className="text-xs text-gray-400">view all</span>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<div className="bg-lamaSkyLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">Lorem, ipsum dolor.</h2>
						<span className="text-xs mt-1 bg-white text-gray-400 rounded-md p-1 ">01.29.2025</span>
					</div>
					<p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, veniam.</p>
				</div>
				<div className="bg-lamaPurpleLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">Lorem, ipsum dolor.</h2>
						<span className="text-xs bg-white text-gray-400 rounded-md p-1 ">01.29.2025</span>
					</div>
					<p className="text-sm mt-1 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, veniam.</p>
				</div>
				<div className="bg-lamaYellowLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">Lorem, ipsum dolor.</h2>
						<span className="text-xs bg-white text-gray-400 rounded-md p-1 ">01.29.2025</span>
					</div>
					<p className="text-sm mt-1 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, veniam.</p>
				</div>
			</div>
		</div>
	)
}

export default Announcements