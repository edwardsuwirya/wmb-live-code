import {createContext} from "react";

export const DepContext = createContext({});

export function DepContextProvider({children, services}) {
    return (
        <DepContext.Provider value={services}>
            {children}
        </DepContext.Provider>
    )
}

export const withDepContextConsumer = (WrappedComponent) => (props) => (
    <DepContext.Consumer>
        {(ctx) => <WrappedComponent service={ctx} {...props}/>}
    </DepContext.Consumer>
)