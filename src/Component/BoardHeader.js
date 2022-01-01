const BoardHeader = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://styles.redditmedia.com/t5_2qs0q/styles/bannerBackgroundImage_7glcgg5ymxp21.png?width=4000&s=9684bc66e812b8730ad694c3f454da8c00a493d7")',
        }}
        className="h-20 bg-cover bg-no-repeat w-full"
      ></div>
      <div className="bg-chalfal_color-brighter">
        <div className="mx-6 relative flex">
          <div className="h-24 w-24 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white">
            <img
              src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?width=256&format=pjpg&s=0a2e472f6fae0712fee4a3b5d44920fe35dbcdaa"
              alt="Icon Create Community"
            />
          </div>
          <div className="pt-2 pl-4">
            <h1 className="text-gray-200 text-3xl">
              Chalfal: Discussion for developers
            </h1>
            <h5 className="text-gray-400">r/chalfal</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardHeader;
