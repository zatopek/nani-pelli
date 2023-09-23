'use client'

import { redirect, useSearchParams } from "next/navigation"

const data: { [key: string]: number } = {
    devathala: 1,
    velpula: 2,
    gudipati: 3,
};

export default function Seating() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    if (!name) {
        redirect('/')
    }
    const nameLower = name.toLowerCase()

    const table = data[nameLower]

    if (!table) {
        //Show error page
        redirect('/error')
    }

    return (
        <main className="container mx-auto sm:px-6 lg:px-8 lg:py-8">
            <div className="bg-white bg-opacity-30 px-6 py-36 mx-auto h-full w-fit">
                <div className="px-6 py-24 sm:px-2 sm:py-10 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div className="sm:col-span-full lg:col-span-full">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Welcome to the {name} family!
                                    <br />
                                </h2>
                            </div>
                            <div className="sm:col-span-full lg:col-span-full">
                                <p className="mt-3 text-xl text-gray-900 py-10">
                                    We're looking forward to spending time with on this special day.
                                </p>
                                <p className="mt-3 text-3xl text-gray-900">
                                    Please proceed to <br />Table {table}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}