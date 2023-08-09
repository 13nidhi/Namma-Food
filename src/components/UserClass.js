import React from "react"; 

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
              login: "Dummy",
              type: "Default",
              avatar_url: "http://dump-photo.com"
            }
          }
        //console.log(props);
        //console.log(this.props.name + "child constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/13nidhi");
        const json = await data.json();
    
        this.setState({
          userInfo: json,
        })
        console.log(json);
      }
      componentDidUpdate() {
        console.log("component did update");
      }

      componentWillUnmount() {
        console.log("component will unmount");
      }

    render() {
        //console.log(this.props.name+"child render");
        const {login, type,avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
            <img src={avatar_url} alt={""} style={{height: "200px"}}/>
            <h2>Name: {login}</h2>
            <h3>Location: {type}</h3>
            <h4>Contact: @Nidhi</h4>
        </div>
        )
    }
}

export default UserClass;