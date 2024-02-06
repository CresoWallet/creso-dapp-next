"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import secure from "../../assets/eoa/confirmpassword.svg";

function CreateEOAWallet() {
  const secretPhrase = [
    "apple",
    "banana",
    "orange",
    "grape",
    "peach",
    "mango",
    "pineapple",
    "watermelon",
    "strawberry",
    "blueberry",
    "raspberry",
    "kiwi",
  ];

  // Step 1: Randomly select 4 to 5 indexes to remove
  const removedIndexes = [];
  while (removedIndexes.length < Math.floor(Math.random() * 2) + 4) {
    const index = Math.floor(Math.random() * 12);
    if (!removedIndexes.includes(index)) {
      removedIndexes.push(index);
    }
  }

  const [inputWords, setInputWords] = useState(
    secretPhrase.map((_, index) =>
      removedIndexes.includes(index) ? "" : secretPhrase[index]
    )
  );

  const handleInputChange = (index, event) => {
    const newInputWords = [...inputWords];
    newInputWords[index] = event.target.value;
    setInputWords(newInputWords);
  };

  const handleDone = () => {
    // Step 2: Compare input with removed words and update state accordingly
    const missingWords = [];
    for (let i = 0; i < removedIndexes.length; i++) {
      const index = removedIndexes[i];
      if (!inputWords[index]) {
        missingWords.push(secretPhrase[index]);
      }
    }
    setInputWords(
      secretPhrase.map((word, index) =>
        removedIndexes.includes(index) ? "" : word
      )
    );
    alert("You missed: " + missingWords.join(", "));
  };

  return (
    <div className="border-black border-2 mx-2 px-3 items-center justify-center py-2  flex-1">
      <div className="flex flex-col ">
        <h1 className="grid grid-cols-3 text-3xl font-bold w-full    items-center justify-center rounded-t-xl py-8 ">
          <Image alt="" src={creso} className=" " />
          Create EOA Wallet
        </h1>

        <div className=" justify-center content-center  place-content-center items-center m-4 px-10 ">
          <Image alt="" src={secure} className="justify-center" />
        </div>
        <hr className="mt-10" />
      </div>

      <div className="my-6 ">
        <p className="text-xl font-semibold my-8">
          Write down your Secret Recovery Phrase
        </p>
        <p className="font-light text-base my-8">
          Write down this 12-word secret recovery phrase and save it in a place
          that you trust and only you can access.
        </p>
      </div>

      <div className="h-56 rounded-xl border border-black px-8 grid grid-cols-4 gap-6 content-center">
        {secretPhrase.map((word, index) => (
          <input
            key={index}
            type="text"
            className="border-black border-2 p-2 rounded-full bg-[#A66CFF] text-center"
            value={inputWords[index]}
            onChange={(event) => handleInputChange(index, event)}
            disabled={!removedIndexes.includes(index)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center my-8">
        <button
          type="button"
          className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default CreateEOAWallet;
