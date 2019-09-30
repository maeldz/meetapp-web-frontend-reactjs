import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

registerLocale('ptBR', ptBR);

export default function DatePicker() {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField('date');
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        locale="ptBR"
        timeFormat="p"
        minDate={new Date()}
        dateFormat="d 'de' MMMM, 'às' H:mm'h'"
      />
      {error && <span>{error}</span>}
    </>
  );
}
