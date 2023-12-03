"use client"
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";

interface iAppProps {
    title: string;
    overview: string;
    movieId: number;
    watchList: boolean;
    watchListId: string;
    youtubeUrl: string;
    year: number;
    age: number;
    time: number;
}

export default function MovieCard({title,overview,movieId,watchList,watchListId,youtubeUrl,age,time,year}: iAppProps){
    return (
        <>
            <button className="-mt-14">
                <PlayCircle className="h-20 w-20"/>
            </button>
            <div className="right-5 top-5 absolute z-10">
                {watchList ? (
                <form>
                    <Button variant="outline" size="icon">
                        <Heart className="w-4 h-4 text-red-500" />
                    </Button>                        
                </form>
                ):( 
                <form>
                    <Button variant="outline" size="icon" >
                        <Heart className="w-4 h-4" />
                    </Button>                        
                </form>
                )}
            </div>

            <div className="p-5 absolute bottom-0 left-0">
                <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
                <div className="flex gap-x-2 items-center">
                    <p>{year}</p>
                    <p>{age}</p>
                    <p>{time}</p>
                </div>
            </div>
        </>
    );
}