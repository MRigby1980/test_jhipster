import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Students from './students';


const Routes = ({ match }) => (
    <div>
        <ErrorBoundaryRoute path={`${match.url}/students`} component={Students} />
    </div>
);

export default Routes;
