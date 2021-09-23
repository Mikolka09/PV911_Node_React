class Template extends React.Component {

    constructor(props) {
        super(props);
        console.log("Template - constructor");
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }


    componentDidMount() {
        console.log("Template - componentDidMount");
    }

    componentWillUnmount(){
        console.log("Template - componentWillUnmount");
    }

    componentDidUpdate(){
        console.log("Template - componentDidUpdate");
    }

    onChange(element){
        this.state[element.target.name] = element.target.value;
    }

    render(){
        console.log("Template - render");
        return (
            <div>

            </div>
        )
    }

    // Вывод основного состояния компонента
    renderData(){
        let key = 1;
        return (
            <div>

            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }

}