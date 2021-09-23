class Children extends React.Component {

    constructor(props) {
        super(props);
        console.log("Children - constructor");
        this.state = {
            isShowChildren: props.isShowChildren,
            isLoaded: false,
            error: null,
            items: []
        };
    }


    componentDidMount() {
        console.log("Children - componentDidMount");
    }

    componentWillUnmount() {
        console.log("Children - componentWillUnmount");
    }

    componentDidUpdate() {
        console.log("Children - componentDidUpdate");
    }

    toggleShowChildren(element) {
        this.props.actionChange();
    }

    //Компонент будет создан но не будет отображаться
    render_null() {
        return null
    }

    render() {
        console.log("Children - render");
        return (
            <div>
                <h2>Children: {this.props.someVar}</h2>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           onChange={this.toggleShowChildren.bind(this)}
                           type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Hidden</label>
                </div>
            </div>
        )
    }


}