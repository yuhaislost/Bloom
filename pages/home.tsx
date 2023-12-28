import useCurrentUser from "@/hooks/useCurrentUser";
import { ProtectionRedirect } from "@/variables/RouteProtection";
import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if (!session)
    {
        return ProtectionRedirect;
    }

    return { props: {} }
}

export default function Home(){
    const {data : user } = useCurrentUser();

    return (
        <>
            <h1>{user?.name}</h1>
            <button className="text-white border-solid border-outline-gray border-[1px] rounded-md py-2 px-4" onClick={() => signOut()}>Logout</button>
        </>
    );
}