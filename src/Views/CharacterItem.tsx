import React, {ReactElement} from 'react';
import {CharacterEntity} from '../Entities/Character.entity';

type ICharacterProps = {
    character: CharacterEntity;
}

class CharacterItem extends React.Component<ICharacterProps, any> {
    constructor(props: ICharacterProps) {
        super(props);
    }

    render(): ReactElement {
        return (
            <div className="m-4 cursor-pointer border-1 shadow p-4 w-2/12 inline-block">
                <div className="flex overflow-hidden items-center">
                    <img className="inline-block h-10 w-10 rounded-full text-white shadow-solid"
                         src={this.props.character.image}
                         alt="">
                    </img>
                    <span
                        className="px-3 text-gray-800">{this.props.character.name} <span className="text-sm text-gray-500">{this.props.character.species}</span></span>
                </div>
            </div>
        )
    }
}

export default CharacterItem;
