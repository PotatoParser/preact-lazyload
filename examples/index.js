import 'preact/debug';

import { h, render } from 'preact';

import './style';

import LazyLoad from '../index.js';

const App = () => (
    <Fragment>
        <h1>Single Element</h1>
        <button>
            <LazyLoad>Hello World!</LazyLoad>
        </button>
        <h1>Multiple Elements</h1>
        <button>
            <LazyLoad><span>Hello </span><span>World!</span></LazyLoad>
        </button>
        <h1>Images</h1>
        {
            Array(120).fill("./icon.png").map(img => {
                return (
                    <LazyLoad style={{width: '40px', height: '40px'}}><img src={img}></img></LazyLoad>
                );
            })
        }
    </Fragment>
);

export default App;