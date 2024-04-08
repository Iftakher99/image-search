import { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line react/prop-types
const ShowResult = ({ term }) => {
  const apiURL = 'https://api.unsplash.com/search/photos';
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}?query=${term}?count=10&client_id=FvQPgBF3wEeVtCzJZrhRHgZTQjsmahIqBKbOtdXyGCI`,
          {
            params: {
              per_page: 10,
            },
          },
        );

        setImages(response.data);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchData();
  }, [term]);
  const arr = images.results;
  console.log(arr);
  return (
    <>
      <h2>Search Result for: {term}</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {arr.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                className="max-w-full h-auto rounded-md"
              />
              <p className="mt-2 text-center">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowResult;
