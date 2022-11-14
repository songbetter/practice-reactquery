import { FormattedNumber } from 'react-intl'
import { local } from '../../lang/IntlWrapper'
const ProductItem = ({ name, description, price, imageUrl }) => {
  return (
    <section className="p-2">
      <div className="text-xl pb-2 font-medium">{name}</div>
      <div className="w-96 h-24">{description}</div>
      <div className="text-xl text-orange">
        <FormattedNumber
          value={price}
          style="currency"
          currency={currency[local]}
        />
      </div>
      <img src={imageUrl} loading="lazy" className="py-2" />
    </section>
  )
}

export default ProductItem

// 환율이 계산되지는 않는다....!
const currency = {
  en: 'USD',
  ko: 'KRW',
  jp: 'JPY',
}
