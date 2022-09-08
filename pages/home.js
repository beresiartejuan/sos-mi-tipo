import Link from "next/link";
import Loader from '../components/Loader/Loader';
import useUser from '../libs/useUser'
import { withSessionSsr } from '../libs/withSession';

export default function Home(){

    const { user, error } = useUser('/login')

    if(error){
        return <h2>Error {error}</h2>
    }

    if(!user){
        return <Loader></Loader>
    }

    return (
        <div>
            <p>{user.email}</p>
            <Link href='/u/logout'><a>Logout</a></Link>
        </div>
    )
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }){
    const user = req.session.user

    if(!user){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
})