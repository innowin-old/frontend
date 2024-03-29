// @flow
import * as React from 'react'
import Exchange from './Exchange'
import ExchangeSkeleton from './Exchange_Skeleton'

type appProps =
    {|
      exchanges: { exchange: {} },
      justFollowing: boolean,
      loading: boolean
    |}

const loadingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Exchanges = (props: appProps) => {
  let {exchanges, justFollowing} = props

  exchanges = Object.values(exchanges).filter((exchange: Object) =>
      exchange.exchange ?
          exchange.exchange.content.id
          :
          exchange.exchange
  )

  if (justFollowing) {
    exchanges = exchanges.filter((exchange: Object) =>
        exchange.exchange ?
            exchange.exchange.content.exchange
            :
            exchange.exchange
    )
  }

  if (exchanges.length > 0) {
    return <React.Fragment>
      {
        exchanges.map((exchange: Object, i: number): any =>
            <Exchange key={i} data={exchange.exchange ? exchange.exchange.content : exchange.exchange}/>
        )
      }
    </React.Fragment>
  }
  else if (!props.loading) {
    return <div className='exchanges-explore-not-found'>پنجرهی یافت نشد!</div>
  }
  else return <React.Fragment>
      {
        loadingArr.map((exchange: Object): any =>
            <ExchangeSkeleton key={exchange}/>
        )
      }
    </React.Fragment>
}

export default Exchanges