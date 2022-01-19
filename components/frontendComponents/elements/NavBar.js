import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import Swal from "sweetalert2";
const NavBar = ({ title, buy1000, buy5000, buy7500 }) => {

  const buyAlert = points => {
    Swal.fire("Perfect!", `You gain ${points} points!`, "success");
    switch(points) {
      case 1000:
        return buy1000();
      case 5000:
        return buy5000();
      case 7500:
        return buy7500();
      default:
        return '';
    }
  };
  
  return (
    <div className="navBar flex flex-col md:flex-row justify-between mt-2">
      <div className="fourth-block">
        <div className="third-block">
          <div className="second-block">
            <div className="first-block">
              <p className="title">{title}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-col mr-12 self-center w-100">
            <div className="flex flex-row py-2 mt-4">
            <i onClick={() => buyAlert(1000)} className="fas fa-plus fa-3x plus-primary"></i>
            <p className="points-text ml-4  w-40">1000</p>
            </div>
            <div className="flex flex-row py-2">
            <i onClick={() => buyAlert(5000)} className="fas fa-plus fa-3x plus-secondary"></i>
            <p className="points-text ml-4 w-40">5000</p>
            </div>
            <div className="flex flex-row py-2">
            <i onClick={() => buyAlert(7500)} className="fas fa-plus fa-3x plus-ternary "></i>
            <p className="points-text ml-4 w-40">7500</p>
            </div>    
        </div>
    </div>
  );
};

export default NavBar;
