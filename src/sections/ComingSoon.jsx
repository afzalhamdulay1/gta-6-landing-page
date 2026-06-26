const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img
          src="/images/logo.webp"
          className="entrance-logo"
          alt="entrance-logo"
        />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            One <br /> Last <br /> Time
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" alt="" />
          <img src="/images/x-logo.svg" className="md:w-32 w-40" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
