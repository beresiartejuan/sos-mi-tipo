import Router from "next/router"
import { useEffect } from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then(res => res.json())

export default function useUser(redirectTo=false, redirectIfFound=false){

    const { data: user, mutate: mutateUser, error } = useSWR('/api/u/me', fetcher)

    useEffect(() => {

        if(user?.isLoggedIn && redirectIfFound){
            if(redirectTo) Router.push(redirectTo)
            return
        }

        if(!redirectIfFound && !user?.isLoggedIn){
            if(redirectTo) Router.push(redirectTo)
            return
        }

        return

    }, [user, redirectTo, redirectIfFound, Router])

    return { user, mutateUser, error }

}