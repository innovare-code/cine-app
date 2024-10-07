import { MenuItem } from "@/components/MenuItem";
import { FaListUl, FaRegUserCircle, FaTable, FaBell, FaBeer } from "react-icons/fa";

const menuItems = [
    { text: 'Listado de Pelis', icon: <FaListUl />, path: '/listado' },
    { text: 'Profile', icon: <FaRegUserCircle />, path: '/profile' },
    { text: 'Tables', icon: <FaTable />, path: '/tables' },
    { text: 'Notifications', icon: <FaBell />, path: '/notifications' },
    { text: 'Otro Item', icon: <FaBeer />, path: '/beers' },
]

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
                <div className="relative border-b border-white/20">
                    <a className="flex items-center gap-4 py-6 px-8" href="#/">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Next Cine DB</h6>
                    </a>
                    <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="m-4">
                    <ul className="mb-4 flex flex-col gap-1">
                        {menuItems.map((menuItem, index) => (
                            <li key={index}>
                                <MenuItem text={menuItem.text} path={menuItem.path} icon={menuItem.icon} />
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <div className="p-4 xl:ml-80">
                {children}
            </div>

        </div>
    );
}

