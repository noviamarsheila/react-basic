import React from "react";

const Book = ({ img, title, author }) => {
	// attribute, eventHandler
	// onClick, onMouseOver
	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert("Hello World!!");
	};
	const complexExample = (author) => {
		console.log(author);
	};

	return (
		<article
			className="--box-booklist"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt="Cover Book" style={{ width: "200px", height: "auto", borderRadius: "12px" }} />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Reference Example
			</button>
			<button type="button" onClick={() => complexExample(author)}>
				More complex example
			</button>
		</article>
	);
};

export default Book;
