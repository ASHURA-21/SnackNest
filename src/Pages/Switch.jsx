import './Switch.css';

const Switch = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider1" />
    </label>
  );
};

export default Switch;





