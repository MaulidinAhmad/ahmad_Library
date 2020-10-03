import React from "react";
import Book from "../components/Book";
import { books } from "../dummyData/bookData";
import Title from "../components/Title";

function Library(props) {
  return (
    <div className="container">
      <div className="">
        {/* Library */}
        <Title name="My Library" />
      </div>
      {/* card */}
      <div className="grid grid-cols-4 gap-0">
        {books.map((book, index) => (
          <Book
            key={index}
            data={{
              id: book.id,
              img: book.img,
              title: book.title,
              writer: book.writer,
            }}
          ></Book>
        ))}
      </div>
    </div>
  );
}

export default Library;
