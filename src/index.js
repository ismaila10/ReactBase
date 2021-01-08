import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Ismaila Diallo" },
      { id: 2, nom: "Dany Jean Charles" },
      { id: 3, nom: "Dorain Deguen" }
    ],
    compteur: 0
  };

  handleClick() {
    const clients = this.state.clients.slice();
    clients.push({ id: 4, nom: "Yanis Fetch" });

    this.setState({ clients: clients });
  }

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1> {title} </h1>
        {this.state.compteur}
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        <ul>
          {this.state.clients.map((client) => (
            <li>
              {client.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
