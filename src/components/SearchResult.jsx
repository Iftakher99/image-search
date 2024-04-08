import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const SearchResult = ({ term }) => {
  const [images, setImages] = useState([]);
  const apiUrl = `https://api.unsplash.com/search/photos`;
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?query=${term}?count=10&client_id=FvQPgBF3wEeVtCzJZrhRHgZTQjsmahIqBKbOtdXyGCI`,
          {
            headers: {
              Authorization: `WJaTKUJM8VzWvBAMy6ImKa_1x79PaJPoKY8l5Kve6Dc`,
            },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    if (term) {
      fetchImage();
    }
  }, [apiUrl, term]);

  console.log(images);
  return (
    <div>
      <h2>Search Result for: {term}</h2>
      <div className="grid">
        {images.map((image) => (
          <img
            className="cell"
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
