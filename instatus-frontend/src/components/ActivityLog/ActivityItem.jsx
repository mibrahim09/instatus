import {ArrowIcon} from '@/assets/ArrowIcon'
import {ColoredLetters} from "@/components/ColoredLetters";
import {ActivityItemExpanded} from "@/components/ActivityLog/ActivityItemExpanded";
import {formatDate} from "@/utils";

export const ActivityItem = ({log, isOpen, setActive}) => {
    const setCurrentAsActive = () => {
        setActive(log.id)
    }

    const closedDiv = (
        <div className={"px-4 hover:cursor-pointer"} onClick={setCurrentAsActive}>
            <div className={"grid grid-cols-8 mt-4 gap-x-4"}>
                <div className={"col-span-2 flex gap-2"}>
                    <ColoredLetters name={log.actor_name[0]}/>
                    <p>{log.target_name}</p>
                </div>
                <p className={"col-span-3"}>{log.action?.name ?? '-'}</p>
                <p className={"col-span-2"}>{formatDate(new Date(log.occurred_at))}</p>
                <p className={"flex justify-end"}><ArrowIcon/></p>
            </div>
        </div>
    )
    return (<>
        {!isOpen && closedDiv}
        {isOpen && <ActivityItemExpanded log={log}/>}
    </>)
}