import { useContext } from "react";
import { AuthContext } from "../../context";


function ProfilePage() {
    const { user, handleLogout } = useContext(AuthContext)
    
    return (
        <div className="flex h-screen items-center mt-10 space-y-4 mx-auto flex-col max-w-md max-h-[300px]">
            <h3 className="font-semibold">{user?.displayName}</h3>
            <p className="italic font-roboto">{user?.email}</p>
            <button onClick={handleLogout} className="bg-blue-800 px-3 py-1 text-white rounded">Logout</button>
        </div>
    )
}

export default ProfilePage;