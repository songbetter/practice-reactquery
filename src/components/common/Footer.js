import { defineMessages, FormattedMessage } from 'react-intl'

const Footer = () => {
  const link = (
    <a href="/" className="text-orange">
      <FormattedMessage {...messeges.cs} />
    </a>
  )
  return (
    <footer className="fixed bottom-4 left-4">
      <div className="flex-col">
        <div className="text-lg">Contact us</div>
        <div className="text-base">
          <FormattedMessage {...messeges.contactus} values={{ link }} />
        </div>
      </div>
    </footer>
  )
}
export default Footer

const messeges = defineMessages({
  cs: {
    id: 'footer_cs',
    defaultMessage: '"고객센터"',
  },
  contactus: {
    id: 'footer_contactus',
    defaultMessage: '카카오 플러스 친구 {link}에서 상담(10:00-18:00)',
  },
})
