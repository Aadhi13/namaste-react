import React from "react";
import { createRoot } from "react-dom/client";

const HeadingComponent = () => {
	return <h1>Namste React functional Component</h1>;
};

const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);