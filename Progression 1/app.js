
// ReactDOM.render("Hello! I am React via CDN.", container);
//render("WHAT TO RENDER" , "WHERE TO RENDER");

//Functional Component
// const Container = () => {
//     return React.createElement(`div`, null, `Hey Kalvians! Welcome to React Learning!`, 
//     React.createElement(`div`,null, `Let's rock and roll`)    
//     );
    
// }

// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container), container);

//Class Component
class ReactContainer extends React.Component{
    //Constructor Here

    render(){
        return React.createElement(`div`, null, `Hey Kalvians! Welcome to React Learning!`, 
        React.createElement(`div`,null, `Let's rock and roll`));
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(ReactContainer), container);
