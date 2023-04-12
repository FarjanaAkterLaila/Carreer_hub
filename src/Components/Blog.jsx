import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='bg-light text-center pb-5'>Blog page</h1>
            <h1 className='d-flex justify-content-center'>Some Question Answer</h1>
            <div className='border border-info bg-primary bg-opacity-10'>
                <h2>1.When should you use context API?</h2>
                <h5>Answer:<br></br>
                we should use the Context API in React when we need to share data or state between multiple components that are nested within a hierarchy, or when we have global state that needs to be accessed and updated by multiple components.<br></br>
                </h5>
            </div>
            <div className='border border-info bg-primary bg-opacity-10 mt-2'> 
            <h2>2.What is a custom hook?
                </h2>
                <h5>Answer:<br></br>
                Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
                </h5>
                </div>
           
            <div className='border border-info bg-primary bg-opacity-10 mt-2'>
                <h2>3.What is useRef?</h2>
                <h5>Answer:<br></br>
                A hook is a unique function that makes it possible to leverage state and other React capabilities without having to write ES6 class components, which are typically thought of as being challenging to comprehend, use, and master.
                The React Hooks API includes the useRef hook. It is a function that only accepts one argument at most and outputs an Object. The argument supplied to useRef is the value of the current property on the returned object.
                </h5>
                </div>
            <div className='border border-info bg-primary bg-opacity-10 mt-2'>
                <h2>4.What is useMemo?</h2>
                <h5>Answer:<br></br>
                UseMemo is a hook in React that enables you to memoize pricey function calls so that they are only recalculated when required. By minimizing pointless re-renders, this can enhance the performance of your program.</h5>
                </div>
        </div>
    );
};

export default Blog;