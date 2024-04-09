const Divider = ({ dividerHead, dividerDesc }) => {
  return (
    <div className="text-center py-10 px-2 md:px-32">
      <h1 className="my-h1">{dividerHead}</h1>
      <div className="flex justify-center">
        <p className="my-pd">{dividerDesc}</p>
      </div>
    </div>
  );
};

export default Divider;
