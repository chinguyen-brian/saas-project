import { JSX } from 'react';

interface ListItemProps {
  data: unknown[];
  className: string;
  renderItem: (item: unknown) => JSX.Element;
}

const ListItem = ({ data, className, renderItem }: ListItemProps) => {
  return (
    <div className={`grid gap-4 ` + className}>
      {data.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
};

export default ListItem;
