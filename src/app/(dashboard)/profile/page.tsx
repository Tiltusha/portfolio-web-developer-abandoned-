import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next"

export default async function Page() {
    const session = await getServerSession(authConfig);

    return (
        <div>
            <h1>Profile of {session?.user?.name} </h1>
            {session?.user?.image && <img src={session?.user?.image} />}
        </div>
     )
}