// import fetchResult from "../../helpers/stockData.json";
import {useEffect, useState} from "react";
const URL = 'https://jsonmock.hackerrank.com/api/stocks';
const StockData = (): JSX.Element => {
  const [daysCount, setDaysCount] = useState(0);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any[] | null>(null);
  const [pages, setPages] = useState(0);
  const sizes = new Set();
  const [isDisable, setIsDisable] = useState(false);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  const repeatDataFetch = async(page:any) => {
    const uri = `${URL}?page=${page}`;
   

    const response = await fetch(uri);
    const jsonResponse = await response.json();

    setData(prev => prev? [...prev, ...jsonResponse.data] : [...jsonResponse.data]);
    setPages(jsonResponse.total_pages)
    setIsDisable(true);
    if(Number(jsonResponse.total_pages) >= Number(++page)){
      repeatDataFetch(page);
      console.log('page: ', page);
    }
    else {
      setIsAllDataLoaded(true);
    }
  }

  
  const handleFetch = async() => {
    let p = 1;
    try{
      repeatDataFetch(p);
      // console.log(jsonResponse.data);
      // setData(jsonResponse.data);
      // setPages(jsonResponse.total_pages)
      // setIsDisable(true);
    }
    catch(e: any) {
      setError(e);
    }
    finally{
      // todo
    }
  }

  useEffect(() => {
    if(data){
        for(let i = 0; i < data?.length; i++){
          sizes.add(data[i].date);
        }
        setDaysCount(sizes.size);
      }
  }, [data])

  useEffect(() => {
    if(isAllDataLoaded){
      const keyinfo = {low: -1, avg: 0};
      let lowest = Infinity;
      let sumOpen = 0;
      if(data){
         for(let i = 0; i < data?.length; i++){
          if(lowest > data[i].low){
            lowest = data[i].low;
          }
          sumOpen += data[i].open;
        }
        keyinfo.low = lowest;
        keyinfo.avg = sumOpen/data.length;
        console.log(keyinfo);
      }
      
    }
  }, [isAllDataLoaded])

  return (
  <div className="layout-column align-items-start mt-50">
    <section className="layout-column align-items-start">
      <div data-testid="data-information-start">
        <h4>Data information</h4>
        <label>Data Availables for {daysCount} days</label>
        <button onClick={handleFetch} disabled={isDisable}>Fetch Data</button>
        {data && <div>{data.length}</div>}
        <div className="p-4"
          style={{
          overflowX: "auto",
          overflowY: "auto",
          maxHeight: "500px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        >

       <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Open</th>
            <th className="border px-4 py-2">High</th>
            <th className="border px-4 py-2">Low</th>
            <th className="border px-4 py-2">Close</th>
          </tr>
        </thead>
        <tbody>
            {
              data && 
                data.map((row, idx) => (
                  <tr key={idx} className="text-center">
                      <td className="border px-4 py-2">{row.date}</td>
                      <td className="border px-4 py-2">{row.open}</td>
                      <td className="border px-4 py-2">{row.high}</td>
                      <td className="border px-4 py-2">{row.low}</td>
                      <td className="border px-4 py-2">{row.close}</td>
                    </tr>
                ))
              
            }

        </tbody>
      </table>
    </div>



      </div>
      <div data-testid="key-stock-information">
        <h4>Key stock information</h4>


            <div>{}</div>



      </div>
      <div data-testid="investment-calculator">
        <h4>Investment calculator</h4>
      </div>
    </section>
  </div>
);
}

export default StockData;


// data fetch

/*
{
  "page": 1,
  "per_page": 500,
  "total": 2500,
  "total_pages": 5,
  "data": [ {
      "date": "5-January-2000",
      "open": 5265.09,
      "high": 5464.35,
      "low": 5184.48,
      "close": 5357
    },
    {
      "date": "6-January-2000",
      "open": 5424.21,
      "high": 5489.86,
      "low": 5391.33,
      "close": 5421.53
    },
]
}

*/