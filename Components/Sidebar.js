import Image from 'next/image';
import SidebarMenuItem from "@/Components/SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
import {BellIcon, HashtagIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon} from "@heroicons/react/outline";
export default function Sidebar() {
    return (
        <div className={"hidden sm:flex flex-col p-2 xl:items-start fixed h-full"}>
            {/* Twitter Icon */}
            <div className="hoverEffect p-0 hover:bg-blue-100 rounded-full cursor-pointer xl:px-1">
                <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width={50} height={50} />
            </div>
            {/* Sidebar Option */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            {/* Button */}
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:bg-blue-500 active:scale-90 transition duration-150 hidden xl:inline">Tweet</button>
            {/* Mini Profile */}
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
                src="https://cdn.discordapp.com/attachments/814580033641119774/1078915170660794459/image.png"
                alt="Dylan Zhuang"
                className="rounded-full h-10 w-10 xl:mr-2" />
                <div className="leading-5 hidden xl:inline">
                    <h4 className={"font-bold"}>Dylan Zhuang</h4>
                    <p className="text-gray-500">@dylanzhuang</p>
                </div>
                <DotsHorizontalIcon className="h-6 w-6" />
            </div>
        </div>
    );
}