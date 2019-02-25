import { useData, useMounted, useState, useEffect, useComputed, useUpdated, useDestroyed} from 'vue-hooks';

export function toggleHook(value) {
  
  const data = useData({isShowing: value})

  const opposite = useComputed(()=>  !data.isShowing)

  useMounted(()=> {
    console.log('mounted');
  })

  useUpdated(()=> {
    console.log('updated')
  });

  useDestroyed(()=> {
    console.log('destroyed')
  });

  useEffect(()=> {
    document.title = 'UseData is ' + data.isShowing;
  });

  return {
    data,
    opposite
  }
  
}