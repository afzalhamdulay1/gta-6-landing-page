const Outro = () => {
  return (
    <div className="final-message absolute inset-0 z-50 opacity-0 pointer-events-none">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        <div>
          <h3 className="gradient-title">
            Lets <br /> Play <br /> Football
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </div>
  );
};

export default Outro;
