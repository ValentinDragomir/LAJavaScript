class Welcome extends React.Component {
    render() {
        return (
            <h1>
                { this.params.sayHello
                    ? <div>Hello, { this.params.name }!</div>
                    : <div>Goodbye!</div>
                } 
                <div>{ new Date().toISOString() }</div>
                <a href={ this.params.uri } className="highlight">Learn more about React</a>
            </h1>
        )
    }
}

const App = function() {
    return (
        <Welcome sayHello={true} uri="https://reactjs.org" name="Valentin"/>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)