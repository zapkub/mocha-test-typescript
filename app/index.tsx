import * as React from 'react';
import { SmilyButton } from './components/SmilyButton';


export default class App extends React.Component<{}, {}>{ 
    render() {
        return (
            <div>
                {
                    `Hello world`
                }
                <SmilyButton />
            </div>
        )
    }
}

