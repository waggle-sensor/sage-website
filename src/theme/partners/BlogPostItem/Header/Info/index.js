import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogPostItemHeaderInfo({className}) {
  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      {/* ignore usual blog header stuff */}
    </div>
  );
}
