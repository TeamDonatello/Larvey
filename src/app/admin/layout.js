import AdminNavigationBar from "@/components/Navigation/AdminNavigationBar";

export default function({children}){
    return(
        <div>
            <AdminNavigationBar/>
            <div>{children}</div>
        </div>
    )
}