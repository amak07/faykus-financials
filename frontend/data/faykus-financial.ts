// services
import wealth from "public/wealth.jpg";
import legacy from "public/legacy.jpg";
import impact from "public/impact.jpg";

// client photos
import executive from "public/corporate-executive.jpeg";
import affluent from "public/Affluent-Families-Individuals.jpeg";
import family from "public/Family-Business-Owners.jpeg";

export const faykusLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Clients",
    route: "/clients",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Contact Us",
    route: "/contact",
  },
];

export const faykusLogin = {
  name: "Client Login",
  route: "/client",
};

export const faykusServices = [
  {
    name: "Investment Management",
    icon: "lni lni-stats-up",
    desc: `
    Our clients have worked for years to accumulate their current resources. For many of them, it’s no longer just about accumulating more. It’s about managing wisely. We view our role as stewards, strategists and wise managers working in partnership with our clients.    `,
  },
  {
    name: "Wealth Planning",
    icon: "lni lni-investment",
    desc: `
    Our clients have worked for years to accumulate their current resources. For many of them, it’s no longer just about accumulating more. It’s about managing wisely. We view our role as stewards, strategists and wise managers working in partnership with our clients.    `,
  },
  {
    name: "Land Sale Planning",
    icon: "lni lni-trees",
    desc: `
    Our clients have worked for years to accumulate their current resources. For many of them, it’s no longer just about accumulating more. It’s about managing wisely. We view our role as stewards, strategists and wise managers working in partnership with our clients.    `,
  },
  {
    name: "Charitable & Legacy Planning",
    icon: "lni lni-grow",

    desc: `
    We believe every person leaves some kind of legacy in their wake whether it’s intentional or unintentional. We engage with our clients to help them be purposeful about the kind of legacy they are creating and help ensure its one they can be proud of.
    `,
  },
  {
    name: "Nonprofit Institutions",
    icon: "lni lni-consulting",
    desc: `
    We help families gain clarity around the issues for which they would like to be a catalyst for change. Once the mission is clear, we partner with them to develop strategies for creating the specific impact they want to create.
    `,
  },
  {
    name: "Family Office",
    icon: "lni lni-home",
    desc: `
    Our clients have worked for years to accumulate their current resources. For many of them, it’s no longer just about accumulating more. It’s about managing wisely. We view our role as stewards, strategists and wise managers working in partnership with our clients.    `,
  },
];

export const faykusClients = [
  {
    name: "Corporate Executives",
    image: executive,
    position: "left",
    desc: `
    C-suite and senior-level executives have unique wealth management challenges as a result of corporate compensation structures, especially the accumulation of financial assets invested in various forms of company stock. We help our executive clients by advising on the compensation negotiation, identifying ways to help protect personal and professional assets due to an oversized position, and taxation issues triggered by equity-based and deferred compensation.
    `,
  },
  {
    name: "Family Business Owners",
    image: family,
    position: "right",
    desc: `
    It is essential to develop and kindle a financial legacy while
    the business remains under its current ownership. For a family
    business owner or operator, that includes relying on the use
    of sophisticated and strategic tax planning and building an
    estate plan that accounts for the financial future they want
    for themselves and future generations.
    `,
  },
  {
    name: "Affluent Families & Individuals",
    image: affluent,
    position: "left",
    desc: `
    Affluent families also have a great interest in leaving a
    legacy for future generations. To some, nothing is more
    important than passing on family values, relics, and financial
    security to their children and grandchildren. We design
    strategies specifically to provide for your loved ones and
    limit exposure to taxes while generating new income.
    `,
  },
];
