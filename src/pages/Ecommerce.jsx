import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
	return (
		<div className='container mx-auto mt-20 text-center md:mt-0'>
			<div class="flex flex-wrap justify-center m-3 gap-5">
				<div className='p-8 mb-3 bg-white bg-center bg-no-repeat bg-cover shadow-md lg:flex-nowrap dark:text-gray-200 dark:bg-secondary-dark-bg h-44 lg:h-64 rounded-xl pt-9 bg-hero-pattern'>
					<div className='flex items-center justify-between'>
						<div>
							<p className='font-bold text-gray-400 lg:text-xl'>
								Earnings
							</p>
							<p className='text-2xl'>$52,548.55</p>
						</div>
					</div>
					<div className='mt-6'>
						<Button
							color='white'
							bgColor='blue'
							text='Download'
						/>
					</div>
				</div>
				<div className='p-8 mb-3 bg-white bg-center bg-no-repeat bg-cover shadow-md lg:flex-nowrap dark:text-gray-200 dark:bg-secondary-dark-bg h-44 lg:h-64 rounded-xl pt-9 bg-hero-pattern'>
					<div className='flex items-center justify-between'>
						<div>
							<p className='font-bold text-gray-400 lg:text-xl'>
								Earnings
							</p>
							<p className='text-2xl'>$52,548.55</p>
						</div>
					</div>
					<div className='mt-6'>
						<Button
							color='white'
							bgColor='blue'
							text='Download'
						/>
					</div>
				</div>
			</div>
			{/* <div className='box-border flex flex-wrap w-full'>
				<div className='p-8 mb-3 bg-white bg-center bg-no-repeat bg-cover shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg h-44 lg:h-64 rounded-xl pt-9 bg-hero-pattern'>
					<div className='flex items-center justify-between'>
						<div>
							<p className='font-bold text-gray-400 lg:text-xl'>
								Earnings
							</p>
							<p className='text-2xl'>$52,548.55</p>
						</div>
					</div>
					<div className='mt-6'>
						<Button
							color='white'
							bgColor='blue'
							text='Download'
						/>
					</div>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-1 shadow-md'>
					{
						earningData.map(item => (
							<div
								key={item.title}
								className='w-auto p-8 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl'
							>
								<button
									type='button'
									className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
									style={{ color: item.iconColor, backgroundColor: item.iconBg }}
								>
									{item.icon}
								</button>
								<p className='mt-3'>
									<span className='text-lg font-semibold'>
										{item.amount}
									</span>
									<span className={`text-sm ${item.pcColor === 'red' ? 'text-red-600' : 'text-green-600'} ml-2`}>
										{item.percentage}
									</span>
								</p>
								<p className='mt-1 text-sm text-gray-400'>
									{item.title}
								</p>
							</div>
						))
					}
				</div>
			</div> */}

			<div className='flex flex-wrap justify-center gap-10'>
				<div className='p-4 m-3 bg-white shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780'>
					<div className='flex justify-between'>
						<p className='text-xl font-semibold'>
							Revenue
						</p>
						<div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ecommerce