import { BookReview } from "./components/BookReview";
function App() {
  //Book Details
  const bookDetails = [
    {
      bookName: "The Psychology of Money",
      bookAuthor: "Morgan Housel",
      bookRating: 5,
      bookReview:
        "The Psychology of Money by Morgan Housel is a compelling read that emphasizes how achieving wealth isn’t solely about intelligence; it’s largely influenced by our behavior. Housel shares 19 short stories that explore people’s unique perspectives on money, teaching readers to make better financial decisions. Whether you’re a seasoned investor or just starting out, this book provides timeless lessons on wealth, greed, and happiness.",
    },
    {
      bookName: "Atomic Habits",
      bookAuthor: "James Clear",
      bookRating: 5,
      bookReview:
        "Atomic Habits by James Clear offers a practical guide to building good habits and breaking bad ones. Clear’s strategies are grounded in psychology and behavioral science, making it easier to understand how small changes can lead to significant improvements in your life.",
    },
    {
      bookName: "Sapiens: A Brief History of Humankind",
      bookAuthor: "Yuval Noah Harari",
      bookRating: 5,
      bookReview:
        "Sapiens by Yuval Noah Harari takes readers on a journey through the history of our species, from the emergence of Homo sapiens in Africa to the modern era. Harari’s exploration of how biology and history have defined our societies and behaviors is thought-provoking and insightful.",
    },
    {
      bookName: "Educated",
      bookAuthor: "Tara Westover",
      bookRating: 4,
      bookReview:
        "Educated is a memoir by Tara Westover that tells the story of her life growing up in a strict and abusive household in rural Idaho and her journey to self-education. Westover's resilience and determination to escape her oppressive environment and pursue an education are truly inspiring.",
    },
    {
      bookName: "The Subtle Art of Not Giving a F*ck",
      bookAuthor: "Mark Manson",
      bookRating: 4,
      bookReview:
        "The Subtle Art of Not Giving a F*ck by Mark Manson is a counterintuitive approach to living a good life. Manson argues that the key to happiness is to care less about what doesn’t matter and focus on what truly does. His blunt and humorous style makes this book an engaging and eye-opening read.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl bg-black text-white py-4 text-center">
          Book Review
        </h1>
        <div className="flex justify-evenly my-5 flex-wrap">
          {bookDetails.map((data, index) => {
            const bookName = data[Object.keys(data)[0]];
            const bookAuthor = data[Object.keys(data)[1]];
            const bookRating = data[Object.keys(data)[2]];
            const bookReview = data[Object.keys(data)[3]];

            return (
              <BookReview
                bookName={bookName}
                bookAuthor={bookAuthor}
                bookRating={bookRating}
                bookReview={bookReview}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
