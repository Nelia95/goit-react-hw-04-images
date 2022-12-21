import { SearchBar } from './Searchbar/Searchbar';
import { fetchPictureByHits } from '../api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Spinner } from './Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchPictureByHits(query, page)
        .then(images => {
          console.log(images);
          setImages(prevImages => [...prevImages, ...images]);
        })
        // .catch(() => setError(true), setIsLoading(false))
        .finally(() => setIsLoading(false));
    }
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {isLoading && <Spinner />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <Button onClick={handleLoadMore} />
        </>
      )}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     images: [],
//     query: '',
//     isLoading: false,
//     error: null,
//     page: 1,
//   };

//   componentDidUpdate(_, prevState) {
//     const { query: currentQuery, page: currentPage } = this.state;
//     const { query: prevQuery, page: prevPage } = prevState;

//     if (prevQuery !== currentQuery || prevPage !== currentPage) {
//       this.setState({ isLoading: true });
//       fetchPictureByHits(currentQuery, currentPage)
//         .then(images => {
//           console.log(images);
//           this.setState(prevState => ({
//             images: [...prevState.images, ...images],
//           }));
//         })
//         .catch(error =>
//           this.setState({ error: error.message, isLoading: false })
//         )
//         .finally(() => this.setState({ isLoading: false }));
//     }
//   }
//   handleFormSubmit = query => {
//     this.setState({
//       query,
//       images: [],
//       page: 1,
//     });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         {this.state.isLoading && <Spinner />}
//         {this.state.images.length > 0 && (
//           <>
//             <ImageGallery images={this.state.images} />
//             <Button onClick={this.handleLoadMore} />
//           </>
//         )}
//       </div>
//     );
//   }
// }
