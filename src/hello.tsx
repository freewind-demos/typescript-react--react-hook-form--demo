import React, {FC} from 'react';
import {useForm} from 'react-hook-form';

type FormData = {
  firstname: string,
  lastname: string,
  age: number,
  nested: {
    myValue: string
  }
}

export const Hello: FC = () => {
  const {register, handleSubmit, errors, formState} = useForm<FormData>(); // initialize the hook
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input name="firstname" ref={register}/> {/* register an input */}
      </div>
      <div>
        <input name="lastname" ref={register({required: true})}/>
        {errors.lastname && 'Last name is required.'}
      </div>
      <div>
        <input name="age" ref={register({pattern: /\d+/})}/>
        {errors.age && 'Please enter number for age.'}
      </div>
      <div>
        <input name="nested.value" ref={register()}/>
      </div>
      <input type="submit"/>
    </form>
  );
}
