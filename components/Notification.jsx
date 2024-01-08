// NotificationPopup.jsx
import React from "react";

const NotificationPopup = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 p-16 pl-72 ">
      <div className="absolute inset-0  bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg h-50 my-12  items-center w-80 z-10">
        {/* Your notification content goes here */}
        <div className="flex">
          <p className="font-bold text-center text-2xl">Notification </p>
          <span className="m-1 text-lg upcomming">Upcoming</span>
        </div>
        <div className="flex flex-col text-sm text-start"></div>
        <button
          onClick={handleClose}
          className="mt-10  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-[#2100ec]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
