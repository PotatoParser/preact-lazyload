# preact-lazyload
> Dead simple lazy loading in preact.

### Installation
```
npm i preact-lazyload
```

### Usage
```jsx
import { h } from 'preact';

import LazyLoad from 'preact-lazyload';

const App = () => (
    <button>
        <LazyLoad>Hello World!</LazyLoad>
    </button>
);

render(<App/>, document.body);
```

Looking for lazy loading images? Although `preact-lazyload` supports all elements, it's better to use `preact-lazyimage`

### Multiple elements
```jsx
import { h } from 'preact';

import LazyLoad from 'preact-lazyload';

const App = () => (
    <button>
        <LazyLoad>
            <span>Hello </span>
            <span>World!</span>
        </LazyLoad>
    </button>
);

render(<App/>, document.body);
```

### Images
```jsx
import { h } from 'preact';

import LazyLoad from 'preact-lazyload';

const App = () => (
    <div id="app">
        {
            Array(120).fill("./icon.png").map(img => {
                return (
                    <LazyLoad style={{width: '40px', height: '40px'}}>
                        <img src={img}></img>
                    </LazyLoad>
                );
            })
        }
    </div>
);

render(<App/>, document.body);
```