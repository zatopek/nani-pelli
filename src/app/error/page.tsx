import Link from "next/link";


export default function Seating() {

    return (
        <main className="container mx-auto sm:px-6 lg:px-8 lg:py-8">
            <div className="bg-white bg-opacity-30 px-6 py-40 mx-auto h-full w-fit">
                <div className="px-6 py-24 sm:px-2 sm:py-10 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div className="sm:col-span-full lg:col-span-full">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Oops! something went wrong.
                                    <br />
                                </h2>
                            </div>
                            <div className="sm:col-span-full lg:col-span-full">
                                <p className="mt-3 text-xl text-gray-900 py-10">
                                    Did you misspell your last name?
                                </p>
                                <p className="mt-3 text-3xl text-gray-900">
                                    Please click <Link className="cursor-pointer underline text-blue-500" href="/">here</Link> to try again.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}