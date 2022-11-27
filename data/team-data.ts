interface Social {
  color: string;
  name: string;
}

export interface TeamData {
  img: string | undefined;
  name: string;
  position: string;
  socials?: Social[];
}

export const teamData: TeamData[] = [
  {
    img: "/img/team-1.jpg",
    name: "Ryan Tompson",
    position: "Web Developer",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "/img/team-2.jpg",
    name: "Romina Hadid",
    position: "Marketing Specialist",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "/img/team-3.jpg",
    name: "Alexa Smith",
    position: "UI/UX Designer",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "/img/team-4.png",
    name: "Jenna Kardi",
    position: "Founder and CEO",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
];

export default teamData;
