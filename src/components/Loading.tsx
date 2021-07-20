import React from 'react';

interface ILoadingProps {
   isLoading: boolean;
}

const Loading: React.FC<ILoadingProps> = (props) => {
   const { isLoading, children } = props;

   if (isLoading) <h2>Loading...</h2>;

   return <>{children}</>;
};

export default Loading;
