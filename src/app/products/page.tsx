import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import Image from 'next/image';
import Link from 'next/link';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Something Went Wrong")
    }
    return res.json();
};


const page = async () => {
    const products = await getData();

    const formatCurrency = (amount: number) => {
        const currencyFormatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2,
        });

        // Extracting parts from formatted string
        const parts = currencyFormatter.formatToParts(amount);

        // Adding space between symbol and digits
        const formattedAmount = parts
            .map((part) => (part.type === "currency" ? part.value + " " : part.value))
            .join("");

        return formattedAmount.replace("₹", "Rs. ");
    };

    return (
        <div>
            <div className="flex flex-row">
                <div className='relative flex flex-col border-r-2 border-black h-screen lg:w-2/6 xl:w-1/5'>
                    <SideBar />
                </div>

                <div className='p-8 lg:w-5/6 xl:w-4/5'>
                    <TopBar />
                    <h1 className='mt-4 text-2xl font-medium'>Products</h1>
                    <div className='mt-4 flex flex-col gap-8'>
                        <Link href="/products/addNewProduct">
                        <button className='bg-black text-white p-20 text-xl font-medium rounded-md w-96'>
                            Add Product
                        </button>
                        </Link>

                            <div className='overflow-x-auto overflow-y-auto py-2 border border-black'>
                                <table className="table-auto w-full rounded-2xl">
                                    <thead className='font-semibold'>
                                        <tr>
                                            <th className="py-4 px-4 ">S.No</th>
                                            <th className="py-4 px-4 ">Product</th>
                                            <th className="py-4 px-4 ">Category</th>
                                            <th className="py-4 px-4 ">Price</th>
                                            <th className="py-4 px-4 ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {products.map((item: any, index: any) => (
                                            <tr key={index} className='text-center font-medium'>
                                                <td className="">{index+1}</td>
                                                <td className="py-4 px-4 flex gap-5 items-center">
                                                    <div className='relative w-[50px] h-[50px]'>
                                                    <Image 
                                                        src={item.images[0]}
                                                        fill
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />
                                                    </div>
                                                    {item.brand.charAt(0) + item.brand.slice(1).toLowerCase() + " " + item.name}
                                                </td>
                                                <td>
                                                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                                </td>
                                                <td>
                                                    {formatCurrency(item.mrp)}
                                                </td>
                                                <td className='flex justify-center gap-4'>    
                                                    <div className='bg-black w-10 h-10 flex items-center justify-center rounded-md'>
                                                    <Image 
                                                        src="/assets/edit.png"
                                                        width={24}
                                                        height={24}
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />
                                                    </div>
                                                    
                                                    <div className='bg-black w-10 h-10 flex items-center text-white justify-center rounded-md'>
                                                    <Image 
                                                        src="/assets/delete.png"
                                                        width={24}
                                                        height={24}
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />

                                                    </div>
                                                    <div className='bg-black w-10 h-10 flex items-center justify-center rounded-md'>
                                                    <Image 
                                                        src="/assets/view.png"
                                                        width={24}
                                                        height={24}
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />

                                                    </div>
                                                    
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page

