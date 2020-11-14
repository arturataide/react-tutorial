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
            <div>
                {this.props.character.name}
            </div>
        )
    }
}

export default CharacterItem;
