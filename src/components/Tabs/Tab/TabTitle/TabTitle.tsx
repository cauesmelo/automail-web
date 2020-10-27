import React, { useCallback } from "react";
import Button from '../../../Button/index';
import {
  ItemList
} from './styles';

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <ItemList>
      <Button onClick={onClick}>{title}</Button>
    </ItemList>
  )
}

export default TabTitle