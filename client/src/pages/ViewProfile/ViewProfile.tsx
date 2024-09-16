import React, { useState } from 'react';
import { ChevronDown, Star, Clock } from 'lucide-react';

interface SectionProps {
  title: string;
  content: string;
}

const ExpandableSection: React.FC<SectionProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm mb-2">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
      {isExpanded && <div className="p-4 border-t">{content}</div>}
    </div>
  );
};

const FreelancerProfile: React.FC = () => {
  // You can modify these strings to add content to each section
  const portfolioContent = "Add your portfolio content here.";
  const experienceContent = "Add your experience details here.";
  const educationContent = "Add your education information here.";
  const qualificationsContent = "Add your qualifications here.";
  const publicationsContent = "Add your publications here.";
  const articlesContent = "Add your articles here.";

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-200 h-32 relative">
          <div className="absolute top-2 left-2 bg-white rounded-full p-2 flex items-center">
            <img src="/api/placeholder/24/24" alt="GigCraftr Logo" className="w-6 h-6 mr-2" />
            <span className="font-bold text-blue-600">GIGCRAFTR</span>
          </div>
          <button className="absolute top-2 right-2 bg-white text-blue-600 px-3 py-1 rounded-full text-sm">
            Upload Banner
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative px-4 py-16">
          <div className="absolute -top-12 left-4">
            <img src="/api/placeholder/80/80" alt="Profile" className="w-20 h-20 rounded-full border-4 border-white" />
          </div>
          <div className="flex justify-end space-x-2 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Reviews</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">View Freelance Profile</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Edit Profile</button>
          </div>
          <h1 className="text-2xl font-bold">James Anderson</h1>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="mr-2">$15/hr</span>
            <span className="mr-2">•</span>
            <span className="mr-2">100% Job Success</span>
            <span className="mr-2">•</span>
            <span>50+ projects</span>
            <span className="mr-2">•</span>
            <span>India</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(4)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              {[...Array(1)].map((_, i) => <Star key={i} size={16} />)}
            </div>
            <Clock size={16} className="text-gray-400 mr-1" />
            <span className="text-sm text-gray-600">Member since Mar 15, 2022</span>
          </div>
          <p className="text-gray-700">
            I am a multifaceted individual with a passion for technology and problem-solving.
            Proficient in HTML, CSS, JavaScript, React.Js, C, C++, and Python, I bring a diverse
            skill set to the table. My expertise spans web development and general-purpose
            programming, complemented by a solid understanding of data structures. Detail-
            oriented and driven, I thrive on challenges and am always eager to explore new
            avenues in the ever-evolving world of software development.
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="px-4 pb-4">
          <ExpandableSection title="Portfolio" content={portfolioContent} />
          <ExpandableSection title="Experience" content={experienceContent} />
          <ExpandableSection title="Education" content={educationContent} />
          <ExpandableSection title="Qualifications" content={qualificationsContent} />
          <ExpandableSection title="Publications" content={publicationsContent} />
          <ExpandableSection title="Articles" content={articlesContent} />
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;