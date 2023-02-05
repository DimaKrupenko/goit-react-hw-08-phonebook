import { NavLink } from 'react-router-dom';
import css from './Home.module.css';


const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};

export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Нello, welcome to the phone book <br />
                <div>
                    <NavLink className={css.reg} to="/register">
                        Register
                    </NavLink>
                    <NavLink className={css.reg} to="/login">
                        Log In
                    </NavLink>
                </div>
            </h1>
        </div>
    );
}
