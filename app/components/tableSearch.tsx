import Image from "next/image"

const TableSearch = () => {
	return (
		<div className="w-full flex md:w-auto items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3">
			<Image src='/search.png' alt='search' width={14} height={14} />
			<input type="text" placeholder='поиск...' className='w-[200px] bg-transparent p-2 outline-none' />
		</div>
	)
}

export default TableSearch