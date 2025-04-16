// All 12.9 assignments

// Exercise 1 Named Exports and Imports
// inventory.mjs
const items = [];

export const addItem = (item) =>
{
	items.push(item);
	console.log(`Item added: ${item}`);
};
export const removeItem = (item) =>
{
	let isRemoved = false;

	for (let i = 0; i < items.length; i++)
	{
		if (items[i] === item)
		{
			isRemoved = true;
			items.splice(i, 1);
			i--;
		}
	}

	if (isRemoved)
	{
		console.log(`Item removed: ${item}`);
	}
	else
	{
		console.log(`Item not exist: ${item}`);
	}
};
export const listItems = () =>
{
	console.log(`Listing all items:`);

	for (const item of items)
	{
		console.log(`* ${item}`);
	}
};



// storemanager.mjs
import {addItem, removeItem, listItems} from "./inventory.mjs";

addItem("Book");
addItem("Pen");
addItem("Pencil");
listItems();

removeItem("Pen");
listItems();

// Exercise 2 - Default Export and Import

// post.mjs
export default class Post
{
	constructor (title, content)
	{
		this.title = title;
		this.content = content;
	}

	publish ()
	{
		console.log(`Publishing post: ${this.title}`);
	}
}

// blog.mjs
import Post from "./Post.mjs";

const myPost = new Post("Hello World", "This is my first post.");
myPost.publish();


// Exercise 3 - Re-exporting Modules
// app.mjs
import {capitalize, square} from "./utils/index.mjs";

console.log(capitalize("hello"));
console.log(square(4));

// index.mjs
export * from './stringUtils.mjs';
export * from './numberUtils.mjs';

// numberUtils.mjs
export const square = (n) => n * n;

// stringUtils.mjs
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Exercise 4 - Dynamic Imports
// appTwo.js
async function loadConfig ()
{
	const themeModule = await import("./theme.mjs");

	const currentHour = new Date().getHours();

	if (currentHour < 18)
	{
		themeModule.setLightTheme();
	}
	else
	{
		themeModule.setDarkTheme();
	}
}
loadConfig();

// theme.mjs
let theme = null;

export const setLightTheme = () =>
{
	console.log("Setting light theme.");
	theme = "light";
};

export const setDarkTheme = () =>
{
	console.log("Setting dark theme.");
	theme = "dark";
};

// Exercise 5
// appThree.mjs
import './globalConfig.mjs';

// globalConfig.mjs
console.log("Welcome to the application! Initializing...");