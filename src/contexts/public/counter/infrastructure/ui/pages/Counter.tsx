import { Button } from '../../../../../shared/infrastructure/ui/components'


export const Counter = () => {

  // const {
  //   count,
  // } = useCounterViewModel()

  return (
    <div className='Counter'>
      <Button disabled>
        dec
      </Button>
      {/* <span>{ count }</span> */}
      <Button>
        inc
      </Button>

    </div>
  )
}
