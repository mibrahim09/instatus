"use client"

import {ActivityItem} from "@/components/ActivityLog/ActivityItem";
import {useCallback, useEffect, useState} from "react";
import {ActivityItemSkeleton} from "@/components/ActivityLog/ActivityItemSkeleton";
import {FilterIcon} from "@/assets/FilterIcon";
import {ActivityButton} from "@/components/Button";
import {ExportIcon} from "@/assets/ExportIcon";
import {LiveIcon} from "@/assets/LiveIcon";
import {fetchAllActivities} from "@/hooks/ActivityHooks";
import debounce from "debounce";

export const ActivityLog = () => {
    const pageSize = 10;
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const {data, isLoading, mutate} = fetchAllActivities(page, pageSize, searchTerm)
    const [array, setArray] = useState([]);
    const [lastSearch, setLastSearch] = useState([]);

    useEffect(() => {
        setLastSearch(data);
    }, [data]);

    useEffect(() => {
        if (!isLoading && lastSearch?.length > 0) {
            setArray(prevArr => [...prevArr, ...lastSearch])
            setLastSearch([])
        }
    }, [array, lastSearch, isLoading]);

    useEffect(() => {
        setArray([])
        setPage(1)
        mutate()
    }, [searchTerm]);

    const loadMore = useCallback(async () => {
        const originalPage = page;
        setPage(page + 1)
        await mutate()
        if (data?.length === 0) {
            setPage(originalPage)
        }
    }, [data, mutate, page])

    const handleChange = debounce((event) => {
        setSearchTerm(event.target.value);
    }, 300); // Adjust the debounce delay as needed


    const [active, setActive] = useState()
    return (
        <div className={"rounded border-2 border-[#f0f0f0]"} style={{width: "80vw"}}>
            <div className={"bg-neutral-100 p-4"}>
                <div className={"w-full bg-transparent border-2 rounded"}>
                    <div className={"flex"}>
                        <input onChange={handleChange} className={"w-full p-3 bg-transparent focus:outline-none"}
                               placeholder={"Search name, email or action..."}/>
                        <ActivityButton text={"FILTER"} icon={<FilterIcon/>}/>
                        <ActivityButton text={"EXPORT"} icon={<ExportIcon/>}/>
                        <ActivityButton text={"LIVE"} icon={<LiveIcon/>}/>
                    </div>
                </div>

                <div className={"grid grid-cols-8 mt-4 gap-x-4"}>
                    <p className={"text-gray-font-100 font-semibold col-span-2"}>ACTOR</p>
                    <p className={"text-gray-font-100 font-semibold col-span-3"}>ACTION</p>
                    <p className={"text-gray-font-100 font-semibold col-span-2"}>DATE</p>
                    <p></p>
                </div>
            </div>
            <div className={" pb-4"}>
                {array.map(log => (
                    <ActivityItem key={log.id} log={log} isOpen={active === log.id} setActive={setActive}/>
                ))}
                {isLoading && (
                    <>
                        <ActivityItemSkeleton/>
                        <ActivityItemSkeleton/>
                        <ActivityItemSkeleton/>
                        <ActivityItemSkeleton/>
                    </>
                )}
            </div>
            <div className={"bg-neutral-100 p-4 flex justify-center"} onClick={loadMore}>
                <p className={"text-gray-font-100 font-semibold hover:cursor-pointer"}>LOAD MORE</p>
            </div>
        </div>

    )
}