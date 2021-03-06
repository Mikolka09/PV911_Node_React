class EntityList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }

    onChange(element) {
        this.state[element.target.name] = element.target.value;
    }

    componentDidMount() {
        this.Read();
    }

    Create(item) {
        console.log(item);
        fetch("/api/entities",
            {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(item => {
                const items = this.state.items;
                items.push(item);
                this.setState({
                    isLoaded: true,
                    items: items
                });
            })
            .catch(err => {
                this.setState({error: err})
            });
    }

    Read() {
        console.log("Start get data:");
        fetch("/api/entities")
            .then(response => response.json())
            .then(data => {
                console.log("getData:");
                console.log(data);
                this.setState({
                    isLoaded: true,
                    items: data
                });
            })
            .catch(err => {
                this.setState({error: err})
            });
    }

    Update(item) {
        fetch("/api/entities",
            {
                method: "PUT",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(item => {
                const items = this.state.items;
                items[items.indexOf(el => el._id == item._id)] = item;
                this.setState({
                    isLoaded: true,
                    items: items
                });
            })
            .catch(err => {
                this.setState({error: err})
            });
    }

    Delete(item) {
        const items = this.state.items;
        console.log("Delete: ");
        console.log(item);
        items.splice(items.indexOf(el => el._id == item._id), 1);
        this.setState({
            isLoaded: true,
            items: items
        });
        fetch("/api/entities",
            {
                method: "DELETE",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => {})
            .then(item => {})
            .catch(err => {
                this.setState({error: err})
            });

    }


    render() {
        if (this.state.error) return this.renderError(); // ???????? ???????????? - ???????????? ????
        if (!this.state.isLoaded) return this.renderLoading(); // ????????????????????
        return this.renderData();
    }

    // ?????????? ?????????????????? ?????????????????? ????????????????????
    renderData() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map(entity =>
                            <EntityItem update={this.Update.bind(this)} delete={this.Delete.bind(this)} key={entity._id}
                                        item={entity}></EntityItem>
                        )
                    }
                    <EntityItem create={this.Create.bind(this)} key={"newElement"} item={null}></EntityItem>
                </div>
            </div>
        );
    }

    // ?????????????????? ?? ?????????????????? ????????????????
    renderLoading() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // ?????????????????????? ???????????????????? ?? ?????????????????? ????????????
    renderError() {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }

}