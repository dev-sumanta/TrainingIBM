import React, {lazy, Suspense} from 'react';

export default class LazyLoading extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }

        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 5000);
    }

    render() {
        let LazyComponent = null;
        LazyComponent = lazy(() => import("./lazyComponent"))
        return (
            <div>
                <Suspense fallback={<div>Loading..</div>}>
                    <LazyComponent />
                </Suspense>
                <div>This is Main Component...</div>
            </div>
        )
    }
}

