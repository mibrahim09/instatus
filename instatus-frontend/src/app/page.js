import Image from "next/image";
import {ActivityLog} from "@/components/ActivityLog";

export default function Home() {
    return (
        <div className="flex justify-center py-5 text-gray-font-100">
            <div className={"container flex justify-center"}>
                <ActivityLog/>
            </div>
        </div>
    );
}
