// Компонент формы <RegForm />

var RegInput = React.createClass({
  render: function() {
    return (
      <input type={this.props.type}
        className="form-control"
        onChange={this.props.onChange}
        value={this.props.value}
        placeholder={this.props.placeholder}
        required />
      )
  }
})

var RegForm = React.createClass({
  getInitialState: function() {
    return {items: [], login: '', password: ''};
  },
  onChangeLogin: function(e) {
    this.setState({login: e.target.value});
  },
  onChangePassword: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {

    // TODO: Где-то здаь будет валидация и отправка данных

    e.preventDefault();
    var newUser = {login: this.state.login, password:this.state.password}
    var nextItems = this.state.items.concat(newUser);
    var nextText = '';
    this.setState({items: nextItems, login: nextText, password:nextText});
    console.log(this.state);
  },
  render: function() {
    return (
      <div className="col-sm-5 reg-form-block">
        <h1 className="text-center">Registration</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <RegInput type="email" onChange={this.onChangeLogin} value={this.state.login} placeholder="your@email.com" />
            <RegInput type="password" onChange={this.onChangePassword} value={this.state.password} placeholder="password" />
            <button type="submit" className="btn btn-primary btn-lg btn-block btn-reg">Registration</button>
          </div>
        </form>
      </div>
    );
  }
});

React.render(<RegForm />, document.getElementById('root'));


