import React from 'react';
import resourceImage from '../images/resource.png';
import mentorImage from '../images/mentor.webp';
import progressImage from '../images/progress.png';
import lessonsImage from '../images/lessons.png';
import leaderboardImage from '../images/leaderboard.png';
import remainderImage from '../images/remainder.png';

const Features = () => {
  return (
    <div className="grid grid-cols-3 row-span-3 gap-24 pt-12 pb-12 pl-12">
      <h1 className="mr-14 col-span-3 text-5xl text-black abril-fatface-regular font-bold text-center">Our Features</h1>
      <div className="flex flex-col items-center">
        <img className="object-contain w-50 pt-2" src={resourceImage} alt="Resource Image"/>
        <p className="mt-4 text-lg text-black abril-fatface-regular text-center">Resources</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="object-contain w-48 pt-7" src={mentorImage} alt="Mentor Image"/>
        <p className="pt-9 text-lg text-black abril-fatface-regular text-center">Mentor</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="object-contain w-48" src={progressImage} alt="Progress Image"/>
        <p className="pt-5 text-lg text-black abril-fatface-regular text-center">Progress</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="object-contain self-center w-49" src={lessonsImage} alt="Lessons Image"/>
        <p className="pt-4 text-lg text-black abril-fatface-regular text-center">Lessons</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="object-contain self-center w-48" src={leaderboardImage} alt="Leaderboard Image"/>
        <p className="pt-4 text-lg text-black abril-fatface-regular text-center">Leaderboard</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="object-contain self-center w-48" src={remainderImage} alt="Remainder Image"/>  
        <p className="pt-4 text-lg text-black abril-fatface-regular text-center">Remainder</p>
      </div>
    </div>
  );
}

export default Features;
