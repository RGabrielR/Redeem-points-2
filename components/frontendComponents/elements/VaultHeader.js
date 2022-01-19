import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
const VaultTitleAndDescription = () => {
    return ( 
        <>
        <div className="flex flex-row justify-center">
        <i className="fas fa-shopping-cart fa-3x background-buyButton"></i>
        </div>
            <div className="pt-5">
            <p className="vault-title">Your vault</p>
            <p className="vault-description px-12">Everything that you gain from your points, here:</p>
            </div>
        </>
     );
}
 
export default VaultTitleAndDescription;