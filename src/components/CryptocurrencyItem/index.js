import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = eachItem
  return (
    <li className="crypto-item-container">
      <div className="logo-name-container">
        <img className="logo-styles" src={currencyLogo} alt={currencyName} />
        <p className="name-styles">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="value-styles">{usdValue}</p>
        <p className="value-styles">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
