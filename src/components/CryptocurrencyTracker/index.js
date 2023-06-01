import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {listOfCrypto: [], isLoading: true}

  componentDidMount() {
    this.getListOfCrypto()
  }

  getListOfCrypto = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({listOfCrypto: updatedData, isLoading: false})
  }

  render() {
    const {listOfCrypto, isLoading} = this.state
    console.log(listOfCrypto)
    console.log(isLoading)
    return (
      <div className="bg-container">
        <CryptocurrenciesList />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul>
            {listOfCrypto.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
