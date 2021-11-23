# ACM ISEC 2022 Workshop - Changing phases of Software Engineering with the generations

The Workshop would focus on how the Software Engineering transformation is happening and will happen in next years. It will also provide information for Academia and Students to understand where they should have their students to focus on more to build the next generation of Engineers who can build such Software in future.

## Scripts to run the project

### `npm install`

Downloads all the required dependencies specified in the package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Script for deployment

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Customizing the project

The content of the project is driven by the data in `translation.js` present in the folder `src/translation`.

Each section in the translation file corresponds to the different parts in the project.

- headband -> Headband (Title, button)
- tabs -> Tabs (About the program, Target audience, etc)
- about -> Abstract
- program -> About the program
- target -> Target audience
- topic -> Topics of interest
- schedule -> Schedule
- connect -> Connect with us
- contact -> Questions, Suggestions, Concerns?

For the Connect with us customisation, all the images need to be added at `src/assets/connect` and the image name should be mapped with the `img` property of the corresponding person in the `connect` section of the translation.js.