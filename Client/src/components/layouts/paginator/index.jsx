import Pagination from '@mui/material/Pagination';
import styles from './paginator.module.css'

const Paginator = props => {

    return <div className={styles.paginator}>
        <Pagination onChange={props.onChange} count={props.count} color="primary" size='large' showFirstButton showLastButton />
    </div>
}

export default Paginator;