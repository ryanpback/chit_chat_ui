import styled from 'styled-components'
import variables from './variables'
// import helpers from 'helpers'

const SharedHeaderStyles = styled.div`
  height: 65px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${variables.colors.primary};
`

export { SharedHeaderStyles }
