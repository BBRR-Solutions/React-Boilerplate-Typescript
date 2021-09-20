import { Link } from "react-router-dom";

import "./NavBtn.css";

import StdBtn from './StdBtn'

interface NavBtnProps {
  ButtonPath: string,
  ButtonText: string
}

export default function NavBtn({ ButtonPath, ButtonText }: NavBtnProps) {
  return (
    <div className="nav_button_container">
      <Link to={ButtonPath}>
        <StdBtn text={ButtonText} />
      </Link>
    </div>
  );
}
