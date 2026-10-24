##React ALL Learning Stuff Note:

#updating setter function:
- you can update the setter function in two ways
-way1 : setState(newValue);
-way2 : using the callback function-> setState(preState)=> return newState=[{...preState},newValue]

- react provides the current state in preState


#useReducer
-It helps you to manage all related state in a function is called reducer.
-reducer function hold the state updating & the logic all at one place

-when you need to update related state use 'useReducer' otherwise 'useState'

- syntax:
- const [state, dispatch]=useReducer(reducer, initialState)
- function reducer(state, action){
    switch(action.type){
        case "1":{

        }
    }
}

- when you need to update the state called the dispatch with value like : <button onClick=()=>dispatch('1')>

- dispatch called the reducer function with action.type=1 & current state in state


