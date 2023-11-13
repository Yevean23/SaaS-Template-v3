import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRouter';

export default function RouterComponent() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={<LoginPage />} />
                    <Route path="/signup" component={<LoginPage />} />
                    <PrivateRoute path="/profile" component={<ProfilePage />} />
                    <PrivateRoute path="/projects" component={<ProjectsPage />} />
                    <Route path="/projects">
                        <PrivateRoute path=":projectId" component={<ProjectLayout />} />
                        <PrivateRoute path=":projectId/edit" component={<ProjectLayout />} />
                        <PrivateRoute path="/add" component={<ProjectLayout />} />
                    </Route>
                    <PrivateRoute path="/" component={<ProjectsPage />} />
                    <Route component={<LoginPage />} />
                </Switch>
            </BrowserRouter>
        </>
    );
}