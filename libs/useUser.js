import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useUser({
    redirectTo = false,
    redirectIfFound = false,
} = {}) {
    const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)

    useEffect(() => {

        if(!user || !user.isLoggedIn){
            if(redirectTo) Router.push(redirectTo)
            return
        }
        if(user && user?.isLoggedIn){
            if(redirectIfFound) Router.push(redirectIfFound)
            return
        }

    }, [user, redirectIfFound, redirectTo])

    return { user, mutateUser }
}
