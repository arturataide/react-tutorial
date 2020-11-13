import React, {ReactElement} from 'react';

class About extends React.Component<any, any> {

    render(): ReactElement {
        return (
            <div>
                <h1 className="font-bold text-2xl mb-3">About</h1>
                <p>This is the about page</p>
            </div>
        );
    }
}

export default About;
