import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchParam() {

    const [ searchParam , setSearchParam ] = useSearchParams({ q : "" , onlyComputerItems : false });

    const q = searchParam.get("q");
    const onlyComputerItems = searchParam.get("onlyComputerItems") === "true";

  return (
    <>
        <main>
            <h2>Search Param</h2>
            <input 
                type="text"
                placeholder="Enter Something"
                value={q}
                onChange={e => setSearchParam(prev => {
                    prev.set("q" , e.currentTarget.value);
                    return prev;
                },
                { replace : true }
                )}
            />
        </main>
    </>
  )
}
