import React, {useState} from 'react';
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
import { timeBasedBackground, greeting } from '../helpers/index';
 


export const PageComponent = () => {
  const [surname, setSurname] = useState('')
  const [name, setName] = useState('')

  console.log(surname)
  return (
    <>
      <Content img={timeBasedBackground()}>
        <Form>
          <FormHeader>{greeting()}</FormHeader>
          <SubHeader>Для бронирования помещений заполните форму</SubHeader>
          <UserForm>
            <NameForm>
              <Item>
                <Input size="sm" placeholder="Ваше имя" />
                <Label>Ваше имя </Label>
              </Item>
              <Item>
                <Input size="sm" placeholder="Ваша фамилия" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <Label>Ваша фамилия</Label>
              </Item>
            </NameForm>
            <Item>
              <Input placeholder="Телефон" />
              <Label>Телефон </Label>
            </Item>
            <Item>
              <Input placeholder="E-mail " />
              <Label>E-mail </Label>
            </Item>
            <Item>
              <Input placeholder="Количество помещений " />
              <Label>Количество помещений</Label>
            </Item>
            <Button>Забронировать 8 помещений</Button>
            <Disclaimer>Это дисклеймер, который есть во всех формах</Disclaimer>
          </UserForm>
        </Form>
      </Content>
    </>
  );
};
