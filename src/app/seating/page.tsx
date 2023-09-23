'use client'

import { redirect, useSearchParams } from "next/navigation"

const data: { [key: string]: any } = {
    "ahmed": [
        {
            "FirstName": "Saad",
            "Table": 1
        }
    ],
    "altrin": [
        {
            "FirstName": "Jarvis",
            "Table": 9
        },
        {
            "FirstName": "Taylor",
            "Table": 9
        }
    ],
    "arputharaj": [
        {
            "FirstName": "Anuprabha",
            "Table": 0
        }
    ],
    "avinash": [
        {
            "FirstName": "Andrew",
            "Table": 15
        }
    ],
    "bangla": [
        {
            "FirstName": "Ashish",
            "Table": 14
        }
    ],
    "bhagat": [
        {
            "FirstName": "Deepthi",
            "Table": 14
        }
    ],
    "bhavanam": [
        {
            "FirstName": "Sambhavi",
            "Table": 0
        }
    ],
    "bokka": [
        {
            "FirstName": "Venkata",
            "Table": 13
        },
        {
            "FirstName": "Swetha",
            "Table": 13
        }
    ],
    "busamalla": [
        {
            "FirstName": "Manju",
            "Table": 7
        },
        {
            "FirstName": "Prashanth",
            "Table": 7
        },
        {
            "FirstName": "Anurag",
            "Table": 0
        },
        {
            "FirstName": "Ruth",
            "Table": 0
        }
    ],
    "busetty": [
        {
            "FirstName": "Dinesh",
            "Table": 10
        }
    ],
    "chinthakindhi": [
        {
            "FirstName": "Mary Maragaret",
            "Table": 8
        }
    ],
    "chopparapu": [
        {
            "FirstName": "Sinduja",
            "Table": 10
        }
    ],
    "deshneni": [
        {
            "FirstName": "Sindhu",
            "Table": 14
        },
        {
            "FirstName": "Aditya",
            "Table": 14
        }
    ],
    "devathala": [
        {
            "FirstName": "Hepzibah",
            "Table": 5
        },
        {
            "FirstName": "Shiny",
            "Table": 5
        },
        {
            "FirstName": "Parimala",
            "Table": 5
        },
        {
            "FirstName": "Samson",
            "Table": 13
        },
        {
            "FirstName": "Saritha",
            "Table": 13
        },
        {
            "FirstName": "Krupadhanam",
            "Table": 8
        },
        {
            "FirstName": "Sarala",
            "Table": 8
        },
        {
            "FirstName": "Calvin",
            "Table": 11
        },
        {
            "FirstName": "Neelima",
            "Table": 11
        },
        {
            "FirstName": "Serena",
            "Table": 0
        },
        {
            "FirstName": "Ethan",
            "Table": 1
        },
        {
            "FirstName": "Matthew",
            "Table": 13
        }
    ],
    "dhamera": [
        {
            "FirstName": "Aaron",
            "Table": 5
        },
        {
            "FirstName": "Vinay Kumar",
            "Table": 5
        }
    ],
    "doppala": [
        {
            "FirstName": "Thrisha",
            "Table": 7
        }
    ],
    "eddu": [
        {
            "FirstName": "Praneeth",
            "Table": 4
        },
        {
            "FirstName": "Sugunakar",
            "Table": 4
        },
        {
            "FirstName": "Pramila ",
            "Table": 4
        },
        {
            "FirstName": "Samuel",
            "Table": 4
        }
    ],
    "gandepudi": [
        {
            "FirstName": "Susan",
            "Table": 7
        },
        {
            "FirstName": "Samson",
            "Table": 7
        },
        {
            "FirstName": "Sarah",
            "Table": 0
        },
        {
            "FirstName": "Joel",
            "Table": 1
        }
    ],
    "gill": [
        {
            "FirstName": "Aishwarya",
            "Table": 10
        },
        {
            "FirstName": "Prabhpreet",
            "Table": 10
        }
    ],
    "gouru": [
        {
            "FirstName": "Mahesh",
            "Table": 0
        }
    ],
    "gupta": [
        {
            "FirstName": "Anudeep",
            "Table": 10
        }
    ],
    "javed": [
        {
            "FirstName": "Faraaz",
            "Table": 3
        },
        {
            "FirstName": "Tayyiba",
            "Table": 3
        }
    ],
    "juturu": [
        {
            "FirstName": "Kaushik",
            "Table": 14
        }
    ],
    "kodam": [
        {
            "FirstName": "Sindhu",
            "Table": 10
        }
    ],
    "kocherla": [
        {
            "FirstName": "Ranjith",
            "Table": 6
        },
        {
            "FirstName": "Nancy",
            "Table": 6
        },
        {
            "FirstName": "Joshua",
            "Table": 6
        },
        {
            "FirstName": "Jason",
            "Table": 6
        },
        {
            "FirstName": "Rohan",
            "Table": 6
        }
    ],
    "konda": [
        {
            "FirstName": "Nithya",
            "Table": 12
        },
        {
            "FirstName": "Kranthi",
            "Table": 12
        }
    ],
    "konkala": [
        {
            "FirstName": "Nishanth",
            "Table": 0
        }
    ],
    "koochipudi": [
        {
            "FirstName": "Srinivas",
            "Table": 11
        }
    ],
    "kotla": [
        {
            "FirstName": "Sushma",
            "Table": 11
        },
        {
            "FirstName": "Rohit",
            "Table": 11
        },
        {
            "FirstName": "Aaryan",
            "Table": 11
        }
    ],
    "balemarthy": [
        {
            "FirstName": "Srinivasa",
            "Table": 9
        },
        {
            "FirstName": "Sreemukhi",
            "Table": 9
        }
    ],
    "uppugandla": [
        {
            "FirstName": "Sai Krishna",
            "Table": 10
        }
    ],
    "kumar": [
        {
            "FirstName": "Eswar",
            "Table": 2
        },
        {
            "FirstName": "Chandana",
            "Table": 2
        },
        {
            "FirstName": "Nikhil",
            "Table": 9
        }
    ],
    "kurian": [
        {
            "FirstName": "Jeremy",
            "Table": 3
        },
        {
            "FirstName": "Persis",
            "Table": 3
        },
        {
            "FirstName": "Joseph",
            "Table": 3
        },
        {
            "FirstName": "Jonathan",
            "Table": 3
        },
        {
            "FirstName": "Jesson",
            "Table": 3
        }
    ],
    "kuruganti": [
        {
            "FirstName": "Sankeerthana",
            "Table": 2
        }
    ],
    "laxmalla": [
        {
            "FirstName": "Suzy",
            "Table": 6
        },
        {
            "FirstName": "Rebecca",
            "Table": 6
        },
        {
            "FirstName": "Sadanandam",
            "Table": 6
        },
        {
            "FirstName": "Adeesh",
            "Table": 6
        }
    ],
    "dasi": [
        {
            "FirstName": "Prasad",
            "Table": 8
        },
        {
            "FirstName": "Jecintha",
            "Table": 15
        }
    ],
    "malkani": [
        {
            "FirstName": "Muneesh",
            "Table": 13
        },
        {
            "FirstName": "Sunitha",
            "Table": 13
        }
    ],
    "manohar": [
        {
            "FirstName": "Immipal",
            "Table": 3
        }
    ],
    "maripeddi": [
        {
            "FirstName": "Siddanth",
            "Table": 14
        }
    ],
    "martin": [
        {
            "FirstName": "Tony",
            "Table": 8
        }
    ],
    "medidha": [
        {
            "FirstName": "Jerusha",
            "Table": 5
        },
        {
            "FirstName": "Sam ",
            "Table": 5
        }
    ],
    "mittal": [
        {
            "FirstName": "Ankit",
            "Table": 10
        },
        {
            "FirstName": "Stuti",
            "Table": 10
        }
    ],
    "nadella": [
        {
            "FirstName": "Surya",
            "Table": 3
        },
        {
            "FirstName": "Vidya",
            "Table": 3
        }
    ],
    "narayanan": [
        {
            "FirstName": "lakshmi",
            "Table": 9
        }
    ],
    "patel": [
        {
            "FirstName": "Vraj",
            "Table": 1
        }
    ],
    "pedada": [
        {
            "FirstName": "Vishu",
            "Table": 11
        },
        {
            "FirstName": "Laxmi",
            "Table": 11
        }
    ],
    "pinninti": [
        {
            "FirstName": "Kaushik",
            "Table": 0
        },
        {
            "FirstName": "Vyshnavi",
            "Table": 14
        }
    ],
    "kasibhotla": [
        {
            "FirstName": "Naga Pranavi",
            "Table": 0
        }
    ],
    "rampally": [
        {
            "FirstName": "Anusha",
            "Table": 15
        },
        {
            "FirstName": "Ivaan",
            "Table": 15
        }
    ],
    "reddy": [
        {
            "FirstName": "Kalyan",
            "Table": 12
        },
        {
            "FirstName": "Shilpa",
            "Table": 12
        }
    ],
    "sampath": [
        {
            "FirstName": "Suchir",
            "Table": 1
        }
    ],
    "satyavarapu": [
        {
            "FirstName": "Poojitha",
            "Table": 0
        }
    ],
    "sownthariya": [
        {
            "FirstName": "Dharani",
            "Table": 9
        }
    ],
    "sripath": [
        {
            "FirstName": "Guru",
            "Table": 1
        }
    ],
    "saichandran": [
        {
            "FirstName": "Ketan Suhaas",
            "Table": 7
        }
    ],
    "vardhanapu": [
        {
            "FirstName": "Sudeep",
            "Table": 14
        }
    ],
    "velpula": [
        {
            "FirstName": "Samson",
            "Table": 8
        },
        {
            "FirstName": "Annie",
            "Table": 8
        },
        {
            "FirstName": "Sandesh",
            "Table": 0
        },
        {
            "FirstName": "Samuel",
            "Table": 13
        },
        {
            "FirstName": "Sujatha",
            "Table": 13
        },
        {
            "FirstName": "Gautam",
            "Table": 0
        },
        {
            "FirstName": "Margaret",
            "Table": 7
        },
        {
            "FirstName": "Evie",
            "Table": 7
        }
    ],
    "venantius": [
        {
            "FirstName": "Vishal",
            "Table": 15
        },
        {
            "FirstName": "Anusha",
            "Table": 15
        },
        {
            "FirstName": "Leonard",
            "Table": 15
        },
        {
            "FirstName": "Noah",
            "Table": 15
        }
    ],
    "venugopal": [
        {
            "FirstName": "Madhavi",
            "Table": 0
        },
        {
            "FirstName": "Sid",
            "Table": 0
        }
    ],
    "viswas": [
        {
            "FirstName": "Sparsha",
            "Table": 4
        },
        {
            "FirstName": "Alvin",
            "Table": 4
        }
    ],
    "vutchula": [
        {
            "FirstName": "Praveena",
            "Table": 14
        }
    ],
    "vijay raj": [
        {
            "FirstName": "Pothu Raj",
            "Table": 4
        }
    ],
    "perumalla": [
        {
            "FirstName": "Joshua",
            "Table": 5
        }
    ],
    "unknown": [
        {
            "FirstName": "Kranthi",
            "Table": 0
        },
        {
            "FirstName": "Arush",
            "Table": 0
        },
        {
            "FirstName": "Dinesh",
            "Table": 0
        },
        {
            "FirstName": "Ashraya",
            "Table": 0
        },
        {
            "FirstName": "Saieesha",
            "Table": 0
        },
        {
            "FirstName": "Ravi",
            "Table": 0
        },
        {
            "FirstName": "Monisha",
            "Table": 9
        },
        {
            "FirstName": "Rahul",
            "Table": 9
        },
        {
            "FirstName": "Sai Krishna",
            "Table": 12
        }
    ],
    "koochupudi": [
        {
            "FirstName": "Lavanya",
            "Table": 11
        },
        {
            "FirstName": "Vincent",
            "Table": 1
        },
        {
            "FirstName": "Vineeth",
            "Table": 1
        },
        {
            "FirstName": "Sindhuja",
            "Table": 12
        }
    ],
};

export default function Seating() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    if (!name) {
        redirect('/')
    }
    const nameLower = name.toLowerCase()

    const table = data[nameLower]

    console.log(table)
    if (!table) {
        //Show error page
        redirect('/error')
    }

    return (
        <main className="container mx-auto sm:px-6 lg:px-8 lg:py-8 h-fit">
            <div className="bg-white bg-opacity-30 mx-auto h-full w-fit">
                <div className="px-6 py-24 sm:px-2 sm:py-15 lg:px-8">
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
                                    We&apos;re looking forward to spending time with on this special day.
                                </p>
                                <p className="mt-3 text-lg text-gray-900">
                                    Your table assignments are <br />
                                    <ul role="list" className="divide-y divide-gray-100 px-10">
                                        {
                                            table.map((person: any) => (
                                                <li key={person.email} className="flex justify-between gap-x-6 py-5">
                                                    <div className="flex min-w-0 gap-x-4">
                                                        <div className="min-w-0 flex-auto">
                                                            <span className="text-lg font-semibold leading-6 text-gray-900">{person.FirstName}</span>
                                                            <span className="mt-1 truncate text-lg px-3 leading-5 text-gray-500">Table {person.Table}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}