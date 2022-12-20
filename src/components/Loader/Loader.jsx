import { MagnifyingGlass } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Spinner = () => {
  return (
    <div className={style.Loader}>
      <MagnifyingGlass
        visible={true}
        height={80}
        width={80}
        timeout={3000}
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          margin: '0 auto',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="blue"
      />
      ;
    </div>
  );
};
