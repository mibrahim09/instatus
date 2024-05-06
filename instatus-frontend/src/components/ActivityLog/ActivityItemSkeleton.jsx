import {ArrowIcon} from '@/assets/ArrowIcon'
import {ColoredLetters} from "@/components/ColoredLetters";
import {ActivityItemExpanded} from "@/components/ActivityLog/ActivityItemExpanded";
import {Skeleton} from "@/components/Skeleton";

export const ActivityItemSkeleton = ({id, isOpen, setActive}) => {
    return (<div className={""} >
        <div className={"grid grid-cols-8 mt-4 px-4 gap-x-4"}>
            <div className={"col-span-2 flex gap-2"}>
                <Skeleton/>
            </div>
            <div className={"col-span-3 flex gap-2"}>
                <Skeleton/>
            </div>
            <div className={"col-span-2 flex gap-2"}>
                <Skeleton/>
            </div>
        </div>
    </div>)
}