import React from "react";

const HistoryCardSkelton = () => {
  return (
    <div className="flex justify-between cursor-pointer animate-pulse border border-gray-100 shadow rounded-md">
      <div className="flex flex-row items-center justify-start gap-2 p-2 basis-4/6">
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      </div>

      <div className="flex flex-row items-center gap-5 p-2 basis-4/6">
        <div class="flex items-center w-full">
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end space-x-4 gap-4 basis-4/6 pr-5">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
    </div>
  );
};

export default HistoryCardSkelton;
