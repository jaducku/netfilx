"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/netfilx_logo.svg'
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react"
import UserNav from "./UserNav";
import prisma from "../utils/db"

interface linkProps {
    name: string;
    uri: string
}

async function getMenus() {
    const data = await prisma.menu.findMany({
        select:{
            id : true,
            name: true,
            uri: true,
        },
        orderBy:{
            id: 'asc',
        },
    });
    return data;
}

export default async function Navbar(){
    const pathName = usePathname();
    
    const links : linkProps[] = await getMenus();

    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src={Logo} alt="Netfilx logo" priority />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link,idx) => (
                        <div key={idx}>
                            {pathName === link.uri ? (
                                <li>
                                    <Link 
                                        href={link.uri} 
                                        className="text-white font-semibold underline text-sm">
                                        {link.name}
                                    </Link> 
                                </li>
                            ):(
                                <li>
                                    <Link 
                                        href={link.uri}
                                        className="text-gray-300 font-normal text-sm"
                                    >{link.name}</Link> 
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 text-gray-300 cursor-pointer"/>
                <Bell className="h-5 w-5 text-gray-300"/>
                <UserNav/>
            </div>
        </div>
    )
}