export interface Item {
    id: number;
    name: string;
  }
  
  let items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  
  export const getItems = async (): Promise<Item[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(items), 1000);
    });
  };
  
  export const getItemById = async (id: number): Promise<Item | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(items.find((item) => item.id === id)));
    });
  };
  
  export const createItem = async (name: string): Promise<Item> => {
    return new Promise((resolve) => {
      const newItem = { id: items.length + 1, name };
      items.push(newItem);
      setTimeout(() => resolve(newItem));
    });
  };
  
  export const updateItem = async (id: number, name: string): Promise<Item | undefined> => {
    return new Promise((resolve) => {
      const item = items.find((item) => item.id === id);
      if (item) {
        item.name = name;
        setTimeout(() => resolve(item), 1000);
      } else {
        resolve(undefined);
      }
    });
  };
  
  export const deleteItem = async (id: number): Promise<void> => {
    return new Promise((resolve) => {
      items = items.filter((item) => item.id !== id);
      setTimeout(() => resolve(), 1000);
    });
  };