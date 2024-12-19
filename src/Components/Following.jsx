import React, { useRef, useState } from 'react'
import SearchBox from './SearchBox';

function Following() {
  const name = useRef();
  const influencers = [
    {
      influencerId: 1,
      fullName: "James Anderson",
      followersCount: 5000,
      bio: "Passionate about coding",
      profileImage: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      influencerId: 2,
      fullName: "Emily Brown",
      followersCount: 4200,
      bio: "Loves photography and travel",
      profileImage: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      influencerId: 3,
      fullName: "Michael Johnson",
      followersCount: 3600,
      bio: "Tech enthusiast and gamer",
      profileImage: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      influencerId: 4,
      fullName: "Sophia Davis",
      followersCount: 2800,
      bio: "Avid reader and writer",
      profileImage: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      influencerId: 5,
      fullName: "William Miller",
      followersCount: 4500,
      bio: "Aspiring entrepreneur",
      profileImage: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      influencerId: 6,
      fullName: "Isabella Wilson",
      followersCount: 3700,
      bio: "Fitness lover and chef",
      profileImage: "https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
      influencerId: 7,
      fullName: "Alexander Moore",
      followersCount: 4000,
      bio: "Music producer and artist",
      profileImage: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
      influencerId: 8,
      fullName: "Olivia Taylor",
      followersCount: 3100,
      bio: "Fashion blogger and stylist",
      profileImage: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      influencerId: 9,
      fullName: "Ethan Martinez",
      followersCount: 2900,
      bio: "Loves sports and adventures",
      profileImage: "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
      influencerId: 10,
      fullName: "Ava Hernandez",
      followersCount: 3400,
      bio: "Animal lover and activist",
      profileImage: "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
      influencerId: 45,
      fullName: "Chris Evans",
      followersCount: 2700,
      bio: "Actor and fitness enthusiast",
      profileImage: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
      influencerId: 412,
      fullName: "Robert Downey",
      followersCount: 3800,
      bio: "Innovator and philanthropist",
      profileImage: "https://randomuser.me/api/portraits/men/15.jpg"
    }
  ];



  const [data, setData] = useState(influencers);
  return (
    <>
      <SearchBox name={name} data={data} setData={setData} influencers={influencers}></SearchBox>



      <div className='my-4 flex justify-evenly gap-y-5 gap-16 flex-wrap h-full overflow-y-auto'>
        {data.length > 0 ? (data.map((influencer) => {
          return (
            <div className="card text-white bg-base-100 w-80 shadow-xl rounded-md  hover:scale-105 duration-300">

              <img
                src={influencer.profileImage}
              />

              <div className="card-body">
                <h2>{influencer.influencerId}</h2>
                <h2 className="card-title ">{influencer.fullName}</h2>
                <div className='flex gap-1'>
                  <span className='bg-green-500 text-black w-fit font-bold inline px-[0.50rem] text-center rounded-md'>{influencer.followersCount}</span> <span>Followers</span>
                </div>

                <p> <i>{influencer.bio}</i></p>
              </div>

            </div>
          )
        })) : <h1>NO DATA FOUND</h1>}
        {


        }



      </div>
    </>

  )
}

export default Following
