import {useCallback, useState} from 'react';
type layoutType = {
  width: number;
  height: number;
};
export const useComponentSize = () => {
  const [size, setSize] = useState<layoutType>();
  const onLayout = useCallback((event: any) => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  }, []);
  return [size, onLayout];
};
