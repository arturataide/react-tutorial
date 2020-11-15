import React from 'react';
import {CharacterEntity} from '../Entities/Character.entity';
import {withRouter} from 'react-router';
import {BaseHttpService} from '../Services/BaseHttp.service';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Loader from '../Components/Loader/Loader';

type ICharacterState = {
    character?: CharacterEntity
}

type ICharacterProps = {
    match: { params: { id: string } }
}


class Character extends React.Component<ICharacterProps, ICharacterState> {
    private readonly API_URL = 'character';
    private baseHttpService: BaseHttpService = new BaseHttpService();

    state: ICharacterState = {
        character: undefined
    }

    constructor(props: ICharacterProps) {
        super(props);

    }

    componentDidMount(): void {
        const id: string = this.props.match.params.id
        this.baseHttpService.getOne<CharacterEntity>({
            endpoint: this.API_URL,
            id
        }, CharacterEntity).then((character: CharacterEntity) => this.setCharacter(character))
    }

    private setCharacter(character: CharacterEntity): void {
        this.setState({
            character
        })
    }

    get episodes(): JSX.Element {
        const _episodes: Array<JSX.Element> | undefined = this.state.character?.episode.map((episode: string, i: number) => (
            <span key={i}>{episode} </span>))
        return (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                    Episodes
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {_episodes}
                </dd>
            </div>)
    }

    get linkBack(): JSX.Element {
        return (
            <Link to="/characters" className="mb-4 text-teal-800">
                <FontAwesomeIcon icon={faChevronLeft}/>
                &nbsp;&nbsp;Back
            </Link>
        )
    }

    get mainContent(): JSX.Element {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg w-6/12">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="flex overflow-hidden items-center">
                        <img className="inline-block w-2/12 rounded-full text-white shadow-solid m-2 shadow"
                             src={this.state.character?.image}
                             alt=""/>
                        <div className="flex flex-col m-2">
                            <h3 className="text-4xl leading-6 font-medium text-gray-900">
                                {this.state.character?.name}
                            </h3>
                            <p className="mt-1 text-xl max-w-2xl text-sm leading-5 text-gray-500">
                                {this.state.character?.species}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <dl>
                        {Character.getItemContent('Status', this.state.character?.status)}
                        {Character.getItemContent('Gender', this.state.character?.gender)}
                        {Character.getItemContent('Type', this.state.character?.type)}
                        {Character.getItemContent('Species', this.state.character?.species)}
                        {Character.getItemContent('Origin', this.state.character?.origin.name)}
                        {Character.getItemContent('Location', this.state.character?.location.name)}
                        {Character.getItemContent('Created', this.state.character?.created.toDateString())}
                        {Character.getItemContent('URL', this.state.character?.url)}
                        {this.episodes}
                    </dl>
                </div>
            </div>
        )
    }

    render(): React.ReactElement {
        return (
            <React.Fragment>
                {this.linkBack}
                <div className="container flex flex-col items-center">
                    {this.state.character ? this.mainContent : <Loader/>}
                </div>
            </React.Fragment>

        )
    }


    private static getItemContent(title: string, value: string | undefined) {
        return (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                    {title}
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {value ? value : '-'}
                </dd>
            </div>)
    }

}

export default withRouter(Character);
