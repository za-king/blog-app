type CommentProp = {
  comments: [
    {
      comment: string;
      name: string;
      userEmail: string;
      profilePhoto: string;
      userID: string;
    }
  ];
};

const Comment = ({ comments }: CommentProp) => {
  return (
    <div>
      {comments?.map((comment ,index) => {
        return (
          <div className="py-4" key={index}>
            <div className="flex gap-2 my-2 items-center ">
              <img
                src={comment.profilePhoto}
                alt=""
                style={{borderRadius : "50%" ,width:"10%" ,transform: "scale(0.5)"}}
                
              />
              <div className="text-xs font-bold">
               
                <div>{comment.name}</div> 
                <div>{comment.userEmail}</div>
              </div>
            </div>

            <div className="font-semibold">{comment.comment}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
