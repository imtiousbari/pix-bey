const IconWithText = ({ icon: Icon, title, subtitle }) => {
    return (
      <div className="flex items-center  ">
        <div className="text-white mr-4">
          <Icon size={70} />
        </div>
        <div>
          <h2 className="text-2xl text-white font-bold">{title}</h2>
          <p className="text-white">{subtitle}</p>
        </div>
      </div>
    );
  };
export default IconWithText;