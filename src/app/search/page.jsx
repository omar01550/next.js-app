import React from 'react'
import Card from '../components/card/card';

export const metadata = {
    title: "",
    description: "search page for "
}





const SearchPage = async (params) => {




    const searchWord = params.searchParams.word;


    metadata.title = "search for " + params.searchParams.word

    try {
        const res = await fetch("http://localhost:3000/api/search?title=" + params.searchParams.word, {
            cache: "no-store"
        });
        const result = await res.json();

        return (
            <main className="search-page w-[100%] min-h-screen bg-red">

                <div className="container py-6 px-10">
                    <h1 className="search-page-title text-center text-3xl text-black font-blod">
                        result For {searchWord}
                    </h1>

                    <div className="flex flex-wrap justify-around  items-center py-10">
                        {result.map((ele) => {
                            metadata.description += ele.title + " ";
                            return (
                                <Card
                                    id={ele._id}
                                    image={ele.image}
                                    title={ele.title}
                                    description={ele.describtion}

                                />

                            )
                        })}
                    </div>
                </div>
            </main>
        )


    } catch (error) {
        return (
            <div className="error w-[100%] h-[100vh] flex justify-center align-center">
                <h1>No result about {searchWord}</h1>
            </div>
        )
    }






}

export default SearchPage





