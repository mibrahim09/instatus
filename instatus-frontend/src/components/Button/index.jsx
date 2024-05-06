import {FilterIcon} from "@/assets/FilterIcon";

export const ActivityButton = ({text, icon}) => {
    return (
        <div className={"border-l-2 flex "}>
            <div className={"p-3 flex items-center justify-center gap-x-2 hover:cursor-pointer hover:text-black "}>
                {icon}
                {text}
            </div>
        </div>
    )
}
