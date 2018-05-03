import	React	from	'react';
import	ReactDOM	from	'react-dom';
document.addEventListener('DOMContentLoaded',function(){

				class App extends React.Component {
					constructor() {
						super();
						this.state = {
							counter: 0,
							sumCounter: 0,
							sumDouble: 0
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


				ReactDOM.render(
						<App />,
						document.getElementById('app')
				);
});
