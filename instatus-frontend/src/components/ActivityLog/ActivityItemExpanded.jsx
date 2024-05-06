import {Skeleton} from "@/components/Skeleton";
import {formatDate} from "@/utils";

export const ActivityItemExpanded = ({log}) => {

    const renderGridItem = (label, value) => (
        <div className={"grid grid-cols-5 mt-2"}>
            <p className={"col-span-2"}>{label}</p>
            <p className={"text-black col-span-3"}>{value}</p>
        </div>
    )
    return (
        <div style={{
            width: "83vw",
            position: "relative",
            left: "calc(-1.75vw)",
        }} className={"py-8 px-6 border-2 rounded-xl border-[#DFDFDF] my-3 bg-white text-gray-font-200"}>
            <div>

                <div className={"grid grid-cols-12 gap-x-4 gap-y-8"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold "}>ACTOR</p>
                        {renderGridItem('Name', log.actor_name)}
                        {renderGridItem('Email', log.target_name)}
                        {renderGridItem('ID', log.target_id)}
                    </div>
                    <div className={"col-span-5"}>
                        <p className={"font-semibold"}>ACTION</p>
                        {renderGridItem('Name', log.action.name)}
                        {renderGridItem('Object', log.action.object)}
                        {renderGridItem('ID', log.action.id)}
                    </div>
                    <div className={"col-span-3"}>
                        <p className={"font-semibold"}>DATE</p>
                        {renderGridItem('Readable', formatDate(log.occurred_at))}
                    </div>

                    <div className={"col-span-4"}>
                        <p className={"font-semibold mb-3"}>METADATA</p>
                        <Skeleton/>
                    </div>

                    <div className={"col-span-5"}>
                        <p className={"font-semibold mb-3"}>TARGET</p>
                        <Skeleton/>
                    </div>

                </div>
            </div>
        </div>

    )
}