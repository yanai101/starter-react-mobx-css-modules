import * as React from "react";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import TopicPage from "../TopicPage";

@observer
export default class TopicsPage extends React.Component<{ match: any }> {      // TODO: any??
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={TopicPage}/>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        );
    }
}
