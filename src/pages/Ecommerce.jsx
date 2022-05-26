import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
    earningData,
    medicalproBranding,
    recentTransactions,
    weeklyStats,
    dropdownData,
    SparklineAreaData,
    ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const DropDown = ({ currentMode }) => (
    <div className="px-2 py-1 rounded-md w-28 border-1 border-color">
        <DropDownListComponent
            id="time"
            fields={{ text: "Time", value: "Id" }}
            style={{ border: "none", color: currentMode === "Dark" && "white" }}
            value="1"
            dataSource={dropdownData}
            popupHeight="220px"
            popupWidth="120px"
        />
    </div>
);

const Ecommerce = () => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className="m-5 mt-20 md:mt-5">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-6">
                <div className="lg:col-span-2">
                    <div className="p-8 m-3 bg-white bg-center bg-no-repeat bg-cover shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-auto pt-9 bg-hero-pattern">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-gray-400">
                                    Earnings
                                </p>
                                <p className="text-2xl">$63,448.78</p>
                            </div>
                            <button
                                type="button"
                                style={{ backgroundColor: currentColor }}
                                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
                            >
                                <div className="text-2xl bg-purple-600 rounded-full">
                                    <BsCurrencyDollar />
                                </div>
                            </button>
                        </div>
                        <div className="mt-6">
                            <Button
                                color="white"
                                bgColor="blue"
                                text="Download"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="grid items-center justify-center grid-cols-2 gap-1 m-3 md:grid-cols-4 ">
                        {earningData.map((item) => (
                            <div
                                key={item.title}
                                className="p-8 bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl md:w-auto h-44"
                            >
                                <button
                                    type="button"
                                    style={{
                                        color: item.iconColor,
                                        backgroundColor: item.iconBg,
                                    }}
                                    className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                                >
                                    {item.icon}
                                </button>
                                <p className="mt-3">
                                    <span className="text-lg font-semibold">
                                        {item.amount}
                                    </span>
                                    <span
                                        className={`text-sm ${item.pcColor === "red"
                                            ? "text-red-600"
                                            : "text-green-600"
                                            } ml-2`}
                                    >
                                        {item.percentage}
                                    </span>
                                </p>
                                <p className="mt-1 text-sm text-gray-400">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='grid justify-center grid-cols-1 gap-2 lg:grid-cols-6'>
                <div className='p-4 m-3 bg-white shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780'>
                    <div className='flex justify-between'>
                        <p className='text-xl font-semibold'>
                            Ingresos
                        </p>
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-2 hover:drop-shadow-xl'
                                style={{ color: 'blue' }}>
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span >
                                    Presupuesto
                                </span>
                            </p>
                            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>
                                    Gastos
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center gap-10 mt-10'>
                        <div className='pr-10 m-4 border-r-1 border-color'>
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>$93,458</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer bg-green-400 text-white mr-3 text-xs rounded-full'>23%</span>
                                </p>
                                <p className='mt-1 text-gray-500'>
                                    Presupuesto
                                </p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold'>$48,412</span>
                                </p>
                                <p className='mt-1 text-gray-500'>
                                    Gastos
                                </p>
                            </div>
                            <div className='mt-5'>
                                <SparkLine
                                    currentColor='blue'
                                    id='line-sparkline'
                                    type='Line'
                                    height='80px'
                                    data={SparklineAreaData}
                                    width='250px'
                                    color='blue'
                                />
                            </div>
                            <div className='mt-10'>
                                <Button
                                    color='white'
                                    bgColor='blue'
                                    text='Descargar Reporte'
                                />
                            </div>
                        </div>
                        <div>
                            <Stacked
                                width='320px'
                                height='360px'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="m-5 mt-24">
        //     <div className="flex flex-wrap justify-center lg:flex-nowrap ">
        //         <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9 bg-hero-pattern">
        //             <div className="flex items-center justify-between">
        //                 <div>
        //                     <p className="font-bold text-gray-400">Earnings</p>
        //                     <p className="text-2xl">$63,448.78</p>
        //                 </div>
        //                 <button
        //                     type="button"
        //                     style={{ backgroundColor: currentColor }}
        //                     className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
        //                 >
        //                     <BsCurrencyDollar />
        //                 </button>
        //             </div>
        //             <div className="mt-6">
        //                 <Button color="white" bgColor="blue" text="Download" />
        //             </div>
        //         </div>
        //         <div className="flex flex-wrap items-center justify-center w-full gap-1 m-3">
        //             {earningData.map((item) => (
        //                 <div
        //                     key={item.title}
        //                     className="p-4 bg-white shadow-md h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-2xl pt-9 "
        //                 >
        //                     <button
        //                         type="button"
        //                         style={{
        //                             color: item.iconColor,
        //                             backgroundColor: item.iconBg,
        //                         }}
        //                         className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
        //                     >
        //                         {item.icon}
        //                     </button>
        //                     <p className="mt-3">
        //                         <span className="text-lg font-semibold">
        //                             {item.amount}
        //                         </span>
        //                         <span
        //                             className={`text-sm ${
        //                                 item.pcColor === "red"
        //                                     ? "text-red-600"
        //                                     : "text-green-600"
        //                             } ml-2`}
        //                         >
        //                             {item.percentage}
        //                         </span>
        //                     </p>
        //                     <p className="mt-1 text-sm text-gray-400">
        //                         {item.title}
        //                     </p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        //     <div className="flex flex-wrap justify-center gap-10">
        //         <div className="p-4 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780 ">
        //             <div className="flex justify-between">
        //                 <p className="text-xl font-semibold">Revenue Updates</p>
        //                 <div className="flex items-center gap-4">
        //                     <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
        //                         <span>
        //                             <GoPrimitiveDot />
        //                         </span>
        //                         <span>Expense</span>
        //                     </p>
        //                     <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
        //                         <span>
        //                             <GoPrimitiveDot />
        //                         </span>
        //                         <span>Budget</span>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Ecommerce;
