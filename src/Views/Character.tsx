import React from 'react';
import {CharacterEntity} from '../Entities/Character.entity';
import {withRouter} from 'react-router';

type ICharacterState = {
    id: string
    character?: CharacterEntity
}

type ICharacterProps = {
    match: { params: { id: string } }
}


class Character extends React.Component<ICharacterProps, ICharacterState> {

    state: ICharacterState = {
        id: '',
        character: undefined
    }

    constructor(props: ICharacterProps) {
        super(props);
        this.setState({
            id: this.props.match.params.id
        })
    }


    render(): React.ReactElement {
        const id = this.state.id
        return (
            <div>
                Ola {id}
            </div>
        )
    }

}

export default withRouter(Character);
