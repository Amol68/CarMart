const InfoSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 border ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-2">
            <img
              src="https://i1.wp.com/moparinsiders.com/wp-content/uploads/2020/01/Large-14891-MaseratiQuattroporteGTSMY19GranSport-scaled.jpg?fit=2560%2C1439&ssl=1"
              className="rounded"
              alt=""
            />
          </div>

          <div className="md:col-span-2">
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
