const AddComment = () => {
  return (
    <div className="py-12">
      <div className="text-3xl font-bold">Comments</div>
      <div className="flex gap-2 items-center mt-12 ">
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className=" border h-20 w-full p-1"
          placeholder="write comments....."
        ></textarea>
        <button className="bg-green-200 h-10 w-20 rounded">send</button>
      </div>
    </div>
  );
};

export default AddComment;