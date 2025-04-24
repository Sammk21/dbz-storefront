import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@lib/components/ui/table"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items

  return (
    <div>
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem]">Cart</Heading>
      </div>
      <div className="p-3">
        <Table>
          <TableHeader className="">
            <TableRow className="text-ui-fg-subtle txt-medium-plus">
              <TableHead className="pl-0">Item</TableHead>
              <TableHead></TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="hidden small:table-cell">Price</TableHead>
              <TableHead className="pr-0 text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items
              ? items
                  .sort((a, b) => {
                    return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                  })
                  .map((item) => {
                    return (
                      <Item
                        key={item.id}
                        item={item}
                        currencyCode={cart?.currency_code}
                      />
                    )
                  })
              : repeat(5).map((i) => {
                  return <SkeletonLineItem key={i} />
                })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ItemsTemplate
