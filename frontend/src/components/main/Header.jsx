import { useAuthContext } from "@/context/AuthContext";
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet"
import { LuLogOut } from "react-icons/lu";
import useLogout from "@/hooks/useLogout";


const Header = () => {
    const { authUser } = useAuthContext();
    const { logout } = useLogout();
    return (
    <header className="bg-blue-900 rounded-md p-2">
        <div id="menu" className="flex justify-end">
            <Sheet>
                <SheetTrigger><img src={authUser.profilePic} alt="" width={40}/></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-3xl font-black">{authUser.fullName}</SheetTitle>
                        <SheetDescription>
                            <ul className="mt-6 flex flex-col gap-2">
                                <li><a href="/create-note" className="text-xl p-2 rounded-sm hover:bg-blue-900 hover:text-slate-50 hover:font-black">Share Notes</a></li>
                                <li><a href="/edit-profile" className="text-xl p-2 rounded-sm hover:bg-blue-900 hover:text-slate-50 hover:font-black">Edit Profile</a></li>
                                <li><a href="/saved-notes" className="text-xl p-2 rounded-sm hover:bg-blue-900 hover:text-slate-50 hover:font-black">Saved Notes</a></li>
                            </ul>
                        </SheetDescription>
                        <SheetTitle className="absolute top-[300px]"><button className="bg-blue-700 hover:bg-blue-800 text-slate-50 px-6 py-2 rounded-md flex items-center gap-3" onClick={logout}><LuLogOut /><span>Log out</span></button></SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    </header>
    )
}

export default Header