import React, { lazy, Suspense } from 'react';

export default class LazyComponent extends React.Component {
    render() {
        var NewComponent = lazy(() => import("./lazyElementFolder/LazyElement"))
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div>Hello World</div>
                <NewComponent></NewComponent>
            </Suspense>
        )
    }
}