import React, { ReactElement, useState } from "react";
import TabTitle from "./Tab/TabTitle/TabTitle";
import {
    List
} from './styles';

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <List>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </List>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs