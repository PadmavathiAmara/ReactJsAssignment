import dashboard from "../assets/dashboard_icon.svg";
import transaction from "../assets/transaction_icon.svg";
import schedule from "../assets/schedule_icon.svg";
import settings from "../assets/setting_icon.svg";
import users from "../assets/user_icon.svg";
import './Dashboard.css';
import './LeftNav.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";

export const LeftNav = () => {

  let navItemLinks = [
    { icon: dashboard, title: "Dashboard" },
    { icon: transaction, title: "Transactions" },
    { icon: schedule, title: "Schedule" },
    { icon: users, title: "Users" },
    { icon: settings, title: "Settings" },
  ];

  const [showOptions, setShowOptions] = useState(false);

  const onMenuClick = () => {
    setShowOptions(!showOptions);
  }

  return (
    <>
      <div id='left_side'>
        <nav>
          <div id="mainDiv" >
            <div id="navHeader">
              <h1 id="mainText" >Board.</h1>
              <MenuOutlinedIcon className="burgerMenu" onClick={() => { onMenuClick() }} />
            </div>
            <ul className={`list ${showOptions ? 'show' : ''} `}>
              {navItemLinks.map((e) => {
                return (
                  <li id="item" >
                    <img src={e.icon} alt="dashboard" />
                    {e.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div id="bottomDiv" >
            <p className="p1" >Help</p>
            <p className="p1" >Contact Us</p>
          </div>
        </nav>
      </div>
    </>
  )
}

export default LeftNav;


// -----------------------nav-component---------------------------
