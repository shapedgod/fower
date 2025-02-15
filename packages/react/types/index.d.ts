/// <reference types="@fower/preset-web" />
/// <reference types="react" />
import React, { PropsWithChildren, ComponentProps } from 'react'
import { AtomicProps, As } from '@fower/types'

export interface BoxComponent<T extends As, P = any> {
  <AsType extends As = 'div'>(
    props: {
      as?: AsType
    } & P &
      Omit<ComponentProps<AsType>, keyof ComponentProps<T>> &
      Omit<ComponentProps<T>, keyof P> &
      AtomicProps,
  ): JSX.Element
  displayName?: string
  propTypes?: React.WeakValidationMap<PropsWithChildren<P> & ComponentProps<T>>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: PropsWithChildren<P> &
    ComponentProps<T> &
    AtomicProps & {
      as?: As
    }
}
export declare const Box: BoxComponent<'div', {}>

/**
 * JSX Pragma
 * TODO: this is minimal version
 * @param element element type
 * @param props element props
 * @param children  element children
 */
export declare function jsx(
  element: string,
  props?: any,
  ...children: any[]
): import('react').ReactElement<
  {},
  | string
  | ((
      props: any,
    ) =>
      | import('react').ReactElement<
          any,
          string | any | (new (props: any) => import('react').Component<any, any, any>)
        >
      | null)
  | (new (props: any) => import('react').Component<any, any, any>)
>

export declare const View: import('@fower/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLDivElement> &
    import('react').HTMLAttributes<HTMLDivElement> &
    import('@fower/types').AtomicProps &
    import('@fower/styled/dist/types').InjectedProps
>
export declare const Text: import('@fower/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLSpanElement> &
    import('react').HTMLAttributes<HTMLSpanElement> &
    import('@fower/types').AtomicProps &
    import('@fower/styled/dist/types').InjectedProps
>
export declare const Image: import('@fower/styled/dist/types').StyledComponent<
  import('react').ClassAttributes<HTMLImageElement> &
    import('react').ImgHTMLAttributes<HTMLImageElement> &
    import('@fower/types').AtomicProps &
    import('@fower/styled/dist/types').InjectedProps
>
