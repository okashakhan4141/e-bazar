import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import styles from './breadcrumb.module.css';

export default function BasicBreadcrumbs(props) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {props.breadcrumbs.map((breadcrumb, index) => (
          <Link key={index} className={styles.link} to={breadcrumb.route}>
            {breadcrumb.name}
          </Link>
        ))}
        <Typography color="text.primary">{props.active}</Typography>
      </Breadcrumbs>
    </div>
  );
}
