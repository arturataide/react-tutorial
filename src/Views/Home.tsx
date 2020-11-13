import React, {ReactElement} from 'react';

class Home extends React.Component<any, any> {

    render(): ReactElement {
        return (
            <div>
                <h1 className="font-bold text-2xl mb-3">Home</h1>
                <p>This is the homepage</p>
            </div>
        )
    }
}

export default Home
