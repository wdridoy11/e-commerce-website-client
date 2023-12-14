const url = `${process.env.REACT_APP_API_URL}`;

export const getData = async(path)=>{
    const respons = await fetch(`${url}/${path}`)
    const data = await respons.json();
    return data
}