import AdminNavigationBar from "@/components/Navigation/AdminNavigationBar"
export const metadata = {
    title : "Laroft admin pages",
    description: "shops add items and products"
}
export default function AdminLayout ({children}){
    return(
    <>
        <AdminNavigationBar/>
        {children}    
    </>)
}