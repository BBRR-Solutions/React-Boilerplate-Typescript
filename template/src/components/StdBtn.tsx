import "./StdBtn.css";

interface StdBtnProps {
  text?: string
}

export default function Stdbtn({ text }: StdBtnProps) {
  return (
    <>
      <button className="std_button">{text}</button>
    </>
  );
}
