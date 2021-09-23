class Parent extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent - constructor");
        this.state = {
            isShowChildren: false,
            isLoaded: false,
            error: null,
            items: []
        };
    }


    componentDidMount() {
        console.log("Parent - componentDidMount");
    }

    componentWillUnmount() {
        console.log("Parent - componentWillUnmount");
    }

    componentDidUpdate() {
        console.log("Parent - componentDidUpdate");
    }

    onChange(element) {
        this.state[element.target.name] = element.target.value;
    }

    toggleShowChildren(element) {
        let old = this.state.isShowChildren;
        this.setState({
            isShowChildren: !old
        });
    }

    render_2vars() {
        console.log("Parent - render");
        // 1-й вариант написать свой рендер и возвращать его
        // пример для загрузки :
        /*
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
         */

        //2-й вариант загрузить в переменную
        let children = "";
        if (this.state.isShowChildren)
            children = <Children></Children>;

        console.log("Parent - render after if isShowChildren");
        return (
            <div>
                <h1>Parent</h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           onChange={this.toggleShowChildren.bind(this)}
                           type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Show Children</label>
                </div>
                {children}
            </div>
        )
    }

    render() {
        console.log("Parent - render");
        // 3-й вариант выполнение кода прямо в return

        return (
            <div>
                <h1>Parent</h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           onChange={this.toggleShowChildren.bind(this)}
                           type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Children</label>
                </div>
                {
                    this.state.isShowChildren &&
                    <Children
                        actionChange={this.toggleShowChildren.bind(this)}
                        isShowChildren={this.state.isShowChildren}
                        someVar={"Children Name"}></Children>
                }
                {this.state.isShowChildren ? "Показать" : "Спрятать"}

            </div>
        )
    }

    // Вывод основного состояния компонента
    renderData() {
        let key = 1;
        return (
            <div>

            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError() {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }

}