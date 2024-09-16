import React from 'react';

const ProjectForm = () => {
  // Adjustable positioning values
  const iconTopOffset = '-60px';
  const iconRightOffset = '-30px';
  const postButtonRightOffset = '50px'; // Adjust this to move the button left or right
  const postButtonBottomOffset = '-60px';  // Adjust this to move the button up or down

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="relative">
        {/* Main form container */}
        <div className="bg-blue-300 rounded-lg shadow-lg p-6 w-full max-w-2xl">
          {/* Icon positioned outside the top-right corner of the form */}
          <div
            className="absolute"
            style={{
              top: iconTopOffset,
              right: iconRightOffset,
              width: '60px',
              height: '60px',
              backgroundColor: '#83B3E8',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '5px',
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=7819&format=png&color=228BE6"
                alt="icon"
                style={{ width: '40px', height: '40px' }}
              />
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-white mb-1">Project Name</label>
              <input
                type="text"
                placeholder="e.g. E-Commerce Website"
                className="w-full p-2 rounded-md"
                style={{ fontSize: '14px', width: '60%' }} // Adjust size and width
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-1">Describe in a line</label>
              <input
                type="text"
                placeholder="e.g. Need an experienced Full Stack Developer to build e-commerce website."
                className="w-full p-2 rounded-md"
                style={{ fontSize: '13px', width: '80%' }} // Adjust size and width
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-1">Project Description</label>
              <textarea
                rows={4}
                className="w-full p-2 rounded-md"
                style={{ fontSize: '14px', width: '90%' }} // Adjust size and width
              ></textarea>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-1">Skills Required</label>
              <input
                type="text"
                placeholder="e.g. React, Node.js, Firebase"
                className="w-full p-2 rounded-md"
                style={{ fontSize: '14px', width: '80%' }} // Adjust size and width
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-1">Budget Range</label>
              <input
                type="text"
                placeholder="e.g. $100 - $1000"
                className="w-full p-2 rounded-md"
                style={{ fontSize: '14px', width: '60%' }} // Adjust size and width
              />
            </div>
            
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex-1 bg-white text-blue-500 font-semibold py-2 px-4 rounded-md"
              >
                Fixed Price
              </button>
              <button
                type="button"
                className="flex-1 bg-white text-blue-500 font-semibold py-2 px-4 rounded-md"
              >
                Hourly Rate
              </button>
            </div>
            
            <div className="flex space-x-0">
              <div className="w-1/2">
                <label className="block text-lg font-semibold text-white mb-1">Start date</label>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  className="w-full p-2 rounded-md"
                  style={{ fontSize: '14px', width: '80%' }} // Adjust size and width
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-semibold text-white mb-1">End date</label>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  className="w-full p-2 rounded-md"
                  style={{ fontSize: '14px', width: '80%' }} // Adjust size and width
                />
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-white mb-1">Attachments</label>
              <p className="text-sm text-white mb-2">Add any files that help explain your project. This could be a design file, a project brief, or anything else you think is helpful.</p>
              <button
                type="button"
                className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
              >
                Upload Files
              </button>
            </div>
          </form>
        </div>

        {/* Post Project button positioned outside and to the right of the container */}
        <button
          type="submit"
          className="absolute bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600"
          style={{
            right: postButtonRightOffset,
            bottom: postButtonBottomOffset,
          }}
        >
          Post Project
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;