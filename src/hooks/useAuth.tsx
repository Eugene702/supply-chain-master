import { AuthUserPayload, getUser } from "@/app/actions/auth";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState<null | AuthUserPayload>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const unsubcribe = onAuthStateChanged(auth, async user => {
            if(user != null){
                const fetchUser = await getUser(user.uid)
                setUser(fetchUser)
            }else{
                setUser(null)
            }
            
            setIsLoading(false);
        })

        return () => unsubcribe()
    }, [])

    return { user, isLoading }
}

export default useAuth