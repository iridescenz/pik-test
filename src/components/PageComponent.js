import React, { useState } from 'react';
import {
  Form,
  Input,
  NameForm,
  UserForm,
  Button,
  Disclaimer,
  Content,
  FormHeader,
  SubHeader,
  Label,
  Item,
} from '../style/ui/index';
import { timeBasedBackground, flatCases, greeting } from '../helpers/index';

export const PageComponent = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [flatsCount, setFlatsCount] = useState('');
  const [time, setTime] = useState('');

  const orderInfo = {
    user: {
      firstName,
      lastName,
      mail,
      phone,
    },
    order: {
      flatsCount,
      time,
    },
  };
  return (
    <>
      <Content img={timeBasedBackground()}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(orderInfo);
          }}
        >
          <FormHeader>{greeting()}</FormHeader>
          <SubHeader>Для бронирования помещений заполните форму</SubHeader>
          <UserForm>
            <NameForm>
              <Item>
                <Input
                  size="sm"
                  placeholder="Ваше имя"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Label>Ваше имя </Label>
              </Item>
              <Item>
                <Input
                  size="sm"
                  placeholder="Ваша фамилия"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Label>Ваша фамилия</Label>
              </Item>
            </NameForm>
            <Item>
              <Input placeholder="Телефон" onChange={(e) => setPhone(e.target.value)} />
              <Label>Телефон </Label>
            </Item>
            <Item>
              <Input placeholder="E-mail" onChange={(e) => setMail(e.target.value)} />
              <Label>E-mail </Label>
            </Item>
            <Item>
              <Input
                placeholder="Количество помещений"
                onChange={(e) => setFlatsCount(e.target.value)}
              />
              <Label>Количество помещений</Label>
            </Item>
            <Button
              onClick={() => setTime(Date.now())}
              value={
                flatsCount && !Number.isNaN(+flatsCount)
                  ? `${flatCases(Number(flatsCount))}`
                  : 'Забронировать помещения'
              }
            />
            <Disclaimer>Это дисклеймер, который есть во всех формах</Disclaimer>
          </UserForm>
        </Form>
      </Content>
    </>
  );
};
