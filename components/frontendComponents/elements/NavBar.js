import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
const NavBar = ({ title, buy1000, buy5000, buy7500 }) => {
  console.log(title, buy1000, buy5000, buy7500);
  return (
    <div className="navBar flex justify-between mt-2">
      <div className="fourth-block">
        <div className="third-block">
          <div className="second-block">
            <div className="first-block">
              <p className="title">{title}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-col mr-12">
            <div className="flex flex-row py-2 mt-4">
            <i class="fas fa-plus fa-3x plus-primary"></i>
            <p className="points-text ml-4  w-40">1000</p>
            </div>
            <div className="flex flex-row py-2">
            <i class="fas fa-plus fa-3x plus-secondary"></i>
            <p className="points-text ml-4 w-40">5000</p>
            </div>
            <div className="flex flex-row py-2">
            <i class="fas fa-plus fa-3x plus-ternary "></i>
            <p className="points-text ml-4 w-40">7500</p>
            </div>    
        </div>
    </div>
  );
};

export default NavBar;
