import React from "react";
import { createRoot } from "react-dom/client";
// CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";

// const firstBook = {
// 	img: coverBook,
// 	title: "A Love and Beyond",
// 	author: "Dan Sofer",
// };
// const secondBook = {
// 	img: coverBook2,
// 	title: "Beyond The Shadow",
// 	author: "Anna Hub",
// };

// const names = ["Sheila", "Berlian", "Rival"];
// const newName = names.map((name) => {
// 	console.log(name);
// });

function BookList() {
	return (
		<section>
			{books.map((book, index) => {
				return <Book key={index} {...book} />;
			})}
		</section>
	);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
