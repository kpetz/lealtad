import { Link, NavLink } from 'react-router-dom';
import { SiCorsair } from 'react-icons/si';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize } = useStateContext();
	const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
	const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	}

	return (
		<div className='h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto'>
			{
				activeMenu && (
					<>
						<div className='flex items-center justify-between'>
							<Link
								to='/'
								onClick={() => handleCloseSidebar()}
								className='flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900 '
							>
								<SiCorsair /> <span>Lealtad</span>
							</Link>
							<TooltipComponent content='Menu' position='BottomCenter'>
								<button
									type='button'
									onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
									className='block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden'
								>
									<MdOutlineKeyboardArrowLeft />
								</button>
							</TooltipComponent>
						</div>
						<div className='mt-10'>
							{
								links.map((link, index) => (
									<div key={index}>
										<p className='m-3 mt-4 text-gray-400 uppercase'>
											{link.title}
										</p>
										{
											link.links && link.links.map(subLink => (
												<NavLink
													key={subLink.name}
													to={`/${subLink.name}`}
													onClick={() => { }}
													className={({ isActive }) =>
														isActive ? activeLink : normalLink
													}
													style={({ isActive }) => ({
														backgroundColor: isActive ? 'blue' : '',
													})}
												>
													{subLink.icon}
													<span className='capitalize'>
														{subLink.name}
													</span>
												</NavLink>
											))
										}
									</div>
								))
							}
						</div>
					</>
				)}
		</div>
	)
}

export default Sidebar