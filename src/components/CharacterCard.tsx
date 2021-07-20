import React from 'react';
import { Result } from '../types/Characters';

interface ICharacterCardType {
   character: Result;
}

const CharacterCard: React.FC<ICharacterCardType> = (props) => {
   const { character } = props;

   return (
      <div>
         <h2> {character.name}</h2>
         <figure>
            <img
               src={character.image}
               alt={character.name}
               width={100}
               height={100}
            />
         </figure>
         <hr />
      </div>
   );
};

export default CharacterCard;
