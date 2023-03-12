import { useEffect, useReducer } from "react";
import Button from "../components/Button";
import Panel from '../components/Panel'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'
const CHANGE_VALUE_TO_ADD = 'change-value-to-add'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            return state

    }


}
function CounterPage({ initialCount }) {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    useEffect(() => {
        console.log(state.count)
    }, [state.count])

    const increment = () => {
        dispatch({
            type: INCREMENT
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch(
            {
                type: CHANGE_VALUE_TO_ADD,
                payload: value
            }
        )
    }

    const handleSubmit = (event) => {
        dispatch(
            {
                type: ADD_VALUE_TO_COUNT,
            }
        )
    }
    return (
        <Panel>
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button rounded success onClick={increment}>
                    Increment
                </Button>
                <Button rounded danger onClick={decrement}>
                    Decrement
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button rounded primary>
                    Add it!
                </Button>
            </form>

        </Panel>
    )

}
export default CounterPage