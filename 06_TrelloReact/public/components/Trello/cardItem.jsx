class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            item: props.item
        };
    }

    onChange (element){
        const item = this.state.item;
        item[element.target.name] = element.target.value;
        this.setState({item: item});
    }

    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        if(this.state.isEdit) return this.renderForm();
        if(this.state.item == null) return this.renderNewElement();
        return this.renderData();
    }

    openEditForm (){
        this.oldItem = JSON.stringify(this.state.item);
        if ( this.state.item == null) // Если у меня создание нового - то делаю чистый
        {
            this.state.item = new Object();
            this.state.item.name = "";
        }
        this.setState({isEdit: true});
    }

    cancelEditForm(){
        this.setState({
            isEdit: false,
            item:JSON.parse(this.oldItem)
        });
        delete this.oldItem;
    }

    saveEditForm(){
        if (this.props.create) {
            this.props.create(this.state.item);
            this.state.item = null;
        }
        else
            this.props.update(this.state.item);

        this.setState({
            isEdit:false
        });
        delete this.oldItem;
    }

    renderForm(){
        return(
            <div className="card col-6 text-center" key="CreateNewElement">
                <div className="card-body">
                    <input name="_id" type="hidden" value={this.state.item._id}/>
                    <input name="name" type="text"
                           value={this.state.item.name}
                           onChange={this.onChange.bind(this)}/>
                    <hr/>
                    <p>
                        <input type="button" className="btn btn-danger mx-1 btn-sm" value="Cancel"
                               onClick={this.cancelEditForm.bind(this)}/>
                        <input type="button" className="btn btn-primary btn-sm my-1" value="Save"
                               onClick={this.saveEditForm.bind(this)}/>
                    </p>
                </div>
            </div>
        );
    }

    // Предложить созать форму
    renderNewElement(){
        return (
            <div className="card col-6 text-center" key="CreateNewElement">
                <div className="card-body" onClick={this.openEditForm.bind(this)}>
                    <a className="btn btn-primary btn-sm">Add</a>
                </div>
            </div>
        );
    }

    delete(){
        this.props.delete(this.props.item)
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
            <div className="card col-6 text-center">
                <div className="card-body">
                    {this.state.item.name}
                    <hr/>
                    <p>
                        <input type="button" className="btn btn-success btn-sm mx-1" value="edit"
                               onClick={this.openEditForm.bind(this)}/>
                        <input type="button" className="btn btn-danger btn-sm my-1" value="delete"
                               onClick={this.delete.bind(this)}/>
                    </p>
                </div>
            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
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