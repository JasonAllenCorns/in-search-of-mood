# In Search of Mood

In Search of Mood is a Next.js application that interfaces with the Spotify APIs to provide users with a unique music discovery experience based on their mood.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Integrated with Spotify API to fetch music data.
- User-friendly interface to search and discover music based on mood.
- Real-time music recommendations.
- Personalized playlists based on user preferences.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/in-search-of-mood.git
    ```
2. Navigate to the project directory:
    ```sh
    cd in-search-of-mood
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Create a `.env.local` file in the root directory and add your Spotify API credentials:
    ```env
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
    ```
5. Run the development server:
    ```sh
    npm run dev
    ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Authenticate with your Spotify account to access personalized features.
2. Use the search functionality to find music based on mood.
3. Explore personalized playlists and recommendations.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.