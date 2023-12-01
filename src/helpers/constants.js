export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '47.581359',
        bl_lng: '11.444217',
        tr_lat: '54.787659695054025',
        tr_lng: '9.438772758047714',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key':
            '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
    },
};

export const detailOptions = {
    headers: {
        'X-RapidAPI-Key':
            '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
    },
};