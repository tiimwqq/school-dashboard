import Image from 'next/image'

const NavBar = () => {
	return (
		<div className='flex items-center justify-between p-4'>
			{/* search input */}
			<div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3">
				<Image src='/search.png' alt='search' width={14} height={14} />
				<input type="text" placeholder='поиск...' className='w-[200px] bg-transparent p-2 outline-none'/>
			</div>
			{/* icons and user */}
			<div className="flex items-center gap-6 justify-end w-full">
				<div className="bg-white rounded-full w-7 h-7 items-center flex justify-center cursor-pointer">
					<Image src='/message.png' alt='' width={20} height={20} />
				</div>
				<div className="bg-white rounded-full w-7 h-7 items-center flex justify-center cursor-pointer relative">
					<Image src='/announcement.png' alt='' width={20} height={20} />
					<div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
				</div>
				<div className="flex flex-col">
					<span className='text-xs leading-3 font-medium'>Иван Иванов</span>
					<span className='text-[12px] text-gray-500 text-right'>admin</span>
				</div>
				<Image src='/avatar.png' alt='' width={36} height={36} className='rounded-full'/>

			</div>
		</div>
	)
}

export default NavBar