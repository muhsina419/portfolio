// sample data for achievements
// you can add more entries as needed
import starletImage from '../assets/starletprize.jpeg';
import image5 from '../assets/5.jpg';
import image7 from '../assets/7.jpg';

/**
 * @typedef {{
 *   id: number;
 *   title: string;
 *   organization: string;
 *   description: string;
 *   category: string;
 *   icon: string;
 *   date: string;
 *   image: string;
 * }} Achievement
 */

/** @type {Achievement[]} */
export const achievements = [
  {
    id: 1,
    title: "First Prize - Hackathon",
    organization: "Starlet 4.0",
    description: "Won first place among 200 teams for building an inclusive Accessibility Finder platform for physically handicapped persons",
    category: "competition",
    icon: "trophy",
    image: starletImage,
  },
  {
    id: 2,
    title: "Special Mention Award",
    organization: "Kotech hackathon 2025",
    description: "Got a notable mention on building an smart traffic control and maintaining platform for kottakkal city",
    category: "recognition",
    icon: "trophy",
    image: image5,
  },
  {
    id: 3,
    title: "Runner Up",
    organization: "Code Revolt Hackathon - MESCET Kunnukara",
    description: "Recognized for outstanding contributions to build an website that is useful in emergency medical conditions",
    category: "competetion",
    icon: "trophy",
    image: image7,
  },
];
