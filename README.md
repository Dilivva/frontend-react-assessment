This project was bootstrapped with [ React Vite App](https://github.com/facebook/create-react-app).

### Project setup

Install all dependencies

```bash
npm install
```

run the development server:

```bash
npm run dev
# or
yarn dev
```

- Run the tests

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app.js`. The page auto-updates as you edit the file.

## Additional Information: API Keys

After you start the application, you will need to set up an additional `.env` file to store the required API keys. These API keys are necessary for the application to interact with The Movie Database (TMDb) API and fetch movie information.

### Obtaining API Keys

To obtain the API keys, follow these steps:

1. Visit the TMDb website at [https://developer.themoviedb.org/reference/intro/authentication](https://developer.themoviedb.org/reference/intro/authentication).
2. Register for an account or log in if you already have one.
3. Once logged in, you can access your API keys from the developer dashboard.

### .env File Setup

Create a `.env` file at the root folder of your project and add the following content:

```bash
VITE_APP_TMBD_TOKEN=YOUR_API_TOKEN_HERE
VITE_APP_TMBD_API_KEY=YOUR_API_KEY_HERE
```

## Project name

Send 24 Movie App

### Project technologies

- React.js
- Tailwind CSS
- Redux-toolkit
- scss
- TMBD (Movies API)
- ESLint

### Project structure explanation

- `root folder` - The main folder of the project, contains all the code of the project.
  - `pages` - Contains all the pages of the project.
  - `components` - Contains all the components of the project.
  - `store` - store.js (File for setting up the Redux store) - homeSlice.js (Redux slice for the home-related state management)
  - `hooks` - Contains useFetch for API.
  - `tailwind.config.js` - Contains all the styles of the project.
- `public` - Contains all the public files of the project.

### Project deployment

- Deploy the project to Vercel

```bash
npm run deploy
```

### Project Live link

## Author

- Ekunola Paul
