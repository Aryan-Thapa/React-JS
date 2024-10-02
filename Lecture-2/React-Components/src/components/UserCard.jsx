const UserCard = (props) => {
  return (
    <div className="UserCard p-4 bg-white rounded-2xl flex flex-col gap-2 justify-between items-center w-[20rem] h-[16rem]">
      <p className="font-bold">{props.name}</p>
      <img src={props.image} alt="user-img" className="h-32 rounded-full" />
      <p className="font-bold">{props.desc}</p>
    </div>
  );
};

export default UserCard;
