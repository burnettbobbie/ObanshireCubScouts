const Burger = ({ isOpen }) => {
    return (
      <>
        {/* Burger icon */}
        <div className="burger-icon">
          <div className="burger burger1"></div>
          <div className="burger burger2"></div>
          <div className="burger burger3"></div>
        </div>
  
        {/* Styles for the burger icon */}
        <style jsx>{`
          .burger {
            background-color: ${isOpen ? "#fff" : "#6c3a9d"};
          }
  
          .burger1 {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
            background-color: ${isOpen ? "#fff" : "#6c3a9d"};
          }
  
          .burger2 {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }
  
          .burger3 {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
            background-color: ${isOpen ? "#fff" : "#6c3a9d"};
          }
        `}</style>
      </>
    );
  };
  
  export default Burger;
  