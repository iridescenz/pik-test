import React from 'react';
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
} from '../style/ui/index';
import {
  timeBasedBackground,
   greeting 
} from '../helpers/index';

export const PageComponent = () => {
  return (
    <>
      <Content img={timeBasedBackground()}>
        <Form>
          <FormHeader>{greeting()}</FormHeader>
          <SubHeader>Для бронирования помещений заполните форму</SubHeader>
          <UserForm>
            <NameForm>
              <Input size="sm" placeholder="Ваше имя" />
              <Input size="sm" placeholder="Ваша фамилия" />
            </NameForm>
            <Input placeholder="Телефон" />
            <Input placeholder="E-mail" />
            <Input placeholder="Количество помещений" />
            <Button>Забронировать 8 помещений</Button>
            <Disclaimer>Это дисклеймер, который есть во всех формах</Disclaimer>
          </UserForm>
        </Form>
      </Content>
    </>
  );
};
