import type { NextPage } from 'next';
import { FormEvent, FormEventHandler, useState } from 'react';
import { FormControl, FormGroup, FormLabel, Button, Form } from 'react-bootstrap';

import styles from './ZakahCalculator.module.scss';

const ZakahCalculator: NextPage = () => {
  const [isValid, setIsValid] = useState(true);
  const [amount, setAmount] = useState('');
  const [zakah, setZakah] = useState(0);

  const calculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valid = validatePrice(amount);
    setIsValid(valid);

    if (valid === true) {
      setZakah(Number(amount) * 0.025);
    }
  };

  return (
    <div className={styles.container}>
      <h3>احسب قيمة الزكاه</h3>

      <p>قيمة الزكاه هي ربع العشر من كافة الأصول التي تمتلكها خلال عام كامل بأي عملة</p>

      <Form onSubmit={calculate}>
        <FormGroup>
          <FormLabel className={styles.label}>قيمة كافة الاصول</FormLabel>
          <FormControl
            type="number"
            className={styles.input}
            placeholder={'قيمة كافة الاصول'}
            isInvalid={!isValid}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <FormControl.Feedback type="invalid">أدخل قيمة أصول صحيحة</FormControl.Feedback>
        </FormGroup>

        <Button className={styles.submit} type={'submit'}>
          احسب قيمة الزكاه
        </Button>
      </Form>

      {zakah > 0 && (
        <p className={styles.zakah}>
          قيمة الزكاه: <strong>{zakah}</strong> من نفس العملة
        </p>
      )}
    </div>
  );
};

export default ZakahCalculator;

function validatePrice(amount: string) {
  let isValid = true;

  if (!amount || Number(amount) < 1) {
    isValid = false;
  }

  return isValid;
}
