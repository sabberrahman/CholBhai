import { IEvent } from '@/lib/database/model/event.model'
import React from 'react'
import { Button } from '../ui/button'

const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {
    const onCheckout=()=>{
        console.log("CheckOut");
    }
  return (
    <form action={onCheckout} method='post'>
        <Button type='submit' role='link' size="lg" className='button sm:w-fit'>
            {event.isFree?"Get Free Ticket":"Buy Ticket"}
        </Button>
    </form>
  )
}

export default Checkout