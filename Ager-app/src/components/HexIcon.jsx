function HexIcon({ icon, bgColor }) {
    return (
      <div className={`w-20 h-20 ${bgColor} clip-hex flex items-center justify-center border-2 border-white`}>
        <span className="text-white text-2xl">{icon}</span>
      </div>
    );
  }
  
  export default HexIcon;
  