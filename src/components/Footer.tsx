const Footer = () => {
  return (
    <div className='  flex flex-col items-center justify-center bg-blue-500/10 backdrop-blur-3xl p-10 border-t-2 border-blue-200/20'>
      <div className='w-screen  h-[90vh] flex justify-evenly items-center flex-col  md:flex-row '>
        <div>Section 1</div>
        <div>Section 2</div>
        <div>Section 3</div>
        <div>Section 4</div>
      </div>
      <div>
        <p>Designed with love </p>
      </div>
    </div>
  );
};

export default Footer;
