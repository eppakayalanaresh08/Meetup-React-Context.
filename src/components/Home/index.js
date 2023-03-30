import {Link} from 'react-router-dom'

import ReactContext from '../../context/ReactContext'

import Header from '../Header'

import {
  Heading,
  RegisterElement,
  ButtonRegister,
  ImageHome,
  MainContainer,
  HeadingElement,
  RegisterUSerOption,
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

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {isRegister, InputValue, SearchOptions} = value
        const optionsInput =
          topicsList[
            topicsList.findIndex(eachTopic => eachTopic.id === SearchOptions)
          ].displayText

        return (
          <div>
            <Header />
            {isRegister ? (
              <MainContainer>
                <HeadingElement>Hello {InputValue}</HeadingElement>
                <RegisterUSerOption>
                  WelCome to {optionsInput}
                </RegisterUSerOption>
                <ImageHome
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </MainContainer>
            ) : (
              <MainContainer>
                <Heading>Hello WelCome to Meetup</Heading>
                <RegisterElement>Please register for the topic</RegisterElement>
                <Link to="/register">
                  <ButtonRegister type="button" onClick={onClickRegister}>
                    Register
                  </ButtonRegister>
                </Link>
                <ImageHome
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </MainContainer>
            )}
          </div>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default Home
