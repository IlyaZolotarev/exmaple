import React, { useState, useRef } from 'react';
import s from './Custom.module.scss';
import Tags from './../../../../../components/tags/Tags';
import TagInput from './components/TagInput';

const Custom = (): JSX.Element => {
  const [isTag, setIsTag] = useState(false);
  const [tempTags, setTempTags] = useState([
    { title: 'Hyundai', id: '1' },
    { title: 'Bentley', id: '2' },
    { title: '2015', id: '3' }
  ]);

  const addTag = (tag: string): void => {
    const clearTag = tag.trim();
    if (clearTag.length !== 0) {
      //TODO: ID can be the same in array, it happens by deleting tag. When I will get data from API, it will not happen.
      setTempTags((prevState) => [...[...prevState], { title: tag, id: String(prevState.length + 1) }]);
    }

    setIsTag(false);
  };

  const deleteTag = (id: string): void => {
    const newList = tempTags.filter(function (item) {
      return item.id !== id;
    });

    setTempTags(newList);
  };

  return (
    <div className={s.customBlock}>
      <p className={s.title}>Custom Notification</p>
      <p className={s.description}>You will receive emails when a new car with this filter appears in the sysstem.</p>
      <div className={s.tagsBlock}>
        <Tags list={tempTags} deleteTag={deleteTag} />
      </div>
      {isTag ? (
        <TagInput setIsTag={setIsTag} addTag={addTag} />
      ) : (
        <p className={s.addNew} onClick={() => setIsTag(true)}>
          + Add New
        </p>
      )}
      <div className={s.buttonWrapper}>
        <button className={s.button}>Save Changes</button>
      </div>
    </div>
  );
};

export default Custom;
