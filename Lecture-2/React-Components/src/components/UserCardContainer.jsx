import UserCard from "./UserCard";

const UserCardContainer = () => {
  return (
    <div className="UserCardContainer flex gap-8 flex-wrap m-8 justify-center">
      <UserCard
        name="Aryan Thapa"
        image="https://avatars.githubusercontent.com/u/132425739?v=4"
        desc="Aryan Thapa is a Product Engineer at Ganit Inc."
      />
      <UserCard
        name="Love Babbar"
        image="https://avatars.githubusercontent.com/u/29489915?v=4"
        desc="Love Babbar is Founder of CodeHelp and Youtuber."
      />
      <UserCard
        name="Hitesh Choudhary"
        image="https://avatars.githubusercontent.com/u/11613311?v=4"
        desc="Hitesh Choudhary is a Youtuber and Teacher."
      />
      <UserCard
        name="Krish Naik"
        image="https://avatars.githubusercontent.com/u/20041231?v=4"
        desc="Krish Naik is a Data Scientist with ML and Deep Learning experience"
      />
    </div>
  );
};

export default UserCardContainer;
