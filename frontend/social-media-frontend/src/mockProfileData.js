const mockProfile = {
    username: 'art_enthusiast',
    bio: 'A passionate art lover who visits museums around the world.',
    avatarUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79', // Avatar image
    posts: [
      {
        _id: '1',
        user: {
          username: 'art_enthusiast',
        },
        date: '2024-11-20T10:00:00Z',
        text: 'Visited the Modern Art Museum today. The abstract paintings were truly inspiring. 🎨 #ArtLover #MuseumVisit',
      },
      {
        _id: '2',
        user: {
          username: 'art_enthusiast',
        },
        date: '2024-11-19T11:00:00Z',
        text: 'Found an amazing street artist today. Their work is vibrant and full of life. 🎨 #StreetArt #UrbanArt',
      },
    ],
  };
  
  export default mockProfile;
  