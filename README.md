Internal functions used by ansaar.in

## Publishing to npm repository

Go to https://www.npmjs.com/ and check if there is an existing npm package with the same name as in the `package.json` file's `name` attribute.

If confirming that your package name is available, run `npm push` to publish the package to npm repository.

## Installation
 
 - Install in your project using `npm i generic-ts-utils --save`

## Available functions / API

**GenerateLink**
Generates the shareable link for the stock details page on ansaar.in
- *@param* `instrument` object with properties: `Name`, `BSECode`, `NSECode` & `Halal`


**getMonthFromDate()**
Gets the month from the date parameter
- *@param* `date` the date from which month is to be extracted

**isInCurrentMonth()**
Find if the date is in the current month
- *@param* `date` the date value

## Contributions welcome!

[Open a new PR](https://github.com/ansaar-in/generic-ts-utils/pulls) here on GitHub.

## Run locally
- Run `git clone https://github.com/ansaar-in/generic-ts-utils.git` this project
- Run `cd generic-ts-utils/` to this project
- Run `npm run dev` to start the project on local machine

## Bugs and Issues

Have a bug or an issue? [Open a new issue](https://github.com/ansaar-in/generic-ts-utils/issues) here on GitHub.

## License

Code licensed under [MIT](https://opensource.org/licenses/MIT). Everything else is [CC](http://creativecommons.org/)

## Follow us

* [twitter.com/nordiblehq](https://twitter.com/nordiblehq)
* [fb.com/nordible](https://www.facebook.com/nordible)

&copy; [nordible](https://nordible.com/)
