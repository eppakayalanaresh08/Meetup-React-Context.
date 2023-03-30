import {
  NotFoundContainer,
  ImageNot,
  HeadingNot,
  WebContent,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <ImageNot
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <HeadingNot>Page Not Found</HeadingNot>
    <WebContent>
      We are Sorry, the page you requested could not be found
    </WebContent>
  </NotFoundContainer>
)

export default NotFound
