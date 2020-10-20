import React from 'react';
import s from './Tags.module.scss';

interface TagsProps {
  list: { title: string; id: string }[];
  deleteTag: (id: string) => void;
}

const Tags = ({ list, deleteTag }: TagsProps): JSX.Element => {
  return (
    <div className={s.tagsList}>
      {list.map(({ title, id }) => (
        <div key={id} className={s.tagItem}>
          <span className={s.tagTitle}>{title}</span>
          <div className={s.closeBtn} onClick={() => deleteTag(id)}></div>
        </div>
      ))}
    </div>
  );
};

export default Tags;
