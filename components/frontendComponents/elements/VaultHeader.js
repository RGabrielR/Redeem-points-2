import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Link from 'next/link';
const VaultHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full  ">
        <div className="background-buyButton">
            <Link href="/">
        <i className="fas fa-shopping-cart fa-3x"></i>
        </Link>
        </div>
      </div>
      <div className="pt-5">
        <p className="vault-title">Your vault</p>
        <p className="vault-description px-12">
          Everything that you gain from your points, here:
        </p>
      </div>
    </>
  );
};

export default VaultHeader;
