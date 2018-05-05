import	React	from	'react';
import	ReactDOM	from	'react-dom';
document.addEventListener('DOMContentLoaded',function(){

				class App extends React.Component {
					constructor() {
						super();
						this.state = {
							counter: 0,
							sumCounter: 0,
							sumDouble: 0,
						};
					}
					
					render() {
						return (
							<div>
								<button onClick={this.increment.bind(this)}>+</button>
								<output onDoubleClick={this.sumDouble.bind(this)}>{this.state.counter}</output>
								<button onClick={this.decrement.bind(this)}>-</button>
								<output onDoubleClick={this.sumDouble.bind(this)}>{this.state.sumCounter}</output>
								<output onDoubleClick={this.sumDouble.bind(this)}>{this.state.sumDouble}</output>
								<AppHeader />
								<main className="ui main text container">
									<ContactList />
									<NameSurname />
									<Parent />
								</main>
							</div>
						);
					}
					increment() {
						this.setState({
							counter: this.state.counter + 1,
							sumCounter: this.state.sumCounter + 1
						})
					}
					decrement() {
						this.setState({
							counter: this.state.counter - 1,
							sumCounter: this.state.sumCounter + 1
						})
					}
					sumDouble() {
						this.setState({
							sumDouble: this.state.sumDouble + 1
						})
					}
				}

				class AppHeader extends React.Component {
					render() {
						return (
							<header className="ui fixed menu">
								<nav className="ui container">
									<a href="#" className="header item">
										<img onMouseEnter={this.mouseEnter} className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
										Lista kontaktów
									</a>
									<div className="header item">
										<button className="ui button">Dodaj</button>
									</div>
								</nav>
							</header>
						);
					}
					mouseEnter() {
						console.log("Najechany");
					}
				}

				class ContactList extends React.Component {
					render() {
						return (
							<ul className="ui relaxed divided list selection">
								<ContactItem 
									login= "typeofweb1"
									name= "Lena"
									department= "JavaScript Developer"
									/>			
								<ContactItem 
									login= "typeofweb2"
									name= "Brian"
									department= "HumanResources"
									/>			
								<ContactItem 
									login= "typeofweb3"
									name= "Rick"
									department= "QA"
									/>			
							</ul>
						);
					}
				}

				class ContactItem extends React.Component {
					render() {
						const { login, name, department } = this.props
						return (
							<li className="item">
								<ShowAvatar login= {login}/>
								<div className="content">
									<h4 className="header">{name}</h4>
									<div className="description">{department}</div>
								</div>
							</li>
						);
					}
				}

				class ShowAvatar extends React.Component {
					render() {
						const { login } = this.props
						const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
						return (
							<img src={imgUrl} className="ui mini rounded image" />
						);
					}
				}

				class NameSurname extends React.Component {
					constructor() {
						super();
						this.state = {
							first: " ",
							last: " "
						};
					}
					firstName(e) {
						this.setState({
							first: e.target.value
						});
					}
					lastName(e) {
						this.setState({
							last: " " + e.target.value
						});
					}
					render() {
						return (
							<form>
								<input type="text" onInput={this.firstName.bind(this)} />
								<input type="text" onInput={this.lastName.bind(this)} />
								<output>{this.state.first}</output>
								<output>{this.state.last}</output>
							</form>
						);
					}
				}

				class Parent extends React.Component {
					constructor(props) {
						super(props);
						this.state = {
							input: null,
							forwardValue: null
						}
					
						this.handleClick = this.handleClick.bind(this);
						this.handleChange = this.handleChange.bind(this);
					}

					handleChange(event) {
						this.setState({
							input: event.target.value
						});
					}

					handleClick() {
						this.setState({
							forwardValue: this.state.input
						});
					}

					render() {
						return (
							<div>
								<input type="number" onChange={this.handleChange} />
								<button onClick={this.handleClick}>Propagate to child</button>
								{this.state.forwardValue && <Child value={this.state.forwardValue} />}
							</div>
						);
					}
				}

				class Child extends React.Component {
					constructor(props) {
						super(props);
						this.state = {
							// fromParent: Number(props.value),
							current: Number(props.value)
						}

						this.handleIncrement = this.handleIncrement.bind(this);
						this.handleDecrement = this.handleDecrement.bind(this);
					}

					componentWillReceiveProps(nextProps) {
						if(nextProps.value != this.state.current) {
							this.setState({
								// fromParent: Number(nextProps.value),
								current: Number(nextProps.value)
							});
						}
					}

					handleIncrement() {
						this.setState({
							current: this.state.current + 1
						})
					}
					
					handleDecrement() {
						this.setState({
							current: this.state.current - 1
						})
					}
					render() {
						return (
							<div>
								<label>{this.state.current}</label>
								<button onClick={this.handleIncrement}>+</button>
								<button onClick={this.handleDecrement}>-</button>
							</div>
						);
					}
				}

				ReactDOM.render(
						<App />,
						document.getElementById('app')
				);
});
