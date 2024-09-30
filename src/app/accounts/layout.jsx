export const metadata = {
    title:'Laroft account settings',
    description: ' Set user preferences to enjoy our services to the utmost level',
}
export default function ModalLayout({children,modal}){
    return(
        <>
            {modal}
            {children}
        </>
    )
}