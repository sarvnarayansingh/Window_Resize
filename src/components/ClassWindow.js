import React,{Component} from 'react'


class ClassComptWindowResize extends Component{
    constructor(props){
        super();
            this.state = {
                windowWidth: undefined,
                windowHeight: undefined
            }
            this.handleResize = this.handleResize.bind(this);
    }

    handleResize () {
        this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      });
    }
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }

    render() {
        console.log("=======class",this.state)
        return(
          <h1>classComponent</h1>
        )
    }
}

export default ClassComptWindowResize;