import React from 'react'

export interface DinkieIconProps {
  className: string
}

const iconComponentHelper = ({ className }: DinkieIconProps, size: number, path: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`} className={className}>
    <path fill="currentColor" d={path} />
  </svg>
)

export const DinkieIconCherries12 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    12,
    'M7 11h3v-1h1V7h-1V6H9V3H8v3H7v1h1v1H7V7H6v3h1Zm-6 1h3v-1h1V8H4V5H3v2H1v1h1v1H1V8H0v3h1Zm3-7h1V4H4Zm1-1h1V3H5Zm1-1h1V2H6Zm3 0h1V2h1V1H7v1h2Zm0 0'
  )

export const DinkieIconCherries10 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    10,
    'M6 9h2V8h1V6H8V5H7V2h1V1H5v1h1v4h1v1H6V6H5v2h1Zm-5 1h2V9h1V7H3V4H2v2H1v1h1v1H1V7H0v2h1Zm2-6h1V3H3Zm1-1h1V2H4Zm0 0'
  )

export const DinkieIconBird12 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    12,
    'M4 10h6V9H9V8H8v1H7V8H6v1H4Zm-2 1h1v-1H2Zm-1-1h1V4H1Zm2 2h7v-1H3Zm0-3h1V6H3ZM0 4h1V3H0Zm1-1h1V2H1Zm5 4h1V6H6Zm1 1h1V7H7Zm3 3h1v-1h-1ZM3 4h1V3H3Zm1 2h2V2H5v3H4ZM2 2h3V1H2Zm0 0'
  )

export const DinkieIconBirdFilled12 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    12,
    'M3 12h7v-1h1v-1h-1V9H9v1H4V9H3V6h1V5h1v1H4v3h5V8H8V7H7V6H6V2H5V1H2v1H1v1H0v1h1v6h1v1h1Zm0-8V3h1v1Zm0 0'
  )

export const DinkieIconSmirkingFace12 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    12,
    'M4 9h1V8h2v1h1V7H3v1h1Zm-3 2h1v-1H1Zm1 1h7v-1H2Zm-2-2h1V3H0Zm5 0h2V9H5ZM4 6h1V4H2v1h2ZM1 3h1V2H1Zm8 8h1v-1H9ZM8 6h1V4H6v1h2ZM2 2h7V1H2Zm8 8h1V3h-1ZM9 3h1V2H9Zm0 0'
  )

export const DinkieIconTwitter12 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    12,
    'M9 9H8v1h1Zm0 0h1V6h1V5h-1V4h1V3H9Zm-8 2h2v-1H1Zm2 1h4v-1H3Zm0-2h1V9H3ZM2 9h1V8H2ZM1 8h1V6H1ZM0 6h1V4h1V3H1V2H0Zm7 5h1v-1H7ZM2 5h4V3H5v1H2Zm4-2h3V2H6Zm0 0'
  )

export const DinkieIconTwitter10 = (props: DinkieIconProps) =>
  iconComponentHelper(
    props,
    10,
    'M7 8H6v1h1Zm0 0h1V6h1V5H8V4h1V3H7ZM0 9h2V8H0Zm2 1h4V9H2Zm0-2h1V7H2ZM1 7h1V6H1ZM0 6h1V4h1V3H1V2H0Zm2-1h3V3H4v1H2Zm3-2h2V2H5Zm0 0'
  )
