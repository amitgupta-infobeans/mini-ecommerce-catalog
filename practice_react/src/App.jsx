import React from 'react'
// import ReactRouterDomExample from './components/react-router-dom'
// import TodoListComponent from './components/todo_app/TodoListComponent'
// import ContextExampleCompo from './components/context/ContextExampleCompo'
// import ContextProvider from './components/context/GlobalContext'
// import UseReducerHookComponent from './components/useReducer/UseReducerHookComponent'
// import ClassBasedComponent from './components/class-based-component/classBasedComponent'
// import styles from "./App.module.css"
// import ReactFormHook from './components/react-hook-form/ReactFormHook'
// import useWindowSize from './components/custom-hook/use.windowSize'
import CustomRoutes from './components/custom-hook/CustomRoutes'


function App() {

  // const windowSize = useWindowSize();

  return <>
    <div className='mt-5 flex flex-col justify-center items-center'>
      {/* <h1 className='text-center  m-2 text-2xl underline'>React with Example</h1> */}
      {/* <ReactFormHook /> */}
      {/* <ClassBasedComponent /> */}

      {/* =============Context Example=========== */}
      {/* <ContextProvider>
        <ContextExampleCompo />a
      </ContextProvider> */}

      {/* -====useReducer hook===== */}
      {/* <UseReducerHookComponent /> */}

      {/* =====ToDo List App====== */}
      {/* <TodoListComponent /> */}

      {/*===== react router dom example===== */}
      {/* <ReactRouterDomExample /> */}
      {/* <Link className='p-2 m-5 bg-black text-white' to="todo-app">Todo App</Link> */}

      {/* -==== custom hook example ===== */}
      {/* <h2>Width is : {windowSize.width}  and Height is : {windowSize.height}</h2> */}

      {/* === custom routes created ====== */}
      <CustomRoutes />

    </div>


  </>


}

export default App
