import React, { useState } from 'react';
import s from './TagInput.module.scss';
import OutsideClickHandler from 'react-outside-click-handler';
import AutosizeInput from 'react-input-autosize';
import Close from './../../../../../../components/close-modal-button/CloseModalButton';

interface Props {
  setIsTag: (status: boolean) => void;
  addTag: (tag: string) => void;
}

const TagInput = ({ setIsTag, addTag }: Props): JSX.Element => {
  const [input, setInput] = useState('');

  const inputHandler = (value: string): void => {
    setInput(value);
  };

  return (
    <div className={s.tagInputWrapper}>
      <OutsideClickHandler onOutsideClick={() => addTag(input)}>
        <AutosizeInput
          minWidth={55}
          className={s.tagInput}
          value={input}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <Close onModalToggle={() => setIsTag(false)} classes={[s.closeTagInput]} />
      </OutsideClickHandler>
    </div>
  );
};

export default TagInput;
