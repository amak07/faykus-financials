// client photos
import executive from "public/corporate-executive.jpeg";
import affluent from "public/Affluent-Families-Individuals.jpeg";
import family from "public/Family-Business-Owners.jpeg";
import { GridItem } from "components/grid-layout";

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

export const faykusServices: GridItem[] = [
  {
    name: "Investment Management",
    icon: "lni lni-stats-up",
    desc: `
    Your Austin financial advisor builds your portfolio strategically to deliver sustainable, customized investment solutions and drive lasting success.     `,
  },
  {
    name: "Wealth Planning",
    icon: "lni lni-investment",
    desc: `
    We help establish your personalized benchmark to alleviate uncertainty and realize your potential—financial and otherwise.`,
  },
  {
    name: "Land Sale Planning",
    icon: "lni lni-trees",
    desc: `
    Our Realty Services group is comprised of a team of real estate professionals addressing all aspects of PNC's real estate needs, including the management of our owned and leased real estate portfolio.   `,
  },
  {
    name: "Charitable & Legacy Planning",
    icon: "lni lni-grow",

    desc: `
    From choosing a qualified charity to making a qualified charitable distribution, we help you give wisely to support the causes that matter to you most and make the most of your donation.
    `,
  },
  {
    name: "Nonprofit Institutions",
    icon: "lni lni-consulting",
    desc: `
   Nonprofits are certainly more unique and complex in their requirements.
 Making sure that your finances are up to date and completely accurate is absolutely critical as a nonprofit because you must maintain your organization’s tax-exempt status.    `,
  },
  {
    name: "Family Office",
    icon: "lni lni-home",
    desc: `
    As part of your comprehensive plan, we offer additional lifestyle management services to oversee household arrangements, from vehicle purchase negotiations to travel itineraries, so you’re able to focus on what matters most to you. `,
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
