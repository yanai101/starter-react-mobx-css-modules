import * as React from "react";
import {observer} from "mobx-react";

@observer
export default class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    About Page
                </h2>
            </div>
        );
    }
}
