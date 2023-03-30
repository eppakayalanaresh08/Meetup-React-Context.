import RegisterContext from '../../context/ReactContext'

import Header from '../Header'

import {
  ImageRegister,
  SelectUser,
  OptionsUser,
  JoinContainer,
  HeadingJoin,
  Label,
  InputElement,
  RegisterUserContainer,
  ButtonNow,
  ErrorName,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterUser = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        InputValue,
        SearchOptions,
        successMsg,
        errorMsg,
        addSelectDisplay,
        addTextDisplay,
        RegisterError,
      } = value

      const onClickDisplay = event => {
        console.log(event.target.value)
        addSelectDisplay(event.target.value)
      }

      const onChangeText = event => {
        console.log(event.target.value)
        addTextDisplay(event.target.value)
      }

      const renderButtonSubmit = event => {
        event.preventDefault()
        if (SearchOptions !== '' && InputValue !== '') {
          const {history} = props
          history.replace('/')
          successMsg()
        } else {
          errorMsg()
        }
      }

      return (
        <>
          <Header />
          <RegisterUserContainer>
            <ImageRegister
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <JoinContainer onSubmit={renderButtonSubmit}>
              <HeadingJoin>Let us Join</HeadingJoin>
              <Label htmlFor="NAME">NAME</Label>
              <InputElement
                type="text"
                placeholder="Your name"
                onChange={onChangeText}
                value={InputValue}
                id="NAME"
              />
              <Label htmlFor="TOPICS">TOPICS</Label>
              <SelectUser
                onChange={onClickDisplay}
                value={SearchOptions}
                id="TOPICS"
              >
                {topicsList.map(eahObject => (
                  <OptionsUser key={eahObject.id} value={eahObject.id}>
                    {eahObject.displayText}
                  </OptionsUser>
                ))}
              </SelectUser>
              <ButtonNow type="submit">Register Now</ButtonNow>
              {RegisterError && <ErrorName>Please enter your name</ErrorName>}
            </JoinContainer>
          </RegisterUserContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterUser
