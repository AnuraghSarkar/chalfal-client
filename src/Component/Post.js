import Avatar from "../images/avatar.png";

const PostForm = () => {
  return (
    <>
      <div className="bg-chalfal_color px-6 py-4 text-gray-400">
        <div className="border border-chalfal_border p-2 rounded-md flex bg-chalfal_color-brighter">
          <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
            <img src={Avatar} alt="" style={{ filter: "invert(100%)" }} />
          </div>
          <form
            action=""
            className="flex-grow bg-chalfal_color-brightest border border-chalfal_border ml-4 mr-2 rounded-md"
          >
            <input
              type="text"
              onFocus={(e) => {
                e.preventDefault();
              }}
              className="bg-chalfal_color-brightest p-2 px-3 text-sm block w-full rounded-md focus:outline-none"
              placeholder="Create post "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
