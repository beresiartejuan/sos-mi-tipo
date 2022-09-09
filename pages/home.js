import Link from "next/link";
import Error from "next/error";
import Loader from '../components/Loader/Loader';
import Main from '../atoms/Main/Main';
import Post from '../components/Post/Post';
import useUser from '../libs/useUser';
import { withSessionSsr } from '../libs/withSession';

export default function Home(){

    const { user, error } = useUser('/login')

    if(error){
        return <Error>error</Error>
    }

    if(!user){
        return <Loader></Loader>
    }

    return (
        <div>
            <Main>
                <div>
                    <Post></Post>
                </div>
            </Main>
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