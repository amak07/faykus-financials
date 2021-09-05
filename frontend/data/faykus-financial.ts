import wealth from "public/wealth.webp";
import legacy from "public/legacy.webp";
import impact from "public/impact.png";

export const faykusLinks = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'About',
    route: '/'
  },
  {
    name: 'Clients',
    route: '/'
  },
  {
    name: 'Services',
    route: '/'
  },
  {
    name: 'Contact Us',
    route: '/'
  }
]

export const faykusLogin = {
  name: 'Client Login',
  route: '/'
}

export const faykusServices = [
  {
    name: 'Wealth',
    img: wealth,
    desc: `
    Our clients have worked for years to accumulate their current resources. For many of them, 
    it’s no longer just about accumulating more. It’s about managing wisely. We view our 
    role as stewards, strategists and wise managers working in partnership with our clients.
    `
  },
  {
    name: 'Legacy',
    img: legacy,
    desc: `
    We believe every person leaves some kind of 
    legacy in their wake whether it’s intentional or unintentional. We engage with our 
    clients to help them be purposeful about the kind of legacy they are creating and 
    help ensure its one they can be proud of.
    `
  },
  {
    name: 'Impact',
    img: impact,
    desc: `
    We help families gain clarity around the issues for 
    which they would like to be a catalyst for change. Once the mission is clear, 
    we partner with them to develop strategies for creating the specific impact they 
    want to create.
    `
  }
]