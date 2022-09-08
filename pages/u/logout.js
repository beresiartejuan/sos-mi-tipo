import { withSessionSsr } from '../../libs/withSession'

export default function Logout(){
    return (<></>)
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }){
    req.session.user = null
    req.session.destroy()
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
})