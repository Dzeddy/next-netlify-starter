export default function SidebarMenuItem({ text, Icon, active }) {
    return (
        <div className={"hoverEffect flex items-center space-x-3 text-lg p-4 rounded-full cursor-pointer justify-center xl:justify-start mt-auto" + (text === "Home" ? " bg-blue-100" : "")}>
            <Icon className="h-7 w-7" />
            <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
        </div>
    );
}
