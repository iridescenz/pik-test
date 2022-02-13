import styled from 'styled-components';

export const Form = styled.div`
  width: 34rem;
  height: 40.5rem;
  background: #ffffff;
  border-radius: 8px;
`;
export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #cdcdcd;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormHeader = styled.h3`
  width: 20rem;
  height: 3rem;
  margin: 0 auto;
  margin-top: 3.5rem;
  font-size: 2.75rem;
  line-height: 3rem;
`;
export const SubHeader = styled.div`
  font-family: Graphik LCG;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  width: 19.625rem;
  height: 3rem;
  margin: 1rem auto 0;
  text-align: center;
  padding: 0 1.2rem;
`;

export const UserForm = styled.div`
  margin: 2rem 3.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
`;

export const NameForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  > input {
    margin-bottom: 0;
  }
  > div:nth-of-type(2n) {
    margin-left: 2rem;
  }
`;

export const Item = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
`

export const Label = styled.div`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  right: 1rem;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  line-height: 3.5rem;
  transition: .3s;
  color: #4d4d4d;


`;

export const Input = styled.input`
  padding: 1rem;
  color: #4D4D4D;
  background: #F2F4F7;
  border: none;
  border-radius: 3px;
  width: ${(props) => (props.size === 'sm' ? '12.5rem' : '100%')};
  height: 3.5rem;
  border: 1px solid #DCDCE6;
  margin-bottom: 1.5rem;

  :focus {
    outline: none;
    background-color: white;
  }

  &:focus ~ ${Label},
  &:not(:focus):valid ~ ${Label} & {
  top: -1rem;
  font-size: 0.7rem;
  color: #969BA5;
}
&:not(:placeholder-shown) ~ ${Label} {
  top: -1rem;
  font-size: 0.7rem;
  color: #969BA5;
}

::placeholder {
  opacity: 0;
}
`;

export const Button = styled.button`
  font-size: 1em;
  line-height: 1.25rem;
  font-weight: 600;
  padding: 1.125em 3.125em;
  border-radius: 4px;
  width: 100%;
  color: white;
  background-color: #ff4114;
  border: 1px solid #ff4114;
  cursor: pointer;
`;

export const Disclaimer = styled.div`
  height: 1rem;
  color: #969ba5;
  margin-top: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
`;


