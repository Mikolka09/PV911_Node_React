class CheckInput extends React.Component {
    constructor(props) {
        super(props); //props - неизменные данные для компонента
        console.log("Процесс конструирование компонетна");
        this.state = {
            isKeyPressMonitor: true,
            userText: ""
        }; //state - динамические данные для компонента
    }

    onChange(element){
        this.state[element.target.name] = element.target.value;
        this.setState({isKeyPressMonitor: !this.state.isKeyPressMonitor});
    }

    render() {
        console.log("Процесс отрисовки компонента");
        return (
            <div>
                <input type="text" name="userText"
                onChange={this.onChange.bind(this)}/>
                <div>{this.state.userText}</div>
            </div>
        );
    }
}