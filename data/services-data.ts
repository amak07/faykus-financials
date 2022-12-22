import Moneyhand from "../public/icons/Moneyhand.svg";
import Moneyflower from "../public/icons/Moneyflower.svg";
import Newspaper from "../public/icons/Newspaper.svg";

export interface ServiceData {
  icon: string;
  title: string;
  desc: string;
  readMoreHref: string;
}

export const services: ServiceData[] = [{
  icon: Newspaper,
  title: 'Wealth Management',
  desc: 'Our clients have worked for years to accumulate their current resources. For many of them, it’s no longer just about accumulating more. It’s about managing wisely.',
  readMoreHref: '/services'
},
{
  icon: Moneyflower,
  title: 'Legacy development',
  desc: 'We engage with our clients to help them be purposeful about the kind of legacy they are creating and help ensure it’s one they can be proud of.',
  readMoreHref: '/services'
}, {
  icon: Moneyhand,
  title: 'Impact deployement',
  desc: 'We help families gain clarity around the issues for which they would like to be a catalyst for change. Once the mission is clear, we partner with them to develop strategies for creating impact.',
  readMoreHref: '/services'
}]