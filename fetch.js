import fetch from 'node-fetch';
import querystring from 'querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6';

const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        limit: 10,
        offset,
    };
    return baseUrl + '?' + querystring.stringify(parameters);
};

const fetchData = async (offset) => {
    const response = await fetch(createRequestUrl(offset));
    const { total, count, limit, offset: responseOffset, records } = await response.json();
    console.log('data available');
    console.log('total', total);
    console.log('count', count);
    console.log('limit', limit);
    console.log('offset', responseOffset);
    return records;
};

const promise1 = fetchData(31);
const promise2 = fetchData(51);
const promise3 = fetchData(61);

const dataArray = await Promise.all([promise1, promise2, promise3]);

// Combine the data in one array using the spread operator
const combinedDataArray = [...dataArray[0], ...dataArray[1], ...dataArray[2]];

console.log('Combined data:');
console.log(combinedDataArray);
console.log('Script microtask execution complete.');