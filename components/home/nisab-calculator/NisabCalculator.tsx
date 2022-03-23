import type { NextPage } from 'next';
import { FormEvent, FormEventHandler, useState } from 'react';
import { FormControl, FormGroup, FormLabel, Button, Form } from 'react-bootstrap';

import styles from './NisabCalculator.module.scss';

const NisabCalculator: NextPage = () => {
  const [isValid, setIsValid] = useState(true);
  const [price, setPrice] = useState('');
  const [nisab, setNisab] = useState(0);

  const calculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valid = validatePrice(price);
    setIsValid(valid);

    if (valid === true) {
      setNisab(28 * Number(price));
    }
  };

  return (
    <div className={styles.container}>
      <h3>احسب قيمة النصاب</h3>
      <ul>
        <li>مقدار نصاب الذهب عيار ٢٤ هو: ٨٥ جرام</li>
        <li>مقدار نصاب الفضة هو: ٥٩٥ جرام</li>
      </ul>
      <Form onSubmit={calculate}>
        <FormGroup>
          <FormLabel className={styles.label}>سعر جرام الذهب عيار ٢٤</FormLabel>
          <FormControl
            type="number"
            className={styles.input}
            placeholder={'سعر جرام الذهب عيار ٢٤'}
            isInvalid={!isValid}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormControl.Feedback type="invalid">أدخل سعر صحبح للذهب</FormControl.Feedback>
        </FormGroup>

        <Button className={styles.submit} type={'submit'}>
          احسب قيمة النصاب
        </Button>
      </Form>

      {nisab > 0 && (
        <p className={styles.nisab}>
          قيمة النصاب: <strong>{nisab}</strong> من نفس العملة
        </p>
      )}
    </div>
  );
};

export default NisabCalculator;

function validatePrice(price: string) {
  let isValid = true;

  if (!price || Number(price) < 1 || Number(price) > 100000) {
    isValid = false;
  }

  return isValid;
}
