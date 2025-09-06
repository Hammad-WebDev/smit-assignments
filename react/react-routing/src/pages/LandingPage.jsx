import React, { useEffect, useState } from 'react'

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let fetchApi = await fetch('https://randomuser.me/api/?results=20');
      let res = await fetchApi.json();
      setData(res.results);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

      {!loading ? (<div className="min-h-screen bg-gray-100 py-10 px-5">
        {/* <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Users List
        </h1> */}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">{user.phone}</p>
            </div>
          ))}
        </div>
      </div>) : (<div className="mx-auto mt-7 w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>)}

    </>
  );
};

export default LandingPage;
