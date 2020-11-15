import React from 'react';
import {CharacterEntity} from '../Entities/Character.entity';
import {Link} from 'react-router-dom';

type ICharacterProps = {
    character: CharacterEntity;
}
const CharacterItem: React.FC<ICharacterProps> = ({character}: ICharacterProps): React.ReactElement => {

    return (
        <div className="m-4 cursor-pointer border-1 shadow p-4 w-2/12 bg-white">
            <Link to={`/characters/${character.id}`}>
                <div className="flex overflow-hidden items-center">
                    <img className="inline-block h-10 w-10 rounded-full text-white shadow-solid"
                         src={character.image}
                         alt="">
                    </img>
                    <span className="px-3 text-gray-800">{character.name}</span>
                </div>
                <p className="text-sm text-gray-500">{character.species} - {character.origin.name}</p>
            </Link>
        </div>
    )

}

export default CharacterItem;


