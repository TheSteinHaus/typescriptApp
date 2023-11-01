import { Cards } from "../types/Cards";

type SubTaskAdd = (
  id: string,
  array: Cards[],
  task: Cards,
) => Cards[];

type SubTask = (
  id: string,
  array: Cards[],
) => Cards[];

type SearchTask = (
  id: string,
  array: Cards[],
) => Cards | null;

type CompleteTask = (
  array: Cards[],
  state: boolean,
) => Cards[];

export const subTaskAdd : SubTaskAdd = (id, array, task) => {
    return array.reduce((arr: Cards[], item) => {
      if (item.id === id) {
          item.subCards.push(task);
          arr.push(item);
      } else {
          arr.push({...item, subCards: subTaskAdd(id, item.subCards, task)});
      }
  
      return arr;
    }, []);
  };

  export const recursionFilter : SubTask = (id, array) => {
    return array.reduce((arr: Cards[], item) => {
      if (item.id !== id) {
        arr.push({...item, subCards: recursionFilter(id, item.subCards)});
      } 
  
      return arr;
    }, []);
  };

  export const recursionSearch : SearchTask = (id, array) => {
    for (let item of array) {
      if (item.id === id) {
        return item;
      }
  
      const subItem = recursionSearch(id, item.subCards);
      
      if (subItem) {
        return subItem;
      }
    }
  
    return null;
  };

  export const recursionCompleteToggler : SubTask = (id, array) => {
    return array.reduce((arr: Cards[], item) => {
      if (item.id !== id) {
          arr.push({...item, subCards: recursionCompleteToggler(id, item.subCards)});
      } else {
          arr.push({
            ...item, 
            isCompleted: !item.isCompleted, 
            subCards: subTasksCompleteToggler(item.subCards, !item.isCompleted)
          });
      }
  
      return arr;
    }, []);
  };
  
  export const subTasksCompleteToggler : CompleteTask = (array, state) => {
    return array.reduce((arr: Cards[], item) => {
      arr.push({
        ...item, 
        isCompleted: state, 
        subCards: subTasksCompleteToggler(item.subCards, state)
      });
  
      return arr;
    }, []);
  };