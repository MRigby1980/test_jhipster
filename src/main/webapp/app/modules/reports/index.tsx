import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import StudentReport from './studentReport';


const Routes = ({ match }) => (
    <div>
        <ErrorBoundaryRoute exact path={`${match.url}/studentReport`} component={StudentReport} />
    </div>
);

export default Routes;
