import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ path, component: Component }) {
    const { id } = useSelector(
        state => ({
            id: state.auth.userData.id
        }),
        shallowEqual
    );

    return (
        <Layout>
            <Route
                exact
                path={path}
                render={() => (id ? <Component /> : <Redirect to={'/login'} />)}
            />
        </Layout>
    );
};