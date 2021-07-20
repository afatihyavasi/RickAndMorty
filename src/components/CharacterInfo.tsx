import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Result } from '../types/Characters';
import API from '../utils/api';
import Loading from './Loading';
import CharacterCard from './CharacterCard';

type ParamsType = {
   id: string;
};

const CharacterInfo = (): JSX.Element => {
   const [character, setCharacter] = useState<Result>();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { id } = useParams<ParamsType>();
   const history = useHistory();

   const getCharacters = async () => {
      setIsLoading(true);
      try {
         const { data } = await API.get<Result>(`${id}`);
         setCharacter(data);
      } catch {
         alert('Something get wrong :S');
      } finally {
         setIsLoading(false);
      }
   };

   const handleClick = () => {
      history.push('/');
   };

   useEffect(() => {
      getCharacters();
   }, [id]);

   return (
      <Loading isLoading={isLoading}>
         <button onClick={handleClick}>Back to home</button>
         {character && (
            <CharacterCard character={character} key={character.id} />
         )}
      </Loading>
   );
};

export default CharacterInfo;
