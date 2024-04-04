import React from "react";
import { createRoot } from "react-dom/client";

const TitleComponent = () => (
	<h1 className="title">
		Namste React Title.
	</h1>
);

const HeadingComponent = () => (
	<>
		<TitleComponent />
		<h1>Namste React Functional Component</h1>
	</>
);

const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);