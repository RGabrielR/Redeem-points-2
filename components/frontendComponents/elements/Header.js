import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Link from 'next/link';
const Header = ({ name, points }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row flex justify-between align-center">
          <h1 className="text-on-user">{name}</h1>
          <div className="background-vaultButton">
              <Link href="/Vault">
            <i className="fas fa-shopping-basket fa-3x"></i>
            </Link>
          </div>
          <h1 className="text-on-points">{points}</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
