import React from "react";
import "./Management.scss";
import { Maam, Avijit, Meghdut } from "../../../../constants/images";
const Management = () => {
  return (
    <div className="main">
      <div className="container ">
        <h1 className="management">Management Desk</h1>
        <div className="wrapper">
          <div className="image-1">
            <img src={Maam} alt="maam" />
          </div>
          <div className="content-1">
            <h1>Co-Chairman's Desk</h1>
            <h2>Mrs. Manashi Roy Chowdhury</h2>
            In the middle of every difficulty lies an opportunity. Let’s us all
            embrace the golden rays of chances to showcase our potentialities in
            every path we cross in our life. There are no limits to what one can
            accomplish so always endeavor for new ideas to sparkle out in every
            possible corner. Extremely happy with a feeling of pride for Team
            Ankuran for their official website. Your hard work and dedication
            have made this a success. It is not the mountains we conquer but
            ourselves. Believe in yourselves to make anything possible. Learn,
            evolve & emerge successfully in life. My students have always been
            the pride of our institute and I express my earnest wishes for them
            to succeed in every path of their journey. “Never change the goal,
            change the attitude to shine on in life.”
          </div>
        </div>
        <div className="wrapper">
          <div className="image-2">
            <img src={Meghdut} alt="maam" />
          </div>
          <div className="content-2">
            <h1>Co-Chairman's Desk</h1>
            <h2>Mr. Meghdut Roy Chowdhury</h2>
            The thrill and joy of a cultural fest is not unknown to students and
            their peers. Therefore, it brings me immense pleasure and happiness
            to introduce to the world the new website for the annual cultural
            fest of Team Ankuran, "Anakhronos", at the Techno Main Saltlake. The
            Team Ankuran has worked hard for days and nights to bring to the
            city a fest filled with joy and enthusiasm, and now this is their
            new step to spread cultural awareness through a digital step
            forward. As the world has slowly changed into a digital mode and now
            we are adapting to new ways of communication, this is just a next
            step forward in the positive direction taken by Team Ankuran. Techno
            Main Saltlake has been my second home and every other event is very
            close to my heart. I was a student here, and I have been closely
            associated with all the ups and downs of my college.
            {/* Every moment
            spent here has been enriching and when I see the students trying to
            make the most of their days, even in the midst of a pandemic, I
            cannot help but feel even prouder. I remember in my college days, we
            used to be extremely excited for the Anakhronos days. As a team, we
            used to participate in many different activities that enriched our
            experiences, and now when I see the students doing the same, my
            heart fills with immense nostalgia and joy. Team Ankuran has
            successfully contributed to the society with their valiant efforts
            and will continue to do so. With the launch of the new website, they
            will be able to achieve their dreams and aspirations in a greater
            way. All the freshers, students and as well as the alumni will
            easily be able to get all information regarding the fest and it's
            activities, as the team has done a great job with the website. I am
            a proud alumni and I am really glad that the students have moved
            forward with this wonderful initiative. My best wishes are with the
            team and I hope they will always make their college proud. */}
          </div>
        </div>
        <div className="wrapper">
          <div className="image-1">
            <img src={Avijit} alt="maam" />
          </div>
          <div className="content-1">
            <h1>Director, Techno Main Salt Lake </h1>
            <h2>Prof. Avijit Kar</h2>
            "A true artist is not the one who is inspired, but the one who
            inspires others"-With this mindset, I believe that the Cultural
            Committee of Techno Main SaltLake, is the most dedicated platform to
            nurture and motivate the inner talents and artistry of a student.
            Despite being the oldest of all, this committee has recently
            undergone a complete renaissance in 2020 and thus Team Ankuran is
            born, that embraces everyone with open arms. Year after year, the
            committee has enhanced and enriched the flair and forte of students
            with an artistic attitude, by celebrating cultural diversity through
            several intra and inter-collegiate event. I personally feel that
            Team Ankuran is an emotion that conglomerates every individual with
            cultural insight and lets him shine in the limelight.
            {/* The spirit and
            zeal of culture, sown within every youth is successfully unfurled by
            Team Ankuran to display their creative talents in a variety of ways.
            I wholeheartedly congratulate the Student Members of Team Ankuran
            for their constant enthusiasm and passion to carry forward the
            legacy even during challenging phases, along with the faculty
            members who have always been the beacon of light for them. Good luck
            Team Ankuran!!! */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
