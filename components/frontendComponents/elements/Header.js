import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
const Header = ({name, points}) => {
    return ( 
        <>
        <div className="w-full">
        <div className="flex flex-row flex justify-between">
            <h1 className="text-on-user">{name}</h1>
            <div className="background-vaultButton">
            <i className="fas fa-shopping-basket fa-3x"></i>
            </div>
            <h1 className="text-on-points">{points}</h1>
        </div>
        </div>
        </>
     );
}
 
export default Header;