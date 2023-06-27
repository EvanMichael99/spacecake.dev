import { ChainId } from '@pancakeswap/sdk'
import { ONRAMP_API_BASE_URL } from 'config/constants/endpoints'
import BuyCrypto from 'views/BuyCrypto'

const BuyCryptoPage = ({ userIp }) => {
  return <BuyCrypto userIp={userIp} />
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${ONRAMP_API_BASE_URL}/user-ip`)
    const data = await response.json()
    const userIp = data.ipAddress

    return {
      props: { userIp },
    }
  } catch (error) {
    return {
      props: { userIp: null }, // Pass null as the user IP if an error occurs
    }
  }
}

BuyCryptoPage.chains = [ChainId.ETHEREUM, ChainId.BSC]

export default BuyCryptoPage
