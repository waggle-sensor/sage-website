import CustomBanner from '@site/src/components/CustomBanner'

// add custom banner above the navbar
export default function Root(props) {
  return <>
    <CustomBanner />
    {props.children}
  </>
}