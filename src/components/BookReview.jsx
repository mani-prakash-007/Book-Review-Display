import React, { useState, useRef } from "react";
import { IoStar } from "react-icons/io5";

export const BookReview = (props) => {
  //Reference
  const textAreaRef = useRef();
  //State
  const [review, setReview] = useState(props.bookReview);
  const [editReview, setEditReview] = useState(false);
  const [buttonFunctionality, setButtonFunctionality] = useState("Edit Review");
  //Handle Function
  const handleClick = () => {
    const textAreaValue = textAreaRef.current ? textAreaRef.current.value : "";
    if (!editReview) {
      setButtonFunctionality("Confirm");
      setEditReview(true);
    } else {
      if (textAreaValue.length < 20) {
        alert("Enter a Review more than 20 characters...");
      } else {
        setReview(textAreaValue);
        setEditReview(false);
        setButtonFunctionality("Edit Review");
      }
    }
  };
  return (
    <div className="border border-black w-96 min-h-80 rounded-2xl my-10">
      <h1 className="font-bold text-xl py-5 text-center">{props.bookName}</h1>
      <div className="my-3">
        <h1 className=" font-bold mx-4 px-3">Author</h1>
        <p className="font-semibold italic mx-16 px-3">{props.bookAuthor}</p>
      </div>
      <div className="my-3">
        <h1 className=" font-bold mx-4 px-3">Rating</h1>
        <p className="font-semibold italic mx-16 px-3">
          <div className="flex">
            {Array.from({ length: props.bookRating }).map((_, index) => {
              return <IoStar key={index} />;
            })}
          </div>
        </p>
      </div>
      <div className="my-3">
        <h1 className=" font-bold mx-4 px-3">Review</h1>
        {!editReview ? (
          <>
            <p className="font-semibold italic mx-16 px-3">{review}</p>
          </>
        ) : (
          <>
            <textarea
              className="border border-black font-semibold italic mx-16 p-3 h-40 w-60 my-5"
              placeholder="Enter your Review"
              ref={textAreaRef}
            ></textarea>
          </>
        )}
      </div>{" "}
      <div className="flex justify-center">
        <button
          type="button"
          className="border border-black my-5 px-3 py-2 rounded-3xl font-bold hover:text-white hover:bg-black active:scale-95"
          onClick={handleClick}
        >
          {buttonFunctionality}
        </button>
      </div>
    </div>
  );
};
