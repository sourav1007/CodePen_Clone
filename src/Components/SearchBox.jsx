
import React from 'react'

function SearchBox(props) {
  const name = props.name;

  function search() {
    const val=props.influencers.filter((influencer)=>{
      return influencer.influencerId == name.current.value;
    })
    if(name.current.value.length === 0){
       props.setData(props.influencers);
    }
    else if(!val){
      props.setData([])
    }
    else{
      props.setData(val)

    }

  }

  return (
    <div className='flex bg-[#383434] p-2 m-4'>
      <input ref={props.name} onInput={search} className='px-2 py-1 text-white outline-none' type="text" placeholder='Search Item by Id' />
  
    </div>
  )
}

export default SearchBox
