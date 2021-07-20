import React, { useEffect, useState } from 'react';
import { Characters } from '../types/Characters';
import API from '../utils/api';
import Loading from './Loading';
import CharacterCard from './CharacterCard';

const CharacterList = (): JSX.Element => {
   const [characters, setCharacters] = useState<Characters>();
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const getCharacters = async () => {
      setIsLoading(true);
      try {
         const { data } = await API.get<Characters>('/');
         setCharacters(data);
      } catch {
         alert('Something get wrong :S');
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      getCharacters();
      return () => {
         setCharacters({} as Characters);
      };
   }, []);

   return (
      <div>
         <Loading isLoading={isLoading}>
            {characters?.results.map((character) => (
               <CharacterCard key={character.id} character={character} />
            ))}
         </Loading>
      </div>
   );
};

export default CharacterList;
