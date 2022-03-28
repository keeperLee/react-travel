import React from 'react';
import styles from "./App.module.css";
// import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import logo from "./assets/images/logo.svg"
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
    robotGallery: any[];
    count:number;
}

class App extends React.Component<Props, State>{

    // *生命周期第一阶段：初始化
    // 初始化组件 state
    constructor(props) {
        super(props);
        this.state = {
            robotGallery:[],
            count:0
        }
    }

    //在组件创建好DOM元素后、挂载进页面的时候调用
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data=>this.setState({robotGallery:data}))
    }

    // *生命周期第二阶段：更新
    // 组件更新后调用
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    }

    // *生命周期第三阶段：销毁
    componentWillUnmount() {
    }

    render(){
       return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo"/>
                    <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
                </div>
                <button onClick={()=>{
                    this.setState((preState,preProps)=>{
                        return {count:preState.count + 1}
                    },()=>{
                        console.log("count",this.state.count)
                    })

                    this.setState((preState,preProps)=>{
                        return {count:preState.count + 1}
                    },()=>{
                        console.log("count",this.state.count)
                    })
                }}>Click</button>
                <span>count:{this.state.count}</span>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {
                        this.state.robotGallery.map((r) => (
                            <Robot id={r.id} name={r.name} email={r.email}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
