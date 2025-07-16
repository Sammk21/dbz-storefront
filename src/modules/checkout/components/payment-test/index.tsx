import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      Cash On delivery
    </Badge>
  )
}

export default PaymentTest
