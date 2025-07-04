import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { source_code } from "@modules/home/components/featured-products/slider"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { Source_Code_Pro } from "next/font/google"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer
      className={`border-t border-ui-border-base w-full ${source_code.className}`}
    >
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col h-full gap-y-6 xsmall:flex-row items-start justify-between py-16">
          <div className="h-full w-full flex flex-col justify-between">
            <LocalizedClientLink
              href="/"
              className="text-3xl font-round-8 text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Divide By Zero
            </LocalizedClientLink>
            <Text className="text-xs mt-24 font-normal uppercase">
              © {new Date().getFullYear()} Divide By Zero. All rights reserved.
            </Text>
          </div>
          <div
            className={`text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3 `}
          >
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-ui-fg-base">Categories</span>
                <ul
                  className="grid grid-cols-1 gap-2 text-ui-fg-subtle"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li className="flex flex-col gap-2 t" key={c.id}>
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base text-xs font-normal uppercase",
                            children && ""
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base text-xs font-normal uppercase"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-1">
                <span className=" txt-ui-fg-base">Collections</span>
                <ul
                  className={clx("grid grid-cols-1 gap-2 text-ui-fg-subtle  ", {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  })}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base text-xs font-normal uppercase"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className=" txt-ui-fg-base">Support</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle ">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return or Exchange
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
