class Counter extends React.Component {
    constructor(props) {
        super(props); //props - неизменные данные для компонента
        console.log("Процесс конструирование компонетна");
        this.state = {
            counter: this.props.startCounter
        }; //state - динамические данные для компонента
    }

    add(){
        this.setState({counter: ++this.state.counter});
    }

    render() {
        console.log("Процесс отрисовки компонента");
        let key = 1;
        return (
            <div>
                <p>Вы нажали {this.state.counter} раз</p>
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}