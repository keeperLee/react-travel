import React, {useContext} from "react";
import {appSetStateContext} from "../AppState";
import {RobotProps} from "./Robot";
//高阶函数一般是用with开头
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
    return (props) => {
        const setState = useContext(appSetStateContext)
        const addToCart = (id, name) => {
            if (setState) {
                setState(state => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [
                                ...state.shoppingCart.items, {id, name}
                            ]
                        }
                    }
                })
            }
        }
        return <ChildComponent {...props} addToCart={addToCart}/>
    }
}