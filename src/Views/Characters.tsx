import React, {ReactElement} from 'react';
import {BaseHttpService, IBaseRequestPayload} from '../Services/BaseHttp.service';
import {CharacterEntity} from '../Entities/Character.entity';
import CharacterItem from './CharacterItem';
import Loader from '../Components/Loader/Loader';

type ICharactersState = {
    characters: Array<CharacterEntity>
}

class Characters extends React.Component<any, ICharactersState> {

    private readonly API_URL = 'character';
    private baseHttpService: BaseHttpService = new BaseHttpService();

    private setCharacters(characters: Array<CharacterEntity>) {
        this.setState({
            characters
        })
    }

    componentDidMount(): void {
        const payload: IBaseRequestPayload = {
            endpoint: this.API_URL,
        }
        this.baseHttpService.getMulti<CharacterEntity>(payload, CharacterEntity).then((characters: Array<CharacterEntity>) => this.setCharacters(characters))
    }

    get charactersList(): JSX.Element | Array<JSX.Element> {
        return this.state ? this.state.characters.map((character: CharacterEntity) => <CharacterItem
            key={character.id}
            character={character}/>) : <Loader/>;

    }

    render(): ReactElement {
        return (
            <div>
                <h1 className="font-bold text-2xl mb-3">Characters</h1>
                <div className="h-full w-full flex flex-wrap justify-center">{this.charactersList}</div>
            </div>
        )
    }
}

export default Characters;
