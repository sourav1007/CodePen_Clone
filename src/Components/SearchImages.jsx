import axios from 'axios';
import React, { useState } from 'react';

function SearchImages() {
    const [value, setValue] = useState("");
   
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const accessKey = `5kfg0kSbFfTDcCilAIui3cuLnnqTJCdXOB2SDPnqQr0`;
    let result;
    


    async function fetchData(value, currentPage) {

        const url = `https://api.unsplash.com/search/photos?query=${value}&per_page=28&page=${currentPage}&client_id=${accessKey}`;
        try {
            const response = await axios.get(url);
            if (response.data.results.length !== 0) {
                 result = await response.data.results;
                setData((prev) => {
                    let val = [...prev, ...result];
                    return val;
                });


            } else {

             
                setData([]);


            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        }
    }


    function searchImage() {
        fetchData(value, page);
    }


    function loadMore() {

        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(value, nextPage);

    }
  

    return (
        <div className="bg-black overflow-auto h-full">
          
            <div className="p-2 text-center w-full">
                <input
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    className="p-4 w-1/2 outline-none border rounded-md"
                    type="text"
                    placeholder="Search Images"
                />
                <button
                    className="bg-yellow-400 text-black py-4 px-6 font-bold ml-2"
                    onClick={searchImage}
                >
                    Search
                </button>
            </div>
            <div className=' text-center mt-6'>
                {
                    data.length === 0 && <h1>Search images of anything here</h1>
                    
                } 
                
            </div>



            {data.length > 0 && (

                <div className="flex flex-wrap justify-center gap-y-5 gap-x-1 my-5">
                    {data.map((item, id) => (
                        <img
                            className="w-[30%] object-cover border-[1px] border-transparent cursor-pointer hover:border-[1px] hover:border-white rounded-md shadow-md"
                            key={id}
                            src={item.urls.regular}
                            alt={item.alt_description || "Image"}
                        />
                    ))}
                </div>
            )}

            <div className=' text-center '>
                {data.length > 0 && (
                    <button
                        onClick={loadMore}
                        className="bg-yellow-400 border-[1px] border-transparent cursor-pointer hover:border-[1px] hover:border-white rounded-md hover:bg-yellow-500 text-black w-[70%]  font-bold  p-2  text-xl my-2"
                    >
                        Load More
                    </button>
                )}

            </div>

        </div>
    );
}

export default SearchImages;
