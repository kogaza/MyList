import	React	from	'react';
import	ReactDOM	from	'react-dom';
document.addEventListener('DOMContentLoaded',function(){

				function App(){
					return (
						<div>
							<AppHeader />
							<main className="ui main text container">
								<ContactList />
							</main>
						</div>
					);
				}

				function AppHeader() {
					return (
						<header className="ui fixed menu">
								<nav className="ui container">
									<a href="#" className="header item">
										<img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
										Lista kontaktów
									</a>
									<div className="header item">
										<button className="ui button">Dodaj</button>
									</div>
								</nav>
							</header>
					);
				}

				function ContactList() {
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

				function ContactItem({ login, name, department}) {
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

				function ShowAvatar({ login }) {
					const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
					return (
						<img src={imgUrl} className="ui mini rounded image" />
					);
				}


				ReactDOM.render(
						<App />,
						document.getElementById('app')
				);
});
